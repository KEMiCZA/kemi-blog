import React, { useState } from 'react';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { SearchInput } from './SearchInput';
import { CodeBlock } from './CodeBlock';

interface Project {
  slug: string;
  entry: {
    title: string;
    description: string;
    status: string;
    link?: string;
  };
  content: any; // Keystatic document
}

interface ProjectListProps {
  projects: Project[];
}

const getDocumentText = (node: any): string => {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(getDocumentText).join(" ");
  if (node.text) return node.text;
  if (node.children) return getDocumentText(node.children);
  return "";
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const searchLower = searchTerm.toLowerCase();
    const contentText = getDocumentText(project.content).toLowerCase();

    return (
      project.entry.title.toLowerCase().includes(searchLower) ||
      project.entry.description.toLowerCase().includes(searchLower) ||
      contentText.includes(searchLower)
    );
  });

  return (
    <>
      <SearchInput value={searchTerm} onChange={setSearchTerm} placeholder="SEARCH_EXECUTABLES..." />
      <div className="grid gap-8">
        {filteredProjects.map(project => (
            <div key={project.slug} className="border-2 border-terminal-dim p-6 relative overflow-hidden group hover:border-accent-primary transition-colors bg-card">
                <div className="absolute top-0 right-0 p-2 text-xs font-bold uppercase bg-terminal-dim text-terminal-text group-hover:bg-accent-primary group-hover:text-terminal-bg transition-colors">
                    {project.entry.status}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-accent-primary">{project.entry.title}</h3>

                <p className="mb-4 opacity-80 text-terminal-text">{project.entry.description}</p>

                <div className="mb-6 prose prose-invert prose-sm max-w-none prose-p:text-terminal-text/80">
                     <DocumentRenderer
                        document={project.content}
                        renderers={{
                            block: {
                                code: CodeBlock,
                            },
                        }}
                     />
                </div>

                {project.entry.link && (
                    <a href={project.entry.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent-primary text-terminal-bg px-4 py-2 font-bold hover:bg-accent-secondary transition-colors no-underline shadow-[0_0_10px_rgba(0,240,255,0.5)] hover:shadow-[0_0_15px_rgba(217,0,255,0.8)]">
                        RUN_PROJECT &gt;&gt;
                    </a>
                )}
            </div>
        ))}

        {filteredProjects.length === 0 && (
            <p className="text-terminal-dim">No projects found matching query.</p>
        )}
    </div>
    </>
  );
};

import React, { useState } from 'react';
import { SearchInput } from './SearchInput';

interface BlogPost {
  slug: string;
  entry: {
    title: string;
    publishedDate: string;
    description: string;
  };
}

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const searchLower = searchTerm.toLowerCase();
    return (
      post.entry.title.toLowerCase().includes(searchLower) ||
      post.entry.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <SearchInput value={searchTerm} onChange={setSearchTerm} placeholder="FILTER_LOGS..." />
      <div className="space-y-8">
        {filteredPosts.map(post => (
            <article key={post.slug} className="border border-terminal-dim p-4 hover:border-accent-primary transition-colors group bg-card">
                <header className="mb-4">
                    <div className="flex flex-wrap gap-2 text-sm text-terminal-dim mb-1">
                        <span>[{post.entry.publishedDate}]</span>
                        <span>// LOG_ID: {post.slug}</span>
                    </div>
                    <a href={`/blog/${post.slug}`} className="text-2xl font-bold text-accent-primary group-hover:bg-accent-primary group-hover:text-terminal-bg px-1 no-underline transition-colors">
                        {post.entry.title}
                    </a>
                </header>
                <p className="mb-4 opacity-80 text-terminal-text">{post.entry.description}</p>
                <a href={`/blog/${post.slug}`} className="text-sm border-b border-dashed border-accent-secondary text-accent-secondary hover:text-accent-primary hover:border-accent-primary transition-colors no-underline">
                    READ_FULL_LOG &gt;&gt;
                </a>
            </article>
        ))}

        {filteredPosts.length === 0 && (
            <p className="text-terminal-dim">No logs found matching query.</p>
        )}
      </div>
    </>
  );
};

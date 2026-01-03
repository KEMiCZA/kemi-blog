import React, { useState, type ReactNode } from 'react';

interface CodeBlockProps {
    children?: ReactNode;
    language?: string;
    highlightedCode?: string;
    rawCode?: string;
    [key: string]: any;
}

export const CodeBlock = ({ children, language, highlightedCode, rawCode, ...props }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!rawCode) return;
        try {
            await navigator.clipboard.writeText(rawCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    if (highlightedCode) {
        return (
            <div className="relative group text-left my-4">
                <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-terminal-dim/50 hover:bg-terminal-dim text-white opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                    aria-label="Copy code"
                    title="Copy code"
                >
                    {copied ? (
                        // Checkmark icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    ) : (
                        // Copy icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    )}
                </button>
                <div
                    className="overflow-x-auto rounded-md border border-terminal-dim"
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
            </div>
        );
    }
    return <pre className="overflow-x-auto"><code>{children}</code></pre>;
};

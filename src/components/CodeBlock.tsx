
import React, { type ReactNode } from 'react';

interface CodeBlockProps {
    children?: ReactNode;
    language?: string;
    highlightedCode?: string;
    [key: string]: any;
}

export const CodeBlock = ({ children, language, highlightedCode, ...props }: CodeBlockProps) => {
    if (highlightedCode) {
        return (
            <div
                className="overflow-x-auto rounded-md border border-terminal-dim"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
        );
    }
    return <pre className="overflow-x-auto"><code>{children}</code></pre>;
};

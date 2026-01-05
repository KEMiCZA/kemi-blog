import React from 'react';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { CodeBlock } from './CodeBlock';

interface BlogRendererProps {
    document: any;
}

const BlogRenderer = ({ document }: BlogRendererProps) => {
    return (
        <DocumentRenderer
            document={document}
            renderers={{
                block: {
                    code: CodeBlock,
                },
            }}
        />
    );
};

export default BlogRenderer;

import { createHighlighter, type Highlighter } from "shiki";

let highlighterInstance: Highlighter | null = null;

export const getHighlighter = async (): Promise<Highlighter> => {
    if (!highlighterInstance) {
        highlighterInstance = await createHighlighter({
            themes: ["synthwave-84"],
            langs: [
                "typescript",
                "javascript",
                "json",
                "html",
                "css",
                "bash",
                "shell",
                "yaml",
                "markdown",
                "powershell",
                "csharp",
            ],
        });
    }
    return highlighterInstance;
};

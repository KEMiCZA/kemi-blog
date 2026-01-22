import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput = ({ value, onChange, placeholder = "SEARCH_DATABASE..." }: SearchInputProps) => {
  return (
    <div className="mb-8 relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-accent-secondary">&gt;</span>
        </div>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-terminal-bg border border-terminal-dim text-terminal-text pl-8 pr-4 py-2 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors placeholder-terminal-dim/50 font-mono"
            placeholder={placeholder}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
           <span className="text-xs text-terminal-dim animate-pulse">_</span>
        </div>
    </div>
  );
};

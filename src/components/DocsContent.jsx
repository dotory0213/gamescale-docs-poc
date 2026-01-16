import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const DocsContent = ({ content }) => {
    if (!content) {
        return (
            <div className="flex-1 max-w-4xl pt-10 pb-24 px-6 lg:px-12 mx-auto lg:mx-0">
                <article className="prose prose-slate max-w-none">
                    <h1>Content not found</h1>
                    <p>Select a valid guide from the sidebar.</p>
                </article>
            </div>
        );
    }

    return (
        <div className="flex-1 max-w-4xl pt-10 pb-24 px-6 lg:px-12 mx-auto lg:mx-0">
            <nav className="flex items-center gap-2 text-xs font-semibold text-grey-400 mb-8">
                <span>Guides</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                <span className="text-grey-600">Current Page</span>
            </nav>

            <article className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h1:tracking-tight prose-a:text-primary prose-code:text-primary-light prose-code:bg-grey-900 prose-code:px-1 prose-code:rounded prose-pre:bg-grey-900 prose-pre:shadow-toss prose-img:rounded-xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
};

export default DocsContent;

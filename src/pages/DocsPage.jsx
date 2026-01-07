import React from 'react';
import DocsSidebar from '../components/DocsSidebar';
import DocsContent from '../components/DocsContent';

const DocsPage = () => {
    return (
        <div className="min-h-screen bg-grey-50 flex flex-col lg:flex-row">
            {/* Sidebar */}
            <DocsSidebar />

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto pt-16">
                <DocsContent />
            </main>

            {/* Optional Table of Contents for desktop */}
            <aside className="w-56 hidden xl:block sticky top-16 h-[calc(100vh-4rem)] pt-20 px-6">
                <h5 className="text-[10px] font-bold text-grey-400 uppercase tracking-widest mb-4">On this page</h5>
                <ul className="space-y-3 text-xs font-semibold text-grey-500">
                    <li className="text-primary hover:text-primary transition-colors cursor-pointer">Environment Setup</li>
                    <li className="hover:text-dark transition-colors cursor-pointer">Installation & Initialization</li>
                    <li className="hover:text-dark transition-colors cursor-pointer">Next Steps</li>
                </ul>
            </aside>
        </div>
    );
};

export default DocsPage;

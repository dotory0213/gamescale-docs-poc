import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import DocsNavbar from '../components/DocsNavbar';
import DocsSidebar from '../components/DocsSidebar';
import DocsContent from '../components/DocsContent';
import Sandbox from '../components/Sandbox';
import { DOCS_SECTIONS } from '../constants/docsNav';

const DocsPage = () => {
    const location = useLocation();

    // Helper to check if section contains path
    const sectionContainsPath = (section, path) => {
        // Direct match
        if (section.match && section.match.some(m => path === m || path.startsWith(m + '/'))) return true;
        // Item check recursive
        const checkItems = (items) => {
            return items.some(item => {
                if (item.path === path) return true;
                if (item.items) return checkItems(item.items);
                return false;
            });
        };
        if (section.items) return checkItems(section.items);
        return false;
    };

    // Determine Active Section
    const activeSection = useMemo(() => {
        const path = location.pathname;
        const found = DOCS_SECTIONS.find(section => sectionContainsPath(section, path));
        return found || DOCS_SECTIONS[0];
    }, [location.pathname]);

    // Determine component content based on specific path
    const activeItemContent = useMemo(() => {
        if (!activeSection || !activeSection.items) return null;
        const path = location.pathname;
        // Find exact item match
        // Normalize path: remove trailing slash if needed
        const normPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

        const item = activeSection.items.find(i => i.path === normPath);
        return item ? item.content : null;
    }, [activeSection, location.pathname]);

    const isSandbox = activeSection.id === 'sandbox';

    return (
        <div className="min-h-screen bg-grey-50 flex flex-col">
            {/* Docs GNB */}
            <DocsNavbar />

            <div className="flex flex-col lg:flex-row flex-1">
                {/* Contextual Sidebar (LNB) */}
                {!isSandbox && activeSection.items && activeSection.items.length > 0 && (
                    <DocsSidebar items={activeSection.items} />
                )}

                {/* Content Area */}
                <main className={`flex-1 overflow-y-auto pt-8 px-6 lg:px-12 pb-12 h-[calc(100vh-7.5rem)] ${isSandbox ? 'w-full' : ''}`}>
                    {isSandbox ? (
                        <div className="max-w-6xl mx-auto h-full">
                            <Sandbox />
                        </div>
                    ) : (
                        <DocsContent content={activeItemContent} />
                    )}
                </main>

                {/* Optional Table of Contents for desktop - Static for now or remove if dynamic */}
                {!isSandbox && (
                    <aside className="w-56 hidden xl:block sticky top-0 pt-8 px-6 overflow-y-auto h-[calc(100vh-7.5rem)]">
                        <h5 className="text-[10px] font-bold text-grey-400 uppercase tracking-widest mb-4">On this page</h5>
                        <ul className="space-y-3 text-xs font-semibold text-grey-500">
                            {/* TODO: Make TOC dynamic based on content headers if possible, or hide */}
                            <li className="text-primary hover:text-primary transition-colors cursor-pointer">Top</li>
                        </ul>
                    </aside>
                )}
            </div>
        </div>
    );
};

export default DocsPage;

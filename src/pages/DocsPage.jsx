import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import DocsNavbar from '../components/DocsNavbar';
import DocsSidebar from '../components/DocsSidebar';
import DocsContent from '../components/DocsContent';
import Sandbox from '../components/Sandbox';

// Define sections inline
const DOCS_SECTIONS = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        path: '/docs',
        // match: ['/docs', '/docs/intro', '/docs/arch'], // Usage removed in simplified logic
        items: [
            { name: 'Introduction', path: '/docs/intro' },
            { name: 'Get Started', path: '/docs' },
            { name: 'Architecture', path: '/docs/arch' },
        ]
    },
    {
        id: 'integrations',
        title: 'Integrations',
        path: '/docs/mobile',
        // match: ['/docs/mobile', '/docs/web', '/docs/unity'],
        items: [
            { name: 'Mobile SDK', path: '/docs/mobile' },
            { name: 'Web SDK', path: '/docs/web' },
            { name: 'Unity Plugin', path: '/docs/unity' },
        ]
    },
    {
        id: 'api',
        title: 'API Reference',
        path: '/docs/auth',
        // match: ['/docs/auth', '/docs/users', '/docs/match'],
        items: [
            { name: 'Authentication', path: '/docs/auth' },
            { name: 'Users', path: '/docs/users' },
            { name: 'Matchmaking', path: '/docs/match' },
        ]
    },
    {
        id: 'sandbox',
        title: 'Sandbox',
        path: '/docs/sandbox',
        // match: ['/docs/sandbox'],
        items: []
    }
];

const DocsPage = () => {
    const location = useLocation();

    // SIMPLE LOGIC: check path includes
    const activeSection = useMemo(() => {
        const path = location.pathname;
        console.log('DocsPage Logic finding section for:', path);

        if (path.includes('/mobile') || path.includes('/web') || path.includes('/unity')) {
            return DOCS_SECTIONS[1]; // integrations
        }
        if (path.includes('/auth') || path.includes('/users') || path.includes('/match')) {
            return DOCS_SECTIONS[2]; // api
        }
        if (path.includes('/sandbox')) {
            return DOCS_SECTIONS[3]; // sandbox
        }

        // Default
        return DOCS_SECTIONS[0];
    }, [location.pathname]);

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
                        <DocsContent />
                    )}
                </main>

                {/* Optional Table of Contents for desktop */}
                {!isSandbox && (
                    <aside className="w-56 hidden xl:block sticky top-0 pt-8 px-6 overflow-y-auto h-[calc(100vh-7.5rem)]">
                        <h5 className="text-[10px] font-bold text-grey-400 uppercase tracking-widest mb-4">On this page</h5>
                        <ul className="space-y-3 text-xs font-semibold text-grey-500">
                            <li className="text-primary hover:text-primary transition-colors cursor-pointer">Environment Setup</li>
                            <li className="hover:text-dark transition-colors cursor-pointer">Installation & Initialization</li>
                            <li className="hover:text-dark transition-colors cursor-pointer">Next Steps</li>
                        </ul>
                    </aside>
                )}
            </div>
        </div>
    );
};

export default DocsPage;

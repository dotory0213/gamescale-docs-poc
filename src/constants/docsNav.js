export const DOCS_SECTIONS = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        path: '/docs',
        match: ['/docs', '/docs/intro', '/docs/arch'],
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
        match: ['/docs/mobile', '/docs/web', '/docs/unity'],
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
        match: ['/docs/auth', '/docs/users', '/docs/match'],
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
        match: ['/docs/sandbox'],
        items: [] // Sandbox has no sidebar items
    }
];

export const getActiveSection = (pathname) => {
    // Normalize by removing trailing slash
    const path = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    return DOCS_SECTIONS.find(section =>
        section.match.some(matchPath => path === matchPath || path.startsWith(matchPath + '/'))
    ) || DOCS_SECTIONS[0];
};

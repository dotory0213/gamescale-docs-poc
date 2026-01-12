const DOCS_SECTIONS = [
    {
        id: 'getting-started',
        match: ['/docs', '/docs/intro', '/docs/arch'],
    },
    {
        id: 'integrations',
        match: ['/docs/mobile', '/docs/web', '/docs/unity'],
    },
    {
        id: 'api',
        match: ['/docs/auth', '/docs/users', '/docs/match'],
    },
    {
        id: 'sandbox',
        match: ['/docs/sandbox'],
    }
];

const getActiveSection = (pathname) => {
    // Normalize by removing trailing slash
    const path = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    return DOCS_SECTIONS.find(section =>
        section.match.some(matchPath => path === matchPath || path.startsWith(matchPath + '/'))
    ) || DOCS_SECTIONS[0]; // fallback
};

// Test cases
const tests = [
    '/docs',
    '/docs/intro',
    '/docs/mobile',
    '/docs/webapp', // should fallback
    '/docs/sandbox',
    '/docs/sandbox/'
];

tests.forEach(t => {
    const res = getActiveSection(t);
    console.log(`Path: "${t}" -> Section: ${res.id}`);
});

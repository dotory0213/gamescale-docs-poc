import navData from './navData.json';

export const DOCS_SECTIONS = navData;

export const getActiveSection = (pathname) => {
    // Normalize by removing trailing slash
    const path = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    return DOCS_SECTIONS.find(section =>
        section.match.some(matchPath => path === matchPath || path.startsWith(matchPath + '/'))
    ) || DOCS_SECTIONS[0];
};

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DOCS_SECTIONS, getActiveSection } from '../constants/docsNav';

const DocsNavbar = () => {
    const location = useLocation();
    const activeSection = getActiveSection(location.pathname);

    return (
        <div className="sticky top-16 z-30 bg-white border-b border-grey-200 px-4 lg:px-6">
            <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar">
                {DOCS_SECTIONS.map((section) => {
                    const isActive = activeSection.id === section.id;
                    return (
                        <NavLink
                            key={section.id}
                            to={section.path}
                            className={`
                                py-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap
                                ${isActive
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-grey-500 hover:text-dark hover:border-grey-300'}
                            `}
                        >
                            {section.title}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default DocsNavbar;

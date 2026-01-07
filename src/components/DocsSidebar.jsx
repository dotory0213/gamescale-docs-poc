import React from 'react';
import { NavLink } from 'react-router-dom';

const DocsSidebar = () => {
    const categories = [
        {
            title: 'Getting Started',
            items: [
                { name: 'Introduction', path: '/docs/intro' },
                { name: 'Get Started', path: '/docs' },
                { name: 'Architecture', path: '/docs/arch' },
            ],
        },
        {
            title: 'Integrations',
            items: [
                { name: 'Mobile SDK', path: '/docs/mobile' },
                { name: 'Web SDK', path: '/docs/web' },
                { name: 'Unity Plugin', path: '/docs/unity' },
            ],
        },
        {
            title: 'API Reference',
            items: [
                { name: 'Authentication', path: '/docs/auth' },
                { name: 'Users', path: '/docs/users' },
                { name: 'Matchmaking', path: '/docs/match' },
            ],
        },
    ];

    return (
        <aside className="w-64 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] border-r border-grey-200/50 bg-grey-50/50 overflow-y-auto pt-10 pb-20 px-6">
            <nav className="space-y-8">
                {categories.map((category) => (
                    <div key={category.title}>
                        <h4 className="text-xs font-bold text-grey-400 uppercase tracking-widest mb-4 px-2">
                            {category.title}
                        </h4>
                        <ul className="space-y-1">
                            {category.items.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        end
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-lg text-sm font-semibold transition-all ${isActive
                                                ? 'bg-primary-light text-primary shadow-sm'
                                                : 'text-grey-600 hover:text-dark hover:bg-grey-100'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default DocsSidebar;

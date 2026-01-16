import React from 'react';
import { NavLink } from 'react-router-dom';

const DocsSidebar = ({ items = [] }) => {
    if (!items || items.length === 0) return null;

    const renderItem = (item, depth = 0) => {
        const hasChildren = item.items && item.items.length > 0;
        const paddingLeft = depth === 0 ? 'px-3' : 'pl-6 pr-3';

        return (
            <div key={item.path}>
                <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                        `block ${paddingLeft} py-2 rounded-lg text-sm font-semibold transition-all ${isActive
                            ? 'bg-primary-light text-primary shadow-sm'
                            : 'text-grey-600 hover:text-dark hover:bg-grey-100'
                        }`
                    }
                >
                    {item.name}
                </NavLink>
                {hasChildren && (
                    <div className="mt-1 space-y-1">
                        {item.items.map(child => renderItem(child, depth + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <aside className="w-64 hidden lg:block sticky top-[calc(4rem+3.5rem)] h-[calc(100vh-7.5rem)] border-r border-grey-200/50 bg-grey-50/50 overflow-y-auto pt-6 pb-20 px-6">
            <nav className="space-y-1">
                {items.map(item => renderItem(item))}
            </nav>
        </aside>
    );
};

export default DocsSidebar;

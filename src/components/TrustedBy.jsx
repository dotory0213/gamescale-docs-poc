import React from 'react';

const TrustedBy = () => {
    return (
        <section className="py-16 bg-dark-secondary/20 border-y border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-8">
                    Trusted by Top Studios Across Korea & North America
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder logos using text for now, but styled to look like logos */}
                    <div className="flex justify-center">
                        <span className="text-2xl font-black text-white tracking-tighter">NEXON</span>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-xl font-bold text-white italic">CRAZY GAMES</span>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-xl font-bold text-white font-mono">PIXEL<span className="text-primary">LAB</span></span>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-2xl font-serif font-bold text-white">Mythic</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

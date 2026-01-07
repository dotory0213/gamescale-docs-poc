import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grey-50">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary font-bold text-sm mb-6 animate-fade-in-up">
                            Global No.1 GBaaS
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-dark leading-tight tracking-tight mb-8">
                            Game Backend,<br />
                            <span className="text-primary">Simpler than ever.</span>
                        </h1>
                        <p className="text-xl text-grey-500 font-medium mb-10 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                            From indie projects to massive MMORPGs.<br />
                            Experience the infrastructure chosen by top publishers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/signup" className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-toss hover:shadow-toss-hover hover:-translate-y-1">
                                Start for Free
                            </Link>
                            <button className="px-8 py-4 bg-grey-100 text-dark rounded-2xl font-bold text-lg hover:bg-grey-200 transition-all">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* Visual Content - 3D Floating Elements */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
                        {/* Main Floating Card */}
                        <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl border border-grey-100 animate-float">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-xs font-bold text-grey-400">DASHBOARD</div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-grey-50">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">KR</div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-grey-200 rounded mb-2"></div>
                                        <div className="h-2 w-16 bg-grey-100 rounded"></div>
                                    </div>
                                    <div className="text-green-500 font-bold text-sm">12ms</div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-grey-50">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">NA</div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-grey-200 rounded mb-2"></div>
                                        <div className="h-2 w-16 bg-grey-100 rounded"></div>
                                    </div>
                                    <div className="text-green-500 font-bold text-sm">45ms</div>
                                </div>
                                <div className="h-32 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>
                            </div>
                        </div>

                        {/* Decorative Floating Blobs behind */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

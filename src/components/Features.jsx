import React from 'react';

const features = [
    {
        title: 'Global Scale',
        desc: 'Deploy to 15+ regions instantly.',
        icon: '🌍',
        bg: 'bg-blue-50',
        text: 'text-blue-600'
    },
    {
        title: 'LiveOps',
        desc: 'Real-time updates without downtime.',
        icon: '⚡',
        bg: 'bg-yellow-50',
        text: 'text-yellow-600'
    },
    {
        title: 'Analytics',
        desc: 'Deep insights into user behavior.',
        icon: '📊',
        bg: 'bg-green-50',
        text: 'text-green-600'
    },
    {
        title: 'Security',
        desc: 'Enterprise-grade Anti-DDoS.',
        icon: '🛡️',
        bg: 'bg-red-50',
        text: 'text-red-600'
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl font-extrabold text-dark mb-6">
                        Everything you need<br />
                        <span className="text-grey-400">to build a great game.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-grey-50 border border-grey-100 hover:shadow-toss hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-14 h-14 ${feature.bg} ${feature.text} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-dark mb-2">{feature.title}</h3>
                            <p className="text-grey-600 font-medium leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://www.gamescale.io/ko/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-grey-200 text-dark font-bold rounded-full hover:bg-grey-50 hover:border-grey-300 transition-all shadow-sm hover:shadow-md"
                    >
                        More Features
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;

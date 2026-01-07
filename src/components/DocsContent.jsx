import React, { useState } from 'react';

const DocsContent = () => {
    const [copied, setCopied] = useState(false);

    const codeSnippet = `// 1. Install SDK
npm install @gamescale/sdk-web

// 2. Initialize
import { GameScale } from '@gamescale/sdk-web';

const gs = new GameScale({
  apiKey: 'YOUR_CLIENT_KEY',
  environment: 'production'
});

await gs.initialize();`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex-1 max-w-4xl pt-10 pb-24 px-6 lg:px-12 mx-auto lg:mx-0">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-grey-400 mb-8">
                <span>Guides</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                <span className="text-grey-600">Get Started</span>
            </nav>

            <article className="prose prose-slate max-w-none">
                <h1 className="text-4xl font-extrabold text-dark tracking-tight mb-4">Get Started</h1>
                <p className="text-lg text-grey-600 font-medium mb-12">
                    Follow this guide to integrate GameScale into your game project in under 5 minutes.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-dark mb-4">1. Environment Setup</h2>
                    <p className="text-grey-600 mb-6">
                        Before integrating the SDK, ensure you have a registered account and a Client Key from the <span className="text-primary font-bold">GameScale Console</span>.
                    </p>

                    <div className="bg-primary-light/30 border-l-4 border-primary p-4 rounded-r-xl mb-8">
                        <p className="text-sm text-primary-dark font-semibold">
                            <strong>Note:</strong> You must have a Pro or Enterprise plan to use the Production environment.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-dark mb-4">2. Installation & Initialization</h2>
                    <p className="text-grey-600 mb-6">
                        Install our lightweight SDK via npm or yarn. This provides everything you need to connect your game backend.
                    </p>

                    <div className="relative group">
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={handleCopy}
                                className="px-3 py-1.5 bg-grey-800 hover:bg-grey-700 text-white text-[10px] font-bold rounded-lg transition-all flex items-center gap-2"
                            >
                                {copied ? 'COPIED!' : 'COPY'}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            </button>
                        </div>
                        <pre className="p-6 bg-grey-900 rounded-3xl overflow-x-auto shadow-toss">
                            <code className="text-primary-light font-mono text-sm leading-relaxed">
                                {codeSnippet}
                            </code>
                        </pre>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-dark mb-4">3. Next Steps</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-6 bg-grey-100 rounded-2xl hover:bg-white hover:shadow-toss border border-transparent hover:border-grey-200 transition-all cursor-pointer">
                            <h4 className="font-bold text-dark mb-1">User Management →</h4>
                            <p className="text-sm text-grey-500 font-medium">Handle authentication and profiles.</p>
                        </div>
                        <div className="p-6 bg-grey-100 rounded-2xl hover:bg-white hover:shadow-toss border border-transparent hover:border-grey-200 transition-all cursor-pointer">
                            <h4 className="font-bold text-dark mb-1">Real-time Events →</h4>
                            <p className="text-sm text-grey-500 font-medium">Emit and listen for game events.</p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default DocsContent;

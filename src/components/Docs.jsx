import React from 'react';
import { Link } from 'react-router-dom';

const Docs = () => {
    return (
        <section id="docs" className="py-24 bg-white border-t border-grey-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-extrabold text-dark mb-4">Developer First Documentation</h2>
                        <p className="text-grey-500 text-lg mb-8 leading-relaxed">
                            Don't get stuck. Our documentation is written by engineers, for engineers.
                            Clear examples, copy-paste snippets, and API references.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/docs" className="text-primary font-bold hover:underline flex items-center gap-1">
                                Read the Guide →
                            </Link>
                            <Link to="/docs/auth" className="text-primary font-bold hover:underline flex items-center gap-1">
                                API Reference →
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg bg-grey-900 rounded-3xl p-6 shadow-2xl skew-y-1">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                            <code>
                                {`// Initialize GameScale
import { GameScale } from '@gamescale/sdk';

const gs = new GameScale({
  apiKey: 'pk_live_...',
  region: 'ap-northeast-2'
});

await gs.connect();`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Docs;

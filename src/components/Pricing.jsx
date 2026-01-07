import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-grey-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-dark mb-4">Transparent Pricing</h2>
                    <p className="text-grey-500 font-medium">Start small, scale infinitely.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <div className="p-8 bg-white rounded-3xl border border-grey-200 hover:shadow-toss transition-all">
                        <div className="text-xl font-bold text-dark mb-2">Starter</div>
                        <div className="text-4xl font-extrabold text-primary mb-6">Free</div>
                        <p className="text-grey-500 mb-8 border-b border-grey-100 pb-8">Perfect for indie developers.</p>
                        <ul className="space-y-4 mb-8 text-grey-600 font-medium">
                            <li className="flex items-center gap-2">✓ 1,000 MAU</li>
                            <li className="flex items-center gap-2">✓ 1 Region</li>
                            <li className="flex items-center gap-2">✓ Community Support</li>
                        </ul>
                        <button className="w-full py-4 bg-grey-100 text-dark font-bold rounded-xl hover:bg-grey-200 transition-colors">Start Free</button>
                    </div>

                    {/* Pro Plan */}
                    <div className="p-8 bg-white rounded-3xl border border-primary/20 shadow-toss ring-2 ring-primary relative">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
                        <div className="text-xl font-bold text-dark mb-2">Pro</div>
                        <div className="text-4xl font-extrabold text-dark mb-6">$299<span className="text-base font-medium text-grey-400">/mo</span></div>
                        <p className="text-grey-500 mb-8 border-b border-grey-100 pb-8">For growing studios.</p>
                        <ul className="space-y-4 mb-8 text-grey-600 font-medium">
                            <li className="flex items-center gap-2">✓ 50,000 MAU</li>
                            <li className="flex items-center gap-2">✓ Global Routing</li>
                            <li className="flex items-center gap-2">✓ LiveOps Tools</li>
                        </ul>
                        <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">Get Started</button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="p-8 bg-white rounded-3xl border border-grey-200 hover:shadow-toss transition-all">
                        <div className="text-xl font-bold text-dark mb-2">Enterprise</div>
                        <div className="text-4xl font-extrabold text-dark mb-6">Custom</div>
                        <p className="text-grey-500 mb-8 border-b border-grey-100 pb-8">For massive scale games.</p>
                        <ul className="space-y-4 mb-8 text-grey-600 font-medium">
                            <li className="flex items-center gap-2">✓ Unlimited MAU</li>
                            <li className="flex items-center gap-2">✓ Dedicated Support</li>
                            <li className="flex items-center gap-2">✓ Custom SLA</li>
                        </ul>
                        <button className="w-full py-4 bg-grey-100 text-dark font-bold rounded-xl hover:bg-grey-200 transition-colors">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

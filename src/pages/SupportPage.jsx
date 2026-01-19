import React, { useState } from 'react';

const SupportPage = () => {
    const [step, setStep] = useState('email'); // email, details, success
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        category: 'general',
        description: ''
    });

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (formData.email) {
            setStep('details');
        }
    };

    const handleDetailsSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/jira', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    summary: formData.subject,
                    description: `Category: ${formData.category}\n\n${formData.description}`,
                    email: formData.email
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to submit ticket');
            }

            console.log('Ticket created:', data.key);
            setStep('success');
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit ticket: ' + error.message);
        }
    };

    const resetForm = () => {
        setFormData({
            email: '',
            subject: '',
            category: 'general',
            description: ''
        });
        setStep('email');
    };

    return (
        <div className="min-h-screen bg-grey-50 flex flex-col">
            {/* Blue Header Section */}
            <div className="bg-primary h-80 w-full flex flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 relative z-10 flex items-center gap-2">
                    <span className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </span>
                    GameScale Help Center
                </h1>
            </div>

            {/* Main Content Card - Overlapping Header */}
            <div className="flex-1 px-6 -mt-20 pb-20 z-20">
                <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-grey-100 transition-all duration-300">

                    {step === 'email' && (
                        <div className="text-center animate-fadeIn">
                            <h2 className="text-2xl font-bold text-dark mb-2">How can we help you?</h2>
                            <p className="text-grey-500 mb-8">Enter your email to start a support request.</p>

                            <form onSubmit={handleEmailSubmit} className="space-y-6 max-w-sm mx-auto">
                                <div className="text-left">
                                    <label className="block text-sm font-bold text-grey-700 mb-2">Email address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border-2 border-primary rounded-xl focus:ring-4 focus:ring-primary/10 outline-none text-dark font-medium transition-all"
                                        placeholder="name@company.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Next Step
                                </button>
                            </form>
                        </div>
                    )}

                    {step === 'details' && (
                        <div className="animate-fadeIn">
                            <button
                                onClick={() => setStep('email')}
                                className="mb-6 text-grey-500 hover:text-primary flex items-center gap-1 text-sm font-bold transition-colors"
                            >
                                ← Back
                            </button>
                            <h2 className="text-2xl font-bold text-dark mb-6 text-center">Tell us more</h2>

                            <form onSubmit={handleDetailsSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-grey-700 mb-2">Category</label>
                                    <select
                                        className="w-full px-4 py-3 bg-white border-2 border-grey-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="technical">Technical Issue</option>
                                        <option value="billing">Billing & Account</option>
                                        <option value="partnership">Partnership</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-grey-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-white border-2 border-grey-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                        placeholder="Brief summary of your issue"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-grey-700 mb-2">Description</label>
                                    <textarea
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-white border-2 border-grey-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                                        placeholder="Please describe your issue in detail..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="text-center animate-fadeIn py-8">
                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                                ✓
                            </div>
                            <h2 className="text-3xl font-bold text-dark mb-4">Request Received!</h2>
                            <p className="text-grey-500 mb-8 max-w-md mx-auto">
                                We've received your request. A confirmation email has been sent to <span className="font-bold text-dark">{formData.email}</span>.
                            </p>
                            <button
                                onClick={resetForm}
                                className="px-8 py-3 bg-grey-100 hover:bg-grey-200 text-dark font-bold rounded-xl transition-colors"
                            >
                                Submit Another Request
                            </button>
                        </div>
                    )}
                </div>

                {/* Quick Links Section */}
                <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="/docs" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-toss border border-grey-100 transition-all group">
                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">📚</span>
                        </div>
                        <h3 className="font-bold text-dark mb-1">Documentation</h3>
                        <p className="text-sm text-grey-500">Guides and API references.</p>
                    </a>
                    <a href="/#features" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-toss border border-grey-100 transition-all group">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="font-bold text-dark mb-1">Features</h3>
                        <p className="text-sm text-grey-500">Explore platform capabilities.</p>
                    </a>
                    <a href="#" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-toss border border-grey-100 transition-all group">
                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">💬</span>
                        </div>
                        <h3 className="font-bold text-dark mb-1">Community</h3>
                        <p className="text-sm text-grey-500">Join the developer forum.</p>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SupportPage;

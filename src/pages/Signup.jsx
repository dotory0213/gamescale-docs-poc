import React from 'react';

const Signup = () => {
    return (
        <div className="min-h-screen bg-grey-50 flex flex-col pt-24 pb-12">
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-toss border border-grey-100">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-dark mb-2">Welcome</h2>
                        <p className="text-grey-500 font-medium">Please enter your work email.</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-grey-600 mb-1.5 ml-1">Work Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-grey-50 border border-grey-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-dark font-medium transition-all"
                                placeholder="name@company.com"
                            />
                        </div>

                        <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-primary/30 mt-4 transform hover:-translate-y-0.5">
                            Continue
                        </button>
                    </form>

                    <div className="mt-6 text-center text-xs text-grey-400 font-medium">
                        Protected by reCAPTCHA and subject to the Google Privacy Policy and Terms of Service.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

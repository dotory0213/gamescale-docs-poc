import React from 'react';

const testimonials = [
    {
        quote: "GameScale provided the robust backbone we needed to launch massively. Their infrastructure is invisible, effectively perfect.",
        author: "Sarah Jenkins",
        role: "Technical Director, OMEGA Studios",
        company: "OMEGA"
    },
    {
        quote: "Moving to GameScale was the best decision for our Global IP. The latency reduction was immediate and tangible.",
        author: "Min-Ho Kim",
        role: "CEO, Nexus Games KR",
        company: "NEXUS"
    },
    {
        quote: "A partner that truly understands the urgency of LiveOps. Their support is as reliable as their servers.",
        author: "David Chen",
        role: "VP of Engineering, BlueHorizon",
        company: "BLUEHORIZON"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-light-secondary border-y border-warm-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-serif text-dark mb-4">Partnerships built on trust.</h2>
                    <p className="text-warm-800 text-lg font-light">Powering the next generation of industry leaders.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col justify-between">
                            <div className="mb-8">
                                <svg className="w-10 h-10 text-primary/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V15C4 17.7614 6.23858 20 9 20H14.017ZM22.017 21L22.017 18C22.017 16.8954 21.1216 16 20.017 16H17C17.5523 16 18 15.5523 18 15V9C18 8.44772 17.5523 8 17 8H13C12.4477 8 12 8.44772 12 9V15C12 17.7614 14.2386 20 17 20H22.017Z" />
                                </svg>
                                <p className="text-xl text-dark font-serif italic leading-relaxed">
                                    "{item.quote}"
                                </p>
                            </div>
                            <div className="pt-6 border-t border-warm-200">
                                <div className="font-bold text-dark">{item.author}</div>
                                <div className="text-sm text-warm-800 mt-1">{item.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-[#1f1f1f] text-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">
                    Customer Experiences With DWall
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="relative">

                            <div className="absolute inset-0 bg-yellow-300 rotate-3 translate-x-2 translate-y-1 rounded-lg"></div>

                            <div className="relative bg-white text-black p-6 rounded-lg shadow-md">
                                <p className="text-sm">
                                    Excellent service and professional execution.
                                </p>
                                <h4 className="mt-4 font-semibold">Suresh Kumar</h4>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials
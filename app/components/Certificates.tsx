import Image from "next/image";

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Side: Layered Certificates */}
                    <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[400px] md:min-h-[500px]">
                        {/* Back Certificate (UDYAM) */}
                        <div className="absolute left-4 md:left-12 lg:left-0 top-0 md:top-8 w-2/3 md:w-3/5 aspect-[1/1.4] bg-white shadow-xl border-8 border-gray-300 transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:z-20 z-0">
                            <div className="relative w-full h-full p-2 bg-white">
                                <Image 
                                    src="/certificates/udyam-certificate.jpg" 
                                    alt="UDYAM Registration Certificate" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Front Certificate (GST) */}
                        <div className="relative z-10 w-2/3 md:w-3/5 ml-auto md:mr-12 lg:mr-0 mt-20 md:mt-32 aspect-[1/1.4] bg-white shadow-2xl border-8 md:border-[12px] border-[#4A3B32] transform rotate-2 transition-transform duration-300 hover:rotate-0">
                            <div className="relative w-full h-full p-2 bg-white">
                                <Image 
                                    src="/certificates/gst-certificate.jpg" 
                                    alt="GST Registration Certificate" 
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-8 tracking-tight">
                            We are Certified
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0 font-medium">
                            Dwall is committed to a Policy for Continual Improvement in the performance of our 
                            Quality, Occupational Health & Safety and Environmental Management Systems for our 
                            services that include: Plumbing and Sanitary Contracting, Electrical Fitting 
                            Contracting, Floor and Wall Tilling Works.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certificates;

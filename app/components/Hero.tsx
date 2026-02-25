import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-full bg-gray-100 md:h-screen md:pt-0 pt-38">
            <div className="w-full h-full mx-auto px-6 flex md:flex-row flex-col  items-center">
                <div className="md:w-1/2 h-full flex flex-col justify-center items-center md:items-start px-6">
                    <span className="border px-4 py-2 text-lg mb-6 inline-block w-max">
                        A Legacy built on trust and Innovation
                    </span>

                    <h1 className="text-4xl md:text-8xl font-bold mb-6">
                        Crafting Iconic and Luxurious Spaces
                    </h1>

                    <p className="text-gray-800 font-bold mb-8 md:w-[80%] w-full px-2">
                        With Over Two Decades Of Legacy, TopRock Interiors Has Shaped Dubai's Most
                        Prestigious Interiors-Delivering Unmatched Craftsmanship, Innovation, And Design
                        Excellence Across Luxury Environments
                    </p>

                    <button className="bg-yellow-500 px-8 py-2  rounded-md font-semibold w-max">
                        Get Quote
                    </button>
                </div>
                <div className="md:w-1/2 md:h-full h-[50vh] w-full flex flex-col justify-center">
                    <div className="relative rotate-2 h-1/2 bg-yellow-500 p-2 rounded-lg md:w-[70%] w-full justify-center mx-auto">
                        <div className="bg-white rounded-lg overflow-hidden">
                            <Image
                                src="/hero.jpg"
                                alt="Interior"
                                width={0}
                                height={0}
                                className="w-full h-1/2 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero
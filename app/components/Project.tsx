const Projects = () => {
    const categories = [
        "Corporate",
        "Retail",
        "Food & Beverages",
        "Leisure & Health",
        "House",
        "Buildings",
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {categories.map((item, index) => (
                        <div key={index} className="relative h-52">

                            {/* Rotated Yellow Background */}
                            <div className="absolute inset-0 bg-yellow-300 rotate-1 p-4"></div>

                            {/* Actual Card Content (Not Rotated) */}
                            <div className="relative bg-gray-200 h-full rounded-lg flex items-center justify-center font-semibold ">
                                {item}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Projects
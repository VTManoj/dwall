const Footer = () => {
    return (
        <footer className="bg-[#1f1f1f] text-white py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
                <p className="text-sm md:text-base">
                    Copyrights © DWall Constructions 2026 All Rights Reserved
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                    powered by <span className="text-yellow-500 font-medium">Moonlight Developers</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer
import Image from "next/image";

const HighlightSection = () => {
  return (
    <section className="py-10 w-full bg-gray-100">
      <div className="md:max-w-6xl w-[90%] mx-auto   bg-yellow-500 rounded-xl p-8 grid md:grid-cols-2 gap-8 items-center">

        <Image
          src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg"
          alt="Construction"
          width={0}
          height={0}
          className="rounded-lg w-full h-full"
        />

        <div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Leading Construction Company in Chennai
          </h3>
          <p className="text-white mb-4">
            Delivering excellence with innovative construction solutions.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-md">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
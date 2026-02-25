import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-[#e9edf2]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row lg:grid-cols-2 gap-16 items-start ">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 w-full h-full">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <p className="text-gray-600 mb-12 leading-relaxed">
            If you have a specific inquiry or request, please don’t hesitate
            to get in touch. We will gladly put you in touch with our
            fit-out and manufacturing specialists.
          </p>

          {/* Contact Item */}
          <div className="space-y-8">

            <div className="flex items-start gap-5">
              <div className="bg-[#2a2a2a] text-white p-4 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-gray-600">Have any question?</p>
                <p className="font-semibold text-lg">
                  Free +971 4 2678095
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-[#2a2a2a] text-white p-4 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-gray-600">Write email</p>
                <p className="font-semibold text-lg">
                  info@toprockinteriors.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-[#2a2a2a] text-white p-4 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-gray-600">Visit anytime</p>
                <p className="font-semibold text-lg">
                  Office No. 1, Al Qusais Industrial Area 2, Dubai
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#e7c46a] rounded-2xl p-10 shadow-md md:w-1/2 w-full">
          <form className="space-y-6">

            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full bg-gray-200 p-3 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full bg-gray-200 p-3 rounded-md focus:outline-none"
              />
            </div>

            {/* <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Enter your subject"
                className="mt-2 w-full bg-gray-200 p-3 rounded-md focus:outline-none"
              />
            </div> */}

            <div>
              <label className="text-sm font-medium">Phone number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="mt-2 w-full bg-gray-200 p-3 rounded-md focus:outline-none"
              />
            </div>

            {/* <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Enter message here"
                className="mt-2 w-full bg-gray-200 p-3 rounded-md focus:outline-none"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-[#2a2a2a] text-white py-4 rounded-lg text-lg font-medium hover:opacity-90 transition"
            >
              Connect
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
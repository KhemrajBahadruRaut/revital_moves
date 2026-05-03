
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Navbar from "../../components/header/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function page() {
  return (
    <>
    <Navbar/>
      <div className="w-full font-sans text-[#1a1a1a]">
        {/* HERO */}
        <section
          className="w-full py-20 px-6 md:px-16 text-white"
          style={{
            background:
              "linear-gradient(to right, #00003C, #00003CCC, #00003C)",
          }}
        >
          <p className="text-sm tracking-widest text-[#DABE9B] uppercase mb-3">
            Get in Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            We’re Here to Help
          </h1>

          <div className="w-20 h-0.5 bg-[#DABE9B] mb-6"></div>

          <p className="max-w-xl text-gray-200">
            Whether you're planning a move, exploring rental management, or just
            have a question our team is ready to guide you with care and
            expertise.
          </p>
        </section>

        {/* MAIN */}
        <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10 bg-[#f7f7f7]">
          {/* LEFT SIDE */}
          <div>
            <p className="text-sm uppercase tracking-widest text-[#DABE9B] mb-2">
              Contact Information
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Reach Out to Our Team
            </h2>

            <div className="w-16 h-0.5 bg-[#DABE9B] mb-4"></div>

            <p className="text-gray-600 mb-6">
              We typically respond within one business day. For urgent matters,
              please call us directly.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-4 border border-[#DABE9B80] p-4 rounded-lg">
                <FiPhone className="text-[#DABE9B] text-xl" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-gray-600 text-sm">(800) 900 0000</p>
                  <p className="text-xs text-gray-400">Mon - Fri, 9PM - 5PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 border border-[#DABE9B80] p-4 rounded-lg">
                <FiMail className="text-[#DABE9B] text-xl" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-gray-600 text-sm">abc@revitalmoves.com</p>
                  <p className="text-xs text-gray-400">We Will Get Back Soon</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-4 border border-[#DABE9B80] p-4 rounded-lg">
                <FiMapPin className="text-[#DABE9B] text-xl" />
                <div>
                  <p className="text-sm font-medium">Office</p>
                  <p className="text-gray-600 text-sm">
                    location, address, name
                  </p>
                  <p className="text-xs text-gray-400">MA, USA</p>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#00003C] text-white flex items-center justify-center rounded-md">
                  <FaFacebookF />
                </div>
                <div className="w-10 h-10 bg-[#00003C] text-white flex items-center justify-center rounded-md">
                  <FaInstagram />
                </div>
                <div className="w-10 h-10 bg-[#00003C] text-white flex items-center justify-center rounded-md">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>

            <p className="text-gray-500 text-sm mb-6">
              Fill in the details below and we'll get back to you shortly.
            </p>

            <form className="space-y-4">
              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="p-3 rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="p-3 rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] outline-none"
                />
              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="abc@example.com"
                  className="p-3 rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] outline-none"
                />
                <input
                  type="text"
                  placeholder="+1 (999) 000 0000"
                  className="p-3 rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] outline-none"
                />
              </div>

              {/* SELECT */}
              <select className="w-full p-3 rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] outline-none text-gray-500">
                <option>Select a service</option>
              </select>

              {/* MESSAGE */}
              <textarea
                rows="4"
                placeholder="Enter your message here"
                className="w-full p-3 rounded-md border border-[#DABE9B80] bg-[#DABE9B1A] outline-none"
              ></textarea>

              {/* CHECKBOX */}
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <input type="checkbox" className="mt-1" />
                <p>
                  I agree to the Terms of Service and Privacy Policy. I consent
                  to being contacted regarding my inquiry.
                </p>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full border border-[#DABE9B80] text-[#00003C] py-3 rounded-md hover:bg-[#00003C] hover:text-white transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>

        {/* MAP + OFFICE */}
        <section className="px-6 md:px-16 pb-16 grid md:grid-cols-2  gap-10 items-center border">
          <div className="w-full h-60 bg-gray-300 rounded-lg flex items-center justify-center">
            <FiMapPin className="text-2xl text-[#00003C]" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-[#DABE9B] mb-2">
              Contact Information
            </p>

            <h3 className="text-2xl font-semibold mb-3">Visit Our Office</h3>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <FiMapPin className="text-[#00003C]" />
              <span>location, address, name</span>
            </div>

            <p className="text-gray-500 mb-6">MA, United States</p>

            <button className="px-6 py-2 border border-[#00003C] text-[#00003C] rounded-md hover:bg-[#00003C] hover:text-white transition">
              Get Directions
            </button>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

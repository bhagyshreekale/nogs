import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-black py-10 px-6"
      style={{ backgroundColor: "#d7eef4ff" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 🔹 Logo + About */}
        <div>
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="h-20 mb-4"
          />
          <p className="text-sm">
            Welcome to{" "}
            <span className="font-semibold text-black">Your Clinic</span>. We are
            committed to providing excellent healthcare with compassion, trust,
            and care.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Contact Us</h3>
          <p className="text-sm">📞 020-24491000 / +91 9403969415</p>
          <p className="text-sm">✉️ pogsoffice@gmail.com</p>
          <p className="text-sm">🕒 Mon – Sat / 11:00 AM – 6:00 PM</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Follow Us</h3>
          <div className="flex space-x-3 mb-3">
            <a
              href="#"
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
            >
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a
              href="#"
              className="bg-red-600 p-2 rounded-full hover:bg-red-700"
            >
              <i className="fab fa-youtube text-white"></i>
            </a>
          </div>
          <p className="text-sm">
            📍 No. 302–303, Dr. Nitu Mandke IMA house, 992, Shukrawar Peth,
            Tilak Road, Pune – 411002
          </p>
        </div>

        {/* Google Map Location */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="150"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-black">
        © {new Date().getFullYear()} Your Clinic Name. All rights reserved.
      </div>
    </footer>
  );
}

// Home.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import nogslogo from "../assets/nogslogo.png";
import home1 from "../assets/home1.png";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Home = () => {
  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-wrap items-center justify-between px-6 lg:px-20 py-16 min-h-[550px] bg-gradient-to-r from-[#6C3483] to-[#E91E63] text-white"
      >
        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          className="flex-1 max-w-xl space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug font-playfair">
            Empowering Women’s Health
            <span className="block text-[#FFD700] text-2xl mt-2 animate-pulse">
              CREST: Communicate • Respect • Educate • Support • Treat
            </span>
          </h1>
          <p className="text-lg leading-relaxed font-poppins">
            Building a healthier future for women in Nashik — beyond clinics,
            into communities.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="/register"
              className="px-6 py-3 rounded-full bg-[#009688] hover:bg-[#00796b] transition font-semibold text-white"
            >
              Register Now
            </a>
            <a
              href="/events"
              className="px-6 py-3 rounded-full bg-white text-[#6C3483] hover:bg-gray-100 transition font-semibold"
            >
              Upcoming Events
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeUp}
          className="flex-1 text-center mt-10 lg:mt-0"
        >
          <img
            src="/assets/crest-illustration.png"
            alt="CREST Concept Illustration"
            className="max-w-full rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* ================= NOTIFICATION BAR ================= */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#FFF9C4] border-y-4 border-[#FF9800] py-3 px-6 flex items-center justify-between mt-10"
      >
        <strong className="text-[#D32F2F] mr-3">🔔 Notification:</strong>
        <marquee className="flex-1 font-medium text-gray-800">
          8:30 PM — Exclusive Evening Session on Lymphocyte Immunization Therapy
          (LIT) and Anemia || Venue: Courtyard by Marriott
        </marquee>
      </motion.div>

      {/* ================= SEARCH SECTION ================= */}
      <section className="bg-[#F5FFFF] py-16 px-6 lg:px-20 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#0097A7] mb-8"
        >
          Search Gynaecologist Near Me
        </motion.h2>

        {/* Search Inputs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <motion.input
            variants={fadeUp}
            type="text"
            placeholder="Keywords"
            className="px-4 py-3 border rounded-lg min-w-[200px]"
          />
          <motion.input
            variants={fadeUp}
            type="text"
            placeholder="Location"
            className="px-4 py-3 border rounded-lg min-w-[200px]"
          />
          <motion.input
            variants={fadeUp}
            type="date"
            className="px-4 py-3 border rounded-lg min-w-[200px]"
          />
        </motion.div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select className="px-4 py-3 border rounded-lg min-w-[200px]">
            <option>Choose an Event Category</option>
            <option>Past Events</option>
            <option>Upcoming Events</option>
          </select>

          <select className="px-4 py-3 border rounded-lg min-w-[200px]">
            <option>Choose an Event Type</option>
            <option>Conference</option>
            <option>Workshop</option>
            <option>Seminar</option>
            <option>Festival</option>
          </select>
        </div>

        {/* Buttons + Social */}
        <div className="flex flex-col items-center gap-6 mt-6">
          <button className="px-6 py-3 bg-[#0097A7] hover:bg-[#00796B] text-white rounded-full font-semibold transition">
            Search
          </button>
          <button className="px-6 py-3 border-2 border-[#0097A7] text-[#0097A7] rounded-full font-semibold hover:bg-[#0097A7] hover:text-white transition">
            Become A Member
          </button>

          {/* Social Links */}
          <div className="flex gap-6 text-3xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b5998] hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-10 px-6 lg:px-20 py-16 bg-[#f0fcfc]"
      >
        {/* Logo */}
        <motion.div variants={fadeUp} className="flex-1 text-center">
          <img src={nogslogo} alt="NOGS Logo" className="max-w-xs mx-auto" />
        </motion.div>

        {/* Text */}
        <motion.div variants={fadeUp} className="flex-1 max-w-xl space-y-6">
          <h2 className="text-3xl font-bold text-[#111]">
            Welcome to the Nashik Obstetrics and Gynaecological Society
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are a vibrant body of the Federation of Obstetric & Gynaecological
            Society of India, committed to advancing women’s healthcare and
            empowering professionals through education, teamwork, and compassion.
          </p>
          <blockquote className="border-l-4 border-[#0097A7] pl-4 italic text-gray-700">
            Nurturing Women’s Wellness, Shaping Futures – Leading the Way with
            Compassion and Excellence.
          </blockquote>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-[#0097A7] hover:bg-[#00796B] text-white rounded-full font-semibold transition"
          >
            Read More
          </a>
        </motion.div>
      </motion.section>

      {/* ================= VALUES SECTION ================= */}
      <section className="relative bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            Cultivating values that inspire growth and unity
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Our core values guide us in creating a supportive, professional, and
            impactful community.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            "Teamwork",
            "Education",
            "Social Responsibility",
            "Excellence",
            "Commitment",
            "Member’s Welfare",
          ].map((title, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-semibold text-[#6C3483]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-black">{title}</h3>
              </div>
              <p className="text-gray-600">
                {i === 0 &&
                  "Collaboration lies at the heart of our success, combining diverse expertise to achieve goals."}
                {i === 1 &&
                  "Dedicated to continuous education and promoting knowledge dissemination in the community."}
                {i === 2 &&
                  "We recognize our duty to society and are committed to making a positive difference."}
                {i === 3 &&
                  "We uphold excellence as a standard, delivering the highest quality care and professionalism."}
                {i === 4 &&
                  "Resolute in our mission to advance women’s health with compassion and meaningful impact."}
                {i === 5 &&
                  "We support and empower every member, prioritizing well-being and growth."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PAST EVENTS ================= */}
      <section className="bg-[#F5FCFC] py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            Past Events
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Relive our impactful conferences, workshops, and community health
            initiatives that shaped women’s wellness in Nashik.
          </motion.p>
        </div>

        {/* Event Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {[
            {
              title: "Hormonal Web",
              date: "12 August 2025",
              venue: "Online",
            },
            {
              title: "Breast Feeding Week",
              date: "August 2025",
              venue: "NMC Pachpaoli",
            },
            {
              title: "PPH Conclave",
              date: "3 August 2025",
              venue: "Hotel Tuli Imperial",
            },
          ].map((event, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={home1}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-gray-500 text-sm mb-1">📅 {event.date}</p>
                <h3 className="text-xl font-semibold text-black mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">📍 {event.venue}</p>
                <a
                  href={home1}
                  className="text-[#E91E63] font-semibold hover:underline"
                >
                  View Photos →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import ContactForm from "../widgets/ContactForm";

export default function Contact() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 py-16 sm:py-20 bg-[#020c15] relative">
      {/* Heading with space from navbar */}
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-neon mb-6 sm:mb-8 mt-12 sm:mt-16">
        Contact
      </h2>

      {/* Full width description text */}
      <p className="text-gray-400 w-full sm:max-w-xl md:max-w-2xl leading-relaxed mb-8 sm:mb-10 text-justify">
        Feel free to reach out for internships, freelance work, or collaboration.
      </p>

      {/* Contact Form */}
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg border border-white/5">
        <ContactForm />
      </div>
    </section>
  );
}

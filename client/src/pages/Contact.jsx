import React from "react";
import ContactForm from "../widgets/ContactForm";

export default function Contact() {
  return (
    <section className="w-full px-8 py-20 bg-[#020c15] relative">
      {/* Heading with space from navbar */}
      <h2 className="text-3xl font-extrabold text-neon mb-8 mt-16">
        Contact
      </h2>

      {/* Full width description text */}
      <p className="text-gray-400 w-full leading-relaxed mb-10 text-justify">
        Feel free to reach out for internships, freelance work, or collaboration.
      </p>

      {/* Contact Form */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg border border-white/5">
        <ContactForm />
      </div>
    </section>
  );
}

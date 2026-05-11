"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hello"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919879110368?text=Hello"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
    >
      <FaWhatsapp size={20} />
    </a>
  );
}

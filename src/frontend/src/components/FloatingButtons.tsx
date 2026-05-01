import { motion } from "motion/react";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* Left side: WhatsApp + Call */}
      <div
        className="fixed bottom-8 left-4 z-50 flex flex-col gap-3"
        data-ocid="floating.left_buttons"
      >
        <motion.a
          href="https://wa.me/919408626660"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-2 text-white rounded-full px-4 py-3 shadow-lg cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            boxShadow: "0 4px 20px rgba(34,197,94,0.4)",
          }}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.08, x: 4 }}
          whileTap={{ scale: 0.95 }}
          data-ocid="floating.whatsapp_button"
        >
          <FaWhatsapp className="w-5 h-5 shrink-0" />
          <span className="text-sm font-semibold hidden sm:inline">
            WhatsApp
          </span>
        </motion.a>

        <motion.a
          href="tel:09408626660"
          aria-label="Call us"
          className="flex items-center gap-2 text-white rounded-full px-4 py-3 shadow-lg cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #FF1493, #FF69B4)",
            boxShadow: "0 4px 20px rgba(255,20,147,0.45)",
          }}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          whileHover={{ scale: 1.08, x: 4 }}
          whileTap={{ scale: 0.95 }}
          data-ocid="floating.call_button"
        >
          <FaPhone className="w-4 h-4 shrink-0" />
          <span className="text-sm font-semibold hidden sm:inline">
            Call Us
          </span>
        </motion.a>
      </div>

      {/* Right side: Instagram */}
      <div
        className="fixed bottom-8 right-4 z-50"
        data-ocid="floating.right_buttons"
      >
        <motion.a
          href="https://www.instagram.com/bellezaglamorous"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on Instagram"
          className="flex items-center gap-2 text-white rounded-full px-4 py-3 shadow-lg cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            boxShadow: "0 4px 20px rgba(220,39,67,0.4)",
          }}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          whileHover={{ scale: 1.08, x: -4 }}
          whileTap={{ scale: 0.95 }}
          data-ocid="floating.instagram_button"
        >
          <FaInstagram className="w-5 h-5 shrink-0" />
          <span className="text-sm font-semibold hidden sm:inline">
            Instagram
          </span>
        </motion.a>
      </div>
    </>
  );
}

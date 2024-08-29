import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Button = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div>
      <motion.button
        className="bg-darkgreen font-sans text-white font-semibold py-2 px-4 rounded-full"
        onClick={openModal}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.3 }}
      >
        Sobre
      </motion.button>

      <AnimatePresence>
        {showModal && <Modal show={showModal} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

const Modal = ({ show, onClose }) => {
  return (
    <div className="font-sans fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-white rounded-lg shadow-lg w-1/2 p-6"
      >
        <button
          className="absolute text-xl top-4 right-5 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">O que é o Chordz?</h2>
        <p>
          
        </p>
      </motion.div>
    </div>
  );
};

export default Button;

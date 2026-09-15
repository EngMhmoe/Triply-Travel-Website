//import framer-motion
import { motion, AnimatePresence } from "framer-motion";

export default function ModakAddToCartAndDelete({
  modal,
  confirmAddToCart,
  confirmDelete,
  setModal,
  ContentConfirmAddToCart,
  ContentConfirmDelete,
}) {
  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          onClick={() => setModal(null)}
          className="fixed z-9000 inset-0 bg-black/85 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7 }}
            transition={{ duration: 0.5 }}
            className="bg-(--primary-pera) text-white p-7 rounded-2xl shadow-xl sm:w-fit  mx-5  text-center"
          >
            <h2 className="text-2xl font-bold mb-6">
              {modal === "add" ? ContentConfirmAddToCart : ContentConfirmDelete}
            </h2>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="flex justify-center gap-4">
              <button
                onClick={(e) =>
                  modal === "add" ? confirmAddToCart(e) : confirmDelete()
                }
                className="text-white bg-green-600 hover:text-green-600 hover:bg-green-200 font-bold duration-1000 cursor-pointer px-4 py-2 rounded-xl rounded-bl-none"
              >
                Confirm
              </button>

              {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <button
                onClick={() => setModal(null)}
                className="bg-red-200 text-(--primary-color2) hover:bg-(--primary-color2) hover:text-white font-bold duration-1000 cursor-pointer px-4 py-2 rounded-xl rounded-br-none"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

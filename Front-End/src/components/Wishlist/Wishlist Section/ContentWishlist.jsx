//import framer-motion
import { AnimatePresence, motion } from "framer-motion";

//import Components
import ContentWishlistGrid from "./ContentWishlistGrid";
import ContentWishlistList from "./ContentWishlistList";

export default function ContentWishlist({
  ShowModelDelete,
  ShowModelAddToCart,
  ////////////////////////////
  loading,
  view,
  getFinalPrice,
  setModal,
}) {
  return (
    <section>
      {!loading && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 20, y: 0 }}
            transition={{ duration: 3 }}
            layout
          >
            {!loading && view === "grid" ? (
              <ContentWishlistGrid
                ShowModelDelete={ShowModelDelete}
                ShowModelAddToCart={ShowModelAddToCart}
                /////////////////////////////////////////
                getFinalPrice={getFinalPrice}
                setModal={setModal}
              />
            ) : (
              <ContentWishlistList
                ShowModelDelete={ShowModelDelete}
                ShowModelAddToCart={ShowModelAddToCart}
                ///////////////////////////////////////
                getFinalPrice={getFinalPrice}
                setModal={setModal}
              />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}

//import Components
import CartItem from "./CartItem";
import ModakAddToCartAndDelete from "../../../../UI/ModelAddToCart&Delete";

//import useGetCartStore
import { useCartStore } from "../../../../Store/useCartStore";

//import framer-motion
import { motion, AnimatePresence } from "framer-motion";

//import React Hooks
import { useState } from "react";

//import React Icons
import { FaShoppingCart } from "react-icons/fa";

//import react-hot-toast
import { Toaster } from "react-hot-toast";

//import Hook is useCartActions
import { useItemActions } from "../../../../Hooks/useItemActions";

export default function CartList() {
  const { getCarts, setCart } = useCartStore();

  //modal add || delete
  const [modal, setModal] = useState(null); // add | delete

  //Select Item Id
  const [selectItemId, setSelectItemId] = useState(null);

  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////

  // Hook is useCartActions
  const { ShowModelDelete, confirmDelete } = useItemActions({
    //
    get: getCarts,
    set: setCart,

    //
    setModal: setModal,

    //
    selectItemId: selectItemId,
    setSelectItemId: setSelectItemId,

    //
    textToast: "Removed To Cart",
    conditionConfirmDelete: "Item",
  });

  return (
    <AnimatePresence>
      <Toaster />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 20, y: 0 }}
        transition={{ duration: 3 }}
        layout
      >
        <section>
          {getCarts.map((item) => (
            <CartItem
              key={item?.documentId}
              item={item}
              ShowModelDelete={ShowModelDelete}
            />
          ))}
        </section>
      </motion.div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* 🧊 MODAL */}
      <ModakAddToCartAndDelete
        modal={modal}
        confirmDelete={confirmDelete}
        setModal={setModal}
        ContentConfirmDelete={"Are you sure you want to delete this Cart ?"}
      />
    </AnimatePresence>
  );
}

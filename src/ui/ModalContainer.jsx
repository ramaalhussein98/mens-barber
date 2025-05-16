import { AnimatePresence, motion } from "framer-motion";
const ModalContainer = ({ setIsModalOpen, component, isModalOpen }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ y: "-400px", x: "0%", opacity: 0 }}
            animate={{ y: "0px", x: "0%", opacity: 1 }}
            exit={{ y: "-400px", x: "0%", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{
              position: "fixed",
              translateX: "-50%",
              translateY: "-50%",
              top: "50%",
              left: "50%",
              zIndex: "100000",
            }}
          >
            <div className="">{component}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {" "}
        {isModalOpen && (
          <motion.div
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#000000a9] w-full h-full z-[9999]"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalContainer;

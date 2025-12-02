import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 1 } },
};

const Card = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="p-4 bg-white rounded-xl shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          Hola, soy una tarjeta animada 🤘
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Card;

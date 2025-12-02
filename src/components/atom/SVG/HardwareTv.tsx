import { motion } from "framer-motion";

const HardwareTv = () => {
  return (
    <motion.g id="tv"
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
      style={{
        transformOrigin: "75px 75px",
      }}
    >
      <g id="Vector_3">
        <path d="M4 64H36V81H4V64Z" fill="#131313" />
        <path d="M17 82H23V86H17V82Z" fill="black" />
        <path
          d="M14 86C14 85.4477 14.4477 85 15 85H25C25.5523 85 26 85.4477 26 86H14Z"
          fill="#333333"
        />
      </g>
    </motion.g>
  );
};

export default HardwareTv;

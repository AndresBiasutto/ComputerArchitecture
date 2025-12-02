import type { SVGProps } from "react";
import { motion } from "framer-motion";
import HardwareCPU from "../../atom/SVG/HardwareCPU";
import HardwarePrinter from "../../atom/SVG/HardwarePrinter";
import HardwareKeyboard from "../../atom/SVG/HardwareKeyboard";
import HardwareTv from "../../atom/SVG/HardwareTv";
import HardwareMouse from "../../atom/SVG/HardwareMouse";

const Hardware = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Hardware">
        <HardwareCPU />

        <motion.g
          id="orbiting-group"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          style={{
            transformOrigin: "75px 75px",
          }}
        >
          <HardwarePrinter />
          <HardwareKeyboard />
          <HardwareTv />
          <HardwareMouse />
        </motion.g>
      </g>

      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1={75}
          y1={54}
          x2={75}
          y2={94}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5A5858" />
          <stop offset={1} stopColor="#333333" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_2"
          x1={75}
          y1={54}
          x2={75}
          y2={94}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#084800" />
          <stop offset={1} stopColor="#042300" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_2"
          x1={130}
          y1={64}
          x2={130}
          y2={81}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3FFCB" />
          <stop offset={1} stopColor="#92997A" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_2"
          x1={130}
          y1={81}
          x2={130}
          y2={64}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset={0.677885} stopColor="#737373" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1_2"
          x1={130}
          y1={64}
          x2={130}
          y2={81}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.129808} stopColor="#CAC5C5" />
          <stop offset={1} stopColor="#646262" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Hardware;

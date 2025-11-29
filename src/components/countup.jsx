import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CountUp = ({ end, suffix = "", duration = 2.5 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useMotionValue(0);

  // This is the correct way — use motion value + display current value
  const displayValue = count.get();

  useEffect(() => {
    if (inView) {
      animate(count, end, {
        duration,
        ease: "easeOut",
        onUpdate: () => {
          // Force re-render when value changes
          count.get();
        },
      });
    }
  }, [inView, count, end, duration]);

  return (
    <motion.span ref={ref}>
      {Math.round(displayValue)}
      {suffix}
    </motion.span>
  );
};
// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";
// import { MotionConfig } from "framer-motion";

// type MotionContextType = {
//   isAnimationEnabled: boolean;
//   toggleAnimations: () => void;
// };

// // Set this to false to disable all animations
// const ANIMATIONS_ENABLED = true;

// const MotionContext = createContext<MotionContextType>({
//   isAnimationEnabled: ANIMATIONS_ENABLED,
//   toggleAnimations: () => {},
// });

// export const useMotion = () => useContext(MotionContext);

// export const MotionProvider = ({ children }: { children: ReactNode }) => {
//   // Initialize state with the hard-coded value
//   const [isAnimationEnabled, setIsAnimationEnabled] =
//     useState(ANIMATIONS_ENABLED);

//   const toggleAnimations = () => {
//     setIsAnimationEnabled((prev) => !prev);
//   };

//   return (
//     <MotionContext.Provider value={{ isAnimationEnabled, toggleAnimations }}>
//       <MotionConfig reducedMotion="always">{children}</MotionConfig>
//     </MotionContext.Provider>
//   );
// };

"use client";

import { store } from "@/redux/store";
// import { MotionProvider } from "@/context/MotionContext";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        {/* <MotionProvider> */}
        {children}
        {/* </MotionProvider> */}
        <Toaster position="top-center" />
      </Provider>
    </>
  );
};

export default CustomProvider;

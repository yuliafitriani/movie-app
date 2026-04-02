import toast from "react-hot-toast";
import React from "react";
import { ToastMessage } from "../components/molecules/ToastMessage";

type ShowToastParams = {
  message: string;
  duration?: number;
};

export const useToast = () => {
  const showToast = ({ message, duration = 1000 }: ShowToastParams) => {
    toast.custom(
      (t) =>
        React.createElement(ToastMessage, {
          message,
          visible: t.visible,
        }),
      { duration },
    );
  };

  return { showToast };
};

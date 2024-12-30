"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Toast, ToastProvider, ToastViewport } from "@radix-ui/react-toast";
import { clsx } from "clsx";

interface ToastContextProps {
  showToast: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export const ToastProviderComponent = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [toasts, setToasts] = useState<
    { id: string; message: string; duration: number }[]
  >([]);

  const showToast = (message: string, duration = 3000) => {
    const id = `${Date.now()}`;
    setToasts((prev) => [...prev, { id, message, duration }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastProvider>
        {children}
        <ToastViewport
          className={clsx(
            "fixed bottom-0 right-0 m-4 flex max-w-xs flex-col gap-2 p-4",
            "bg-gray-900 rounded-lg text-white shadow-lg"
          )}
        />
        {toasts.map((toast) => (
          <Toast key={toast.id} open={true}>
            <div className="p-4 bg-gray-800 rounded shadow">
              {toast.message}
            </div>
          </Toast>
        ))}
      </ToastProvider>
    </ToastContext.Provider>
  );
};

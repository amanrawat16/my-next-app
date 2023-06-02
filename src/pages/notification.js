import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return (
    <ToastContainer />
  );
};

export const toastSuccess = (message) => {
  toast.success(message);
};
export const toastError = (message) => {
    toast.error(message);
  };
export default Notification;
import { toast } from 'react-toastify';

type ToastType = 'success' | 'error';

export const showToast = (message: string, type: ToastType) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    case 'error':
      toast.error(message, {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    default:
      break;
  }
};

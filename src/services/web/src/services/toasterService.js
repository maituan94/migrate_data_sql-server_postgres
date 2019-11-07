import { toast } from 'react-toastify';

export const showSuccessToast = (message) => toast.success(message);
export const showErrorToast = (message) => toast.error(message);
export const showWarningToast = (message) => toast.warn(message);

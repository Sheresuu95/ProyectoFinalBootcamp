import React from 'react';

interface CustomAlertProps {
  message: string;
  type: 'error' | 'success';
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type, onClose }) => {
  const alertClass = type === 'error' ? 'alert-error' : 'alert-success';

  return (
    <div className={`custom-alert ${alertClass}`}>
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CustomAlert;
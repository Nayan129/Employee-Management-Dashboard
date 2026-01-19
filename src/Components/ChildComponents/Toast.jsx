const Toast = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold">
        {message}
      </div>
    </div>
  );
};

export default Toast;

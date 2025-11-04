import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-600 font-medium">Gerando cardápio...</p>
    </div>
  );
}

export default LoadingSpinner;

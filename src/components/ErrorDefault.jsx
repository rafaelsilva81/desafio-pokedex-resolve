import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorDefault = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-primary flex flex-col items-center justify-center">
      <div className="text-white text-4xl font-semibold">
        There was an error when accessing this page
      </div>

      <button
        className="bg-white text-primary font-semibold px-4 py-2 rounded-lg mt-4 text-xl"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorDefault;

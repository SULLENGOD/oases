/* eslint-disable react/prop-types */
import { useState } from "react";

const Modal = ({modalBody, modalName}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleModal} className="block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">
        {modalName}
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 h-screen max-h-full flex justify-center items-center bg-black bg-opacity-50 dark:bg-opacity-70">
          <div className="bg-purple-900 rounded-lg shadow p-6 max-w-md w-full">
            <button onClick={toggleModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" aria-label="Close modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
            <div className="px-6 py-6 lg:px-8">
            {modalBody}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

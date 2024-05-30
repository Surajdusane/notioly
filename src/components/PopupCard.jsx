import React from 'react';
import cross from '../assets/icon/cross.svg'

const PopupCard = ({ img, text, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
          <img src={cross} alt="" />
        </button>
        <img src={img} alt="Popup" className="w-full h-64 object-cover rounded-lg" />
        <p className="mt-4">{text}</p>
      </div>
    </div>
  );
};

export default PopupCard;
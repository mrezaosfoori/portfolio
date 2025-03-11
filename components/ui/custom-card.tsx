import React from "react";

const CustomCard = ({
  src,
  title,
  decription,
}: {
  src: string;
  title: string;
  decription: string;
}) => {
  return (
    /* From Uiverse.io by seyed-mohsen-mousavi */
    <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
      <div className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg shadow-md px-[10px]">
        <div className="flex gap-2">
          <div className="text-[#2b9875] bg-white backdrop-blur-xl p-1 rounded-lg">
            <img src={src} alt="" className="max-w-6 max-h-6" />
          </div>
          <div>
            <p className="text-white">{title}</p>
            <p className="text-slate-300">{decription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

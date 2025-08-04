"use client";

import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";

type AdvertiseCardProps = {
  item: {
    _id: string;
    propertyImage: string;
    minPrice: number;
    maxPrice: number;
    propertyTitle: string;
    propertyLocation: string;
    propertyVerificationStatus: string;
  };
};

const AdvertiseCard = ({ item }: AdvertiseCardProps) => {
  const {
    propertyImage,
    minPrice,
    maxPrice,
    propertyTitle,
    propertyLocation,
    propertyVerificationStatus,
    _id,
  } = item;

  const getShortLocation = () => {
    try {
      const parts = propertyLocation.split(" ");
      return `${parts[0]} ${parts[1]?.split(",")[0] || ""}`;
    } catch {
      return propertyLocation;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
      <div
        className="w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{ backgroundImage: `url(${propertyImage})` }}
      ></div>

      <div className="w-80 -mt-16 overflow-hidden bg-[#F2FFE9] rounded-lg shadow-lg md:w-[450px] dark:bg-gray-800">
        <h3 className="py-2 font-bold text-sm tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {propertyTitle}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Price: ${minPrice} - ${maxPrice}
          </span>
          <span className="flex items-center text-sm font-semibold text-green-600 dark:text-green-400">
            <MdOutlineVerified className="text-lg mr-1" />
            {propertyVerificationStatus}
          </span>
        </div>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200 flex items-center">
            <FaLocationDot className="mr-1" />
            {getShortLocation()}
          </span>

          <Link href={`/propertyDetail/${_id}`}>
            <button
              className="relative px-3 py-1 text-sm bg-[#072730] text-white rounded-full border border-dashed border-main 
              before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-main 
              hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden"
            >
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;

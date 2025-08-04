"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdvertiseCard from "./AdvertiseCard";
import SectionTitle from "../shared/section-title";

// Fake data
const fakeAdvertiseData = [
  {
    _id: "1",
    title: "Modern Apartment in Dhaka",
    price: "$200,000",
    location: "Gulshan",
    image: "/images/apt1.jpg",
  },
  {
    _id: "2",
    title: "Cozy House in Chittagong",
    price: "$150,000",
    location: "Panchlaish",
    image: "/images/house1.jpg",
  },
];

const Advertise = () => {
  const [advertise, setAdvertise] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setAdvertise(fakeAdvertiseData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="ml-8">
        <SectionTitle
          title="Best For You"
          subtitle="Check Out Our Best Collection"
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {advertise.map((item) => (
          <AdvertiseCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/allProperties">
          <button className="relative px-8 py-2 bg-[#072730] text-white border rounded-full border-dashed border-main hover:bg-main transition-all duration-500">
            See All Properties
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Advertise;

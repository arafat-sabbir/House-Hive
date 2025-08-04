import Advertise from "@/components/home/Advertise";
import Banner from "@/components/home/Banner";

const Home = () => {
  return (
    <div className="lg:mt-[100px]">
      <Banner />
      <Advertise />
      {/* <LatestReview />
      <SeeRooms />
      <Ourpartner /> */}
    </div>
  );
};

export default Home;

import Image from "next/image";
import serviceBookImg from "@/assets/Group 27.png";
import Link from "next/link";

const BookNowBanner = () => {
  return (
    <div className="relative my-16">
      <Image
        src={serviceBookImg}
        alt="aa"
        width={50000}
        height={50000}
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute w-full h-full top-0 flex flex-col bg-[#032237] bg-opacity-20 backdrop-blur-sm items-center justify-center">
        <h1 className="md:text-3xl text-2xl text-center bg-gradientBg text-transparent bg-clip-text font-bold">
          Need A Consultation For Health care Finance?
        </h1>
        <Link href="/book-your-consultation">
          <button className="bg-gradientBg px-5 py-2 my-5 rounded-md">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookNowBanner;

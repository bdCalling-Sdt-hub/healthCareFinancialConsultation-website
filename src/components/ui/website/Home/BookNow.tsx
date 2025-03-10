import Image from "next/image";
import bookingImage1 from "@/assets/image (16).png";
import bookingImage2 from "@/assets/image (17).png";
import bookingImage3 from "@/assets/image (18).png";

const BookNow = () => {
  return (
    <div className="md:h-[650px] bg-white border mt-32">
      <div className="bg-[#032237]">
        <div className="container py-20 md:flex justify-center">
          <div className="md:w-[30%] space-y-4">
            <h1 className="text-3xl font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
              Let&apos;s Optimize <br className="md:hidden" /> Your Healthcare
              Financial Performance Today!
            </h1>
            <p className="text-gray-400">
              Expert financial consulting tailored to your unique challenges in
              the ever-evolving healthcare industry!
            </p>
            <button className="font-semibold bg-gradientBg px-5 py-2 hover:opacity-90 rounded-md border-none">
              Book Now
            </button>
          </div>
          <div className="md:w-[70%] flex mt-5 md:mt-0 md:relative">
            <div className="md:absolute -top-40 left-0">
              <Image
                src={bookingImage1}
                alt="bookingImage1"
                width={50000}
                height={50000}
                className="md:w-[400px] md:h-[320px] object-cover"
              />
            </div>
            <div className="absolute -top-12 right-40 z-20">
              <Image
                src={bookingImage2}
                alt="bookingImage1"
                width={50000}
                height={50000}
                className="md:w-[400px] hidden md:block md:h-[320px] object-cover"
              />
            </div>
            <div className="absolute top-28 left-36 z-50">
              <Image
                src={bookingImage3}
                alt="bookingImage1"
                width={50000}
                height={50000}
                className="md:w-[400px] hidden md:block md:h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

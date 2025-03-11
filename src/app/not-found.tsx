import Image from "next/image";
import notFoundImage from "@/assets/notFound.jpg";
import Link from "next/link";

const notFoundPage = () => {
  return (
    <div className="container h-screen flex flex-col items-center justify-center">
      <Image
        className="object-contain w-[60%] mx-auto"
        width={5045450}
        height={5045540}
        src={notFoundImage}
        alt="Not Found"
      />
      <h1 className="text-3xl mb-3 text-red-600">Page Not Found!</h1>
      <Link href="/">
        <button className="bg-gradientBg px-6 py-2 rounded-lg">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default notFoundPage;

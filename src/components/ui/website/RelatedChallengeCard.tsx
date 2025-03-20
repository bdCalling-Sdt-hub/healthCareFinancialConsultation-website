import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ChallengeItem {
  id: string;
  image: StaticImageData;
  title: string;
}

const RelatedChallengeCard = ({ item }: { item: ChallengeItem }) => {
  return (
    <div key={item.id} className="relative">
      <Image
        src={item.image}
        alt={item.title}
        width={50000}
        height={50000}
        className="w-[400px] h-[300px] rounded-2xl object-cover"
      />
      <div className="absolute -bottom-5 rounded-md bg-[#032237] flex gap-2 items-center justify-start h-[60px]">
        <div className="bg-gradientBg ml-2 w-[85%] pl-2">
          <h1 className="text-sm font-bold w-[90%] leading-normal">
            {item.title}
          </h1>
        </div>
        <Link href={`/insights/challenges/${item?.id}`}>
          <FaArrowRight className="cursor-pointer" color="white" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedChallengeCard;

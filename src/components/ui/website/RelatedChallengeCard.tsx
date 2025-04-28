import { getImageUrl } from "@/utils/getImageUrl";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ChallengeItem {
  _id: string;
  background: string;
  title: string;
}

const RelatedChallengeCard = ({ item }: { item: ChallengeItem }) => {
  return (
    <div key={item._id} className="relative">
      <Image
        src={getImageUrl(item?.background)}
        alt={item.title}
        width={50000}
        height={50000}
        className="w-[400px] h-[300px] rounded-2xl object-cover"
      />
      <div className="absolute -bottom-5 rounded-md bg-[#032237] flex gap-2 items-center justify-start h-[60px]">
        <Link href={`/insights/challenges/${item?._id}`}>
          <div className="flex items-center justify-center gap-5 mr-5">
            <div className="bg-gradientBg ml-2 w-[85%] pl-2">
              <h1 className="text-sm font-bold w-[90%] leading-normal">
                {item.title}
              </h1>
            </div>
            <FaArrowRight className="cursor-pointer" color="white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RelatedChallengeCard;

import coreValuesImage1 from "@/assets/image (26).png";
import coreValuesImage2 from "@/assets/image (27).png";
import Image from "next/image";

const OurCoreValues = () => {
  return (
    <div className="container my-20">
      <h1 className="text-3xl mb-5 font-bold">Our Core Values</h1>

      <div className="md:flex items-center gap-10">
        <div className="md:flex gap-8 md:w-[55%] w-full">
          <Image
            src={coreValuesImage1}
            alt="coreValuesImage1"
            width={50000}
            height={50000}
            className="md:w-[350px] md:h-[350px] h-full rounded-2xl object-cover"
          />
          <Image
            src={coreValuesImage2}
            alt="coreValuesImage1"
            width={50000}
            height={50000}
            className="md:w-[350px] md:h-[350px] h-full md:mt-20 mt-5 rounded-2xl object-cover"
          />
        </div>
        <div className="md:w-[45%] space-y-5 md:mt-0 mt-10">
          <h1>
            <span className="font-bold">Integrity & Transparency</span> – We
            uphold the highest ethical standards, fostering trust through
            honest, clear, and accountable consulting practices.
          </h1>
          <h1>
            <span className="font-bold">Excellence & Innovation</span> – We
            continuously seek new strategies and cutting-edge solutions to help
            our clients stay ahead in an ever-changing healthcare industry.
          </h1>
          <h1>
            <span className="font-bold">Client-Centered Approach</span> – We
            prioritize the unique needs of each healthcare organization,
            tailoring solutions to maximize their financial and operational
            success.
          </h1>
          <h1>
            <span className="font-bold">Efficiency & Sustainability</span> – We
            are committed to optimizing financial and operational workflows,
            ensuring long-term growth and stability for healthcare providers.
          </h1>
          <h1>
            <span className="font-bold">Collaboration & Partnership</span> – We
            work hand in hand with our clients, acting as strategic partners to
            create meaningful, lasting impact.
          </h1>
          <h1>
            <span className="font-bold">Compliance & Best Practices</span> – We
            adhere to regulatory standards and industry best practices, ensuring
            that our clients remain compliant while optimizing financial
            performance.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;

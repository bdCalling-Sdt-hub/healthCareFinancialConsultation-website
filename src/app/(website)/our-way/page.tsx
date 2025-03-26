"use client";

import { useState } from "react";
import Image from "next/image";
import howWeWorkImg from "@/assets/image (30).png";

const HowWeWorkPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("menu1");

  const renderContent = () => {
    switch (selectedMenu) {
      case "menu1":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-3">Deep Industry Expertise</h1>
            <p className="text-gray-600">
              We here at HC Financial have a profound understanding of the
              healthcare sector, including its unique financial challenges and
              regulatory landscape, which enable our consultants to provide
              tailored solutions that align with your company&apos;s specific
              needs.
            </p>
            <p className="my-4 text-gray-600">
              HC Financial has an extensive and nuanced understanding of the
              healthcare industry and its intricacies, challenges, and dynamics.
              This profound knowledge encompasses various facets:
            </p>
            <div>
              <ol className="list-decimal pl-5 space-y-4 text-gray-600">
                <li>
                  <span className="font-semibold">Specialized Knowledge:</span>{" "}
                  Most of our consultants have spent over 20 years of their
                  careers within the healthcare industry, accumulating
                  industry-specific processes, technologies, regulations, and
                  best practices. This specialization allows our consultants to
                  address complex issues effectively and innovate while finding
                  tailored solutions for your organization.
                </li>
                <li>
                  <span className="font-semibold">Practical Experience:</span>{" "}
                  Our consultants have done hands-on work with top leading
                  healthcare organizations, both for and not-for-profit models,
                  accumulating a significant array of hands-on industry
                  experience—leading to a refined skill set and the ability to
                  navigate sector-specific challenges adeptly.
                </li>
                <li>
                  <span className="font-semibold">Regulatory Acumen:</span>{" "}
                  Understanding and staying updated on the legal and compliance
                  frameworks governing the industry, ensuring that strategies
                  and operations align with current laws and standards.
                </li>
                <li>
                  <span className="font-semibold">
                    Market Dynamics Insight:
                  </span>{" "}
                  Our consultants pride themselves on staying ahead of the
                  curve, ensuring the grasping of economic, competitive, and
                  consumer trends that influence the healthcare industry,
                  allowing for strategic decision-making and anticipation of
                  market shifts that your organization needs to navigate.
                </li>
                <li>
                  <span className="font-semibold">
                    Network and Relationships:
                  </span>{" "}
                  Building strong connections with key stakeholders, including
                  suppliers, clients, regulators, and industry peers,
                  facilitating collaboration and the exchange of valuable
                  insights.
                </li>
              </ol>
            </div>
            <p className="my-4 text-gray-600">
              Developing deep industry expertise is a continuous process,
              involving ongoing learning, adaptation, and engagement with
              emerging trends and technologies to maintain a competitive edge —
              this is.
            </p>
          </div>
        );
      case "menu2":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-3">
              Comprehensive Service Offering
            </h1>
            <p className="text-gray-600 my-4">
              HC Financial provides a full spectrum of services—from strategic
              financial planning to operational efficiency improvements—allowing
              the firm to address diverse client needs effectively. This
              approach ensures that our clients can access all necessary
              services under one umbrella, enhancing convenience and fostering
              stronger business relationships. Key components of our
              comprehensive service offering include:
            </p>
            <div>
              <ol className="list-decimal pl-5 space-y-4 text-gray-600">
                <li>
                  Full Range of Services: Providing an extensive suite of
                  services that address various aspects of client needs, ranging
                  from Cost Containment through to Financial Planning.
                </li>
                <li>
                  Bundled Packages: Offering curated combinations of services
                  that provide our clients with integrated solutions. Bundled
                  services often come at a discounted rate compared to
                  purchasing each service individually, adding value for our
                  client.
                </li>
                <li>
                  Customization and Flexibility: Tailoring services to meet the
                  specific requirements for each of our clients, allowing
                  flexibility in service delivery and the ability to adapt to
                  changing client needs.
                </li>
                <li>
                  Integrated Support Systems: Ensuring that all services are
                  supported by robust customer service and support systems,
                  providing clients with seamless assistance across all service
                  areas.
                </li>
                <li>
                  Consistent Quality Assurance: Maintaining high standards
                  across all services offered, ensuring that each component of
                  the service offering meets the company&apos;s quality
                  benchmarks and client expectations.
                </li>
              </ol>
            </div>
          </div>
        );
      case "menu3":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-3">Proven Track Record</h1>
            <p className="text-gray-600 my-4">
              A history of successful engagements and measurable outcomes
              demonstrates the firm&apos;s capability to drive sustainable
              improvements for healthcare organizations.
            </p>
          </div>
        );
      case "menu4":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-3">
              Innovative Technology Integration
            </h1>
            <p className="text-gray-600 my-4">
              Leveraging advanced technologies, such as data analytics and AI,
              to enhance financial strategies and operational processes
              showcases HC Financial&apos;s commitment to cutting-edge
              solutions.
            </p>
          </div>
        );
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="bg-white">
      <div className="relative mb-20">
        <Image
          src={howWeWorkImg}
          alt="howWeWorkImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            What makes us different
          </h1>
          <p className="text-white md:text-lg text-md">
            What sets us apart is our deep expertise in the healthcare sector,
            with over 20 years of industry experience. We offer tailored
            solutions backed by a strong network of industry connections and a
            commitment to innovative technologies.
          </p>
        </div>
      </div>

      {/* Layout with menu and content */}
      <div className="container mx-auto py-20 md:h-[850px]">
        <div className="md:flex">
          {/* Left Menu */}
          <div className="md:w-[30%] p-4 space-y-6 bg-white">
            <button
              className={`block w-full p-2 py-4 mb-2 text-left border rounded-lg border-[#032237] transition-colors duration-300 ${
                selectedMenu === "menu1"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu1")}
            >
              Deep Industry Expertise
            </button>
            <button
              className={`block w-full p-2 py-4 mb-2 text-left border rounded-lg border-[#032237] transition-colors duration-300 ${
                selectedMenu === "menu2"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu2")}
            >
              Comprehensive Service Offering
            </button>
            <button
              className={`block w-full p-2 py-4 mb-2 text-left border rounded-lg border-[#032237] transition-colors duration-300 ${
                selectedMenu === "menu3"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu3")}
            >
              Proven Tract Record
            </button>
            <button
              className={`block w-full p-2 py-4 mb-2 text-left border rounded-lg border-[#032237] transition-colors duration-300 ${
                selectedMenu === "menu4"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu4")}
            >
              Innovative Technology Integration
            </button>
          </div>

          {/* Right Content */}
          <div className="md:w-[70%] p-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkPage;

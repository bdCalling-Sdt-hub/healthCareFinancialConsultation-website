import Image from "next/image";
import costImage from "@/assets/1200-x-675-Economic-chart-and-money-696x385.webp";
import howWeWorkImg from "@/assets/image (33).png";
import titleLogo1 from "@/assets/image 67.png";
import titleLogo2 from "@/assets/image 68.png";
import titleLogo3 from "@/assets/image 70.png";
import { Collapse } from "antd";

const lastSectionData = [
  {
    id: 1,
    description:
      "Provision of Analysis to understand where your costs are and how best to manage them based on reimbursement rules and the company’s patient population.",
  },
  {
    id: 2,
    description:
      "Provision of how best to implement a value-based care model where providers are rewarded for improving patient health outcomes.",
  },
  {
    id: 3,
    description: "Negotiate better Pharmaceutical Reimbursement Rates.",
  },
  {
    id: 4,
    description:
      "Streamline EHR and standardize insurance claim processing (Workflow Optimization).",
  },
  {
    id: 5,
    description:
      "Helping the organization understand how they can best leverage AI and Telemedicine for its service lines.",
  },
];

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={howWeWorkImg}
          alt="howWeWorkImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            Healthcare Horizon
          </h1>
          <p className="text-white md:text-lg text-md">
            What sets us apart is our deep expertise in the healthcare sector,
            with over 20 years of industry experience. We offer tailored
            solutions backed by a strong network of industry connections and a
            commitment to innovative technologies.
          </p>
        </div>
      </div>

      <div className="mt-64">
        <div className="w-full relative bg-[#032237] h-[250px]">
          <div className="container absolute -top-48 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-10 py-20">
            <div className="w-1/2">
              <Image
                src={costImage}
                alt="Rising Costs and Affordability"
                width={50000}
                height={50000}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 space-y-4">
              <h2 className="text-4xl mb-10 font-bold">
                Rising Costs <br /> and Affordability
              </h2>
              <p className="text-white">
                The rising cost of healthcare is a global challenge, impacting
                patients, healthcare providers, insurers, and governments.
                Factors such as advancing medical technologies, administrative
                inefficiencies, pharmaceutical price surges, and an aging
                population all contribute to increasing expenses. As costs rise,
                affordability becomes a critical issue, with many individuals
                struggling to access necessary medical care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-20">
        {/* First Collapse Section */}
        <div className="flex items-center gap-3 mb-5">
          <Image
            src={titleLogo1}
            alt="Key Drivers"
            width={50000}
            height={50000}
            className="w-20 h-20 object-contain rounded-lg"
          />
          <p className="text-3xl font-bold text-secondary">
            Key Drivers of Rising Healthcare Costs
          </p>
        </div>

        <Collapse
          className="mt-8 border-none bg-transparent"
          expandIconPosition="end"
          items={[
            {
              key: "1",
              label: "Increasing Costs of Medical Technology & Innovation",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    Advanced medical devices, robotic surgeries, and AI-driven
                    diagnostics{" "}
                    <span className="font-semibold">
                      enhance healthcare quality
                    </span>{" "}
                    but come at a high cost.
                  </li>
                  <li>
                    The rapid adoption of{" "}
                    <span className="font-semibold">
                      personalized medicine and genomics-based treatments
                    </span>{" "}
                    increases research and development (R&D) expenses, driving
                    up prices.
                  </li>
                  <li>
                    High costs of{" "}
                    <span className="font-semibold">
                      specialized equipment and facilities
                    </span>{" "}
                    (e.g., proton therapy centers for cancer treatment)
                    contribute to overall expenditure.
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: {
                marginBottom: "1rem",
                border: "none",
              },
            },
            {
              key: "2",
              label: "Pharmaceutical & Prescription Drug Costs",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    <span className="font-semibold">High R&D costs:</span> On
                    average, it costs over{" "}
                    <span className="font-semibold">$2.6 billion</span> to bring
                    a new drug to market.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Patent protection laws
                    </span>{" "}
                    prevent generic alternatives from entering the market
                    quickly, keeping drug prices high.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Price gouging & monopolies:
                    </span>{" "}
                    Some pharmaceutical companies{" "}
                    <span className="font-semibold">
                      increase drug prices exponentially
                    </span>
                    , even for essential medications.
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: {
                marginBottom: "1rem",
                border: "none",
              },
            },
            {
              key: "3",
              label: "Administrative & Operational Inefficiencies",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    <span className="font-semibold">
                      Complex insurance & billing processes
                    </span>{" "}
                    lead to excessive administrative costs.
                  </li>
                  <li>
                    The U.S. spends{" "}
                    <span className="font-semibold">
                      over 25% of healthcare expenses on administration
                    </span>
                    , compared to 10-15% in other developed nations.
                  </li>
                  <li>
                    Inefficiencies in{" "}
                    <span className="font-semibold">
                      Electronic Health Records (EHR) systems
                    </span>
                    , claim processing, and provider reimbursements add
                    financial burdens.
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: {
                marginBottom: "1rem",
                border: "none",
              },
            },
            {
              key: "4",
              label: "Aging Population & Chronic Disease Burden",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    <span className="font-semibold">
                      Longer life expectancy
                    </span>{" "}
                    leads to increased demand for long-term care, geriatric
                    services, and chronic disease management.
                  </li>
                  <li>
                    Chronic conditions such as diabetes, heart disease, and
                    obesity drive long-term medical expenses.
                  </li>
                  <li>
                    The cost of treating chronic diseases accounts for{" "}
                    <span className="font-semibold">
                      more than 75% of total healthcare expenditures
                    </span>{" "}
                    in many developed nations.
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: { marginBottom: "1rem", border: "none" },
            },
            {
              key: "5",
              label: "Hospital Consolidation & Reduced Competition",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    Mergers between hospitals create{" "}
                    <span className="font-semibold">regional monopolies</span>,
                    reducing price competition.
                  </li>
                  <li>
                    Hospitals charge significantly more for procedures in areas
                    with fewer competitors.
                  </li>
                  <li>
                    Private equity firms buying hospitals often{" "}
                    <span className="font-semibold">
                      prioritize profit over patient affordability
                    </span>
                    .
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: { marginBottom: "1rem", border: "none" },
            },
            {
              key: "6",
              label: "Medical Malpractice & Defensive Medicine",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    Fear of lawsuits causes doctors to order{" "}
                    <span className="font-semibold">
                      unnecessary tests, procedures, and imaging
                    </span>{" "}
                    (defensive medicine), driving up costs.
                  </li>
                  <li>
                    Malpractice insurance premiums further increase the
                    financial burden on providers and patients.
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: { marginBottom: "1rem", border: "none" },
            },
          ]}
        />

        {/* Second Collapse Section */}
        <div className="flex items-center gap-3 mb-5 mt-16">
          <Image
            src={titleLogo2}
            alt="Consequences"
            width={50000}
            height={50000}
            className="w-20 h-20 object-contain rounded-lg"
          />
          <p className="text-3xl font-bold text-secondary">
            Consequences of Healthcare Affordability Issues
          </p>
        </div>

        <Collapse
          className="mt-8 border-none bg-transparent"
          expandIconPosition="end"
          items={[
            {
              key: "1",
              label: "Reduced Access to Care",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    Patients{" "}
                    <span className="font-semibold">
                      delay or avoid medical treatment
                    </span>{" "}
                    due to high costs, leading to worsened health outcomes.
                  </li>
                  <li>
                    <span className="font-semibold">Preventable diseases</span>{" "}
                    become more expensive to treat when left unmanaged.
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: { marginBottom: "1rem", border: "none" },
            },
            {
              key: "2",
              label: "Increased Medical Debt & Bankruptcy",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    Over 60% of bankruptcies in the U.S. are linked to medical
                    expenses.
                  </li>
                  <li>
                    Many patients face{" "}
                    <span className="font-semibold">
                      high deductibles, co-pays, and out-of-pocket costs
                    </span>
                    .
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: { marginBottom: "1rem", border: "none" },
            },
            {
              key: "3",
              label: "Strain on Public Healthcare Systems",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    Rising costs{" "}
                    <span className="font-semibold">
                      overburden government-funded programs
                    </span>{" "}
                    like Medicare and Medicaid.
                  </li>
                  <li>
                    Countries with universal healthcare struggle to balance{" "}
                    <span className="font-semibold">
                      cost containment with quality care
                    </span>
                    .
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: { marginBottom: "1rem", border: "none" },
            },
            {
              key: "4",
              label: "Inequality in Healthcare Access",
              children: (
                <ul className="list-disc pl-5 text-md text-gray-600 space-y-2">
                  <li>
                    <span className="font-semibold">
                      Low-income and uninsured individuals
                    </span>{" "}
                    suffer the most from affordability issues.
                  </li>
                  <li>
                    Geographic disparities exist—rural populations often have{" "}
                    <span className="font-semibold">
                      fewer affordable healthcare options
                    </span>
                    .
                  </li>
                </ul>
              ),
              className: "bg-[#032237] border-0 rounded-lg mb-4",
              style: { marginBottom: "1rem", border: "none" },
            },
          ]}
        />
      </div>

      <div className="container">
        <div className="flex items-center gap-3 mb-5">
          <Image
            src={titleLogo3}
            alt="Consequences"
            width={50000}
            height={50000}
            className="w-20 h-20 object-contain rounded-lg"
          />
          <p className="text-3xl font-bold bg-gradientBg p-4 rounded-2xl text-secondary">
            How Can HC Financial Consultants Help?
          </p>
        </div>

        {lastSectionData?.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 items-center mx-10 my-8 border-4 border-[#b99755] rounded-2xl p-4"
          >
            <div className="w-14 h-14 bg-secondary rounded-full">
              <p className="h-14 w-14 flex justify-center items-center text-xl text-white font-bold">
                {item?.id}
              </p>
            </div>
            <div className="w-full">
              <p className="w-full">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

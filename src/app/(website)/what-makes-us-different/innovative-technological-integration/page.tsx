const page = () => {
  return (
    <div className="h-screen">
      <div className="h-[150px] flex items-center justify-center bg-gradientBg">
        <h1 className="text-2xl font-bold">
          Innovative Technological Integration
        </h1>
      </div>
      <div className="container my-20">
        <p className="mt-5 text-xl my-5">
          Leveraging advanced technologies, such as data analytics and AI, to
          enhance financial strategies and operational processes showcases HC
          Financials’ commitment to cutting-edge solutions.
        </p>
        <div className="text-xl">
          <ol className="list-decimal pl-10">
            <li>
              <span className="font-bold text-[#032237]">
                Automation & Efficiency Gains:
              </span>{" "}
              Implemented automated financial reporting systems for healthcare
              organizations, reducing manual processing time by 40% and
              improving accuracy.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Leveraging Data-Driven Approach:
              </span>{" "}
              Proven track record of leveraging AI-driven analytics to optimize
              revenue cycle management, increasing collections by 25% while
              reducing claim denials by 15%.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Compliance & Security Enhancements:
              </span>{" "}
              Led the adoption of cloud-based financial platforms, ensuring
              HIPAA compliance while streamlining multi-site financial
              operations.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Tech-Enabled Cost Savings:
              </span>{" "}
              Successfully integrated predictive analytics in cost-containment
              strategies, reducing hospital operational expenses by 20% while
              maintaining high-quality patient care.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;

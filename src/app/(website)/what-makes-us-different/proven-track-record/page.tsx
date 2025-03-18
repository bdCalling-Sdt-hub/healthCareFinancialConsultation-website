const page = () => {
  return (
    <div className="h-screen">
      <div className="h-[150px] flex items-center justify-center bg-gradientBg">
        <h1 className="text-2xl font-bold">Proven Track Record</h1>
      </div>
      <div className="container my-20">
        <p className="mt-5 text-xl my-5">
          A history of successful engagements and measurable outcomes
          demonstrates the firm&apos;s capability to drive sustainable
          improvements for healthcare organizations.
        </p>
        <div className="text-xl">
          <ol className="list-decimal pl-10">
            <li>
              <span className="font-bold text-[#032237]">
                Consistency & Impact:
              </span>{" "}
              HC Financial have over 10 years of delivering sustainable
              cost-saving strategies for hospitals, reducing operational costs
              by 20% without compromising patient care.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Utilizing Data & KPIs:
              </span>{" "}
              HC Financial has successfully led financial restructuring for
              multiple healthcare organizations, improving cash flow by $10M+
              annually.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Healthcare Finance:
              </span>{" "}
              HC Financial have a proven track record of optimizing revenue
              cycle management, increasing collections by 25% while reducing
              denials by 15%.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Align with Industry Challenges:
              </span>{" "}
              HC Financial have extended expertise in navigating value-based
              care reimbursements, helping clients increase Medicare
              reimbursement rates by 30%
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;

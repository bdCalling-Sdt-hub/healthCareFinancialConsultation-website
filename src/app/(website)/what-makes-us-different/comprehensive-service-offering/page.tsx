const page = () => {
  return (
    <div className="h-screen">
      <div className="h-[150px] flex items-center justify-center bg-gradientBg">
        <h1 className="text-2xl font-bold">Comprehensive Service Offering</h1>
      </div>
      <div className="container my-20">
        <p className="mt-5 text-xl my-5">
          HC Financial provides a full spectrum of services—from strategic
          financial planning to operational efficiency improvements—allows the
          firm to address diverse client needs effectively. This approach
          ensures that our clients can access all necessary services under one
          umbrella, enhancing convenience and fostering stronger business
          relationships. Key components of our comprehensive service offering
          include….
        </p>
        <div className="text-xl">
          <ol className="list-decimal pl-10">
            <li>
              <span className="font-bold text-[#032237]">
                Full Range of Services:
              </span>{" "}
              Providing an extensive suite of services that address various
              aspects of client needs ranging from Cost Containment through to
              Financial Planning.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Bundled Packages:
              </span>{" "}
              Offering curated combinations of services that provide our clients
              with integrated solutions. Bundled services often come at a
              discounted rate compared to purchasing each service individually,
              adding value for our client. Please contact us for more
              information.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Customization and Flexibility:
              </span>{" "}
              Tailoring services to meet the specific requirements for each of
              our clients, allowing flexibility in service delivery and the
              ability to adapt to changing client needs.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Integrated Support Systems:
              </span>{" "}
              Ensuring that all services are supported by robust customer
              service and support systems, providing clients with seamless
              assistance across all service areas.
            </li>
            <li>
              <span className="font-bold text-[#032237]">
                Consistent Quality Assurance:
              </span>{" "}
              Maintaining high standards across all services offered, ensuring
              that each component of the service offering meets the
              company&apos;s quality benchmarks and client expectations.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;

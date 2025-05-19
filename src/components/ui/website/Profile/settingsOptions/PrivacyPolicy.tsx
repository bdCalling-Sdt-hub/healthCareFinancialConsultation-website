import { useGetPrivacyPolicyQuery } from "@/redux/apiSlices/publicSlice";
import { Spin } from "antd";

const PrivacyPolicy = () => {
  const { data: privacyPolicyData, isLoading } =
    useGetPrivacyPolicyQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const privacyPolicyDataContent = privacyPolicyData?.data?.content;

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradientBg text-transparent bg-clip-text">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <div dangerouslySetInnerHTML={{ __html: privacyPolicyDataContent }} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

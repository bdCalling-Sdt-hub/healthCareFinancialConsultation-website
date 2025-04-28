import { useRouter } from "next/navigation";

const LogOut = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authenticationToken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("authenticationToken");
    sessionStorage.removeItem("refreshToken");

    router.push("/login");
  };

  return (
    <div className="border border-[#032237] p-6 rounded-2xl flex flex-col items-center">
      <h1 className="text-2xl">Are You Sure You Want To Logout?</h1>
      <div className="flex gap-4 my-6">
        <button
          onClick={() => handleLogout()}
          className="bg-gradientBg py-2 rounded-xl shadow-lg font-bold px-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogOut;

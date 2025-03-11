const LogOut = () => {
  return (
    <div className="border border-[#032237] p-6 rounded-2xl flex flex-col items-center">
      <h1 className="text-2xl">Are You Sure You Want To Logout?</h1>
      <div className="flex gap-4 my-6">
        <button className="bg-gradientBg py-2 rounded-xl shadow-lg font-bold px-6">
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogOut;

const DeleteAccount = () => {
  return (
    <div>
      <h1 className="border border-[#032237] p-6 font-semibold rounded-2xl">
        Close your account <br /> Once you delete your account, there’s no going
        back. Please be certain!
      </h1>
      <div className="flex justify-end gap-4 my-6">
        <button className="bg-gradientBg py-2 rounded-xl shadow-lg font-bold px-6">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;

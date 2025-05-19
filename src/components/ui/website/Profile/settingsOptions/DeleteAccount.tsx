import { useState } from "react";
import { useDeleteUserProfileMutation } from "@/redux/apiSlices/authSlice";
import toast from "react-hot-toast";
import { Input, Modal } from "antd";

const DeleteAccount = () => {
  const [deleteAccount] = useDeleteUserProfileMutation();
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPassword("");
  };

  const handleDelete = async () => {
    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await deleteAccount({ password }).unwrap();

      if (response?.success) {
        toast.success(response?.message);
        setIsModalOpen(false);
        // Additional logic for redirecting user after successful deletion
      } else {
        toast.error(response?.message || "Failed to delete account");
      }
    } catch (error: any) {
      console.error("Error deleting account:", error);
      toast.error(error?.data?.message || "Failed to delete account");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="border border-[#032237] p-6 font-semibold rounded-2xl">
        Close your account <br /> Once you delete your account, there&apos;s no
        going back. Please be certain!
      </h1>
      <div className="flex justify-end gap-4 my-6">
        <button
          onClick={showModal}
          className="bg-red-500 text-white py-2 rounded-xl shadow-lg font-bold px-6 hover:bg-red-600"
        >
          Delete Account
        </button>
      </div>

      <Modal
        title="Confirm Account Deletion"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="py-4">
          <p className="mb-4">
            For security reasons, please enter your password to confirm account
            deletion:
          </p>
          <Input.Password
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={handleCancel}
              className="border border-gray-300 py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded-lg disabled:bg-red-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Confirm Delete"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteAccount;

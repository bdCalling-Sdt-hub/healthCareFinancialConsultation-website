import React, { useState, useEffect } from "react";
import Image from "next/image";
import Select from "react-select";
import stateLogo from "@/assets/Vector.png";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/apiSlices/authSlice";
import toast from "react-hot-toast";

const stateOptions = [
  {
    value: "California",
    label: (
      <div className="flex items-center gap-2">
        <Image
          src={stateLogo}
          alt="California"
          width={245450}
          height={2354350}
          className="w-16 h-10"
        />
      </div>
    ),
  },
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "Arizona", label: "Arizona" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "California", label: "California" },
  { value: "Colorado", label: "Colorado" },
  { value: "Connecticut", label: "Connecticut" },
  { value: "Delaware", label: "Delaware" },
  { value: "Florida", label: "Florida" },
  { value: "Georgia", label: "Georgia" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Idaho", label: "Idaho" },
  { value: "Illinois", label: "Illinois" },
  { value: "Indiana", label: "Indiana" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Maine", label: "Maine" },
  { value: "Maryland", label: "Maryland" },
  { value: "Massachusetts", label: "Massachusetts" },
  { value: "Michigan", label: "Michigan" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "Nevada", label: "Nevada" },
  { value: "New Hampshire", label: "New hampshire" },
  { value: "New Jersey", label: "New jersey" },
  { value: "New Mexico", label: "New mexico" },
  { value: "New York", label: "New york" },
  { value: "North Carolina", label: "North carolina" },
  { value: "North Dakota", label: "North dakota" },
  { value: "Ohio", label: "Ohio" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "Oregon", label: "Oregon" },
  { value: "Pennsylvania", label: "Pennsylvania" },
  { value: "Rhode Island", label: "Rhode island" },
  { value: "South Carolina", label: "South carolina" },
  { value: "South Dakota", label: "South dakota" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Texas", label: "Texas" },
  { value: "Utah", label: "Utah" },
  { value: "Vermont", label: "Vermont" },
  { value: "Virginia", label: "Virginia" },
  { value: "Washington", label: "Washington" },
  { value: "West Virginia", label: "West virginia" },
  { value: "Wisconsin", label: "Wisconsin" },
  { value: "Wyoming", label: "Wyoming" },
];

const CustomDropdown = () => {
  const { data: userData } = useGetUserProfileQuery(undefined);
  const [updateProfile] = useUpdateUserProfileMutation();

  // Find the user's state in stateOptions or default to first option
  const userState =
    stateOptions.find((option) => option.value === userData?.data?.location) ||
    stateOptions[0];
  const [selectedState, setSelectedState] = useState(userState);

  useEffect(() => {
    if (userData?.data?.location) {
      const userState =
        stateOptions.find(
          (option) => option.value === userData.data.location
        ) || stateOptions[0];
      setSelectedState(userState);
    }
  }, [userData?.data?.location]);

  const handleStateChange = async (selectedOption: any) => {
    if (selectedOption) {
      setSelectedState(selectedOption);

      const formData = new FormData();
      const data = {
        ...userData?.data,
        location: selectedOption.value,
      };

      formData.append("data", JSON.stringify(data));

      try {
        const res = await updateProfile(formData);
        if (res?.data?.success) {
          toast.success(res?.data?.message || "Location updated successfully!");
        } else {
          toast.error(res?.data?.message || "Failed to update location!");
        }
      } catch (error) {
        console.error("Failed to update location:", error);
      }
    }
  };

  return (
    <Select
      options={stateOptions}
      value={selectedState}
      onChange={handleStateChange}
      formatOptionLabel={(option) => option.label}
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "transparent",
          border: "none",
          width: "100%",
          boxShadow: "none",
          cursor: "pointer",
          color: "white",
        }),
        option: (provided, state) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: state.isSelected ? "#032237" : "white",
          color: state.isSelected ? "white" : "black",
          cursor: "pointer",
        }),
        singleValue: (provided) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
          gap: "1px",
          color: "white",
        }),
      }}
    />
  );
};

export default CustomDropdown;

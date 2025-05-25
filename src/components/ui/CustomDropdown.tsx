import React, { useState, useEffect } from "react";
import Image from "next/image";
import Select from "react-select";
import stateLogo from "@/assets/Vector.png";
import stateArrow from "@/assets/Group 1707478307.png";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/apiSlices/authSlice";
// import toast from "react-hot-toast";

const stateOptions = [
  {
    value: "California",
    label: (
      <div className="flex items-center">
        <Image
          src={stateLogo}
          alt="California"
          width={245450}
          height={2354350}
          className="w-[80px] h-12"
        />
        <Image
          src={stateArrow}
          alt="California"
          width={245450}
          height={2354350}
          className="w-9"
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
        await updateProfile(formData);
        // if (res?.data?.success) {
        //   toast.success(res?.data?.message || "Location updated successfully!");
        // } else {
        //   // Type-safe error check
        //   if (
        //     res?.error &&
        //     "data" in res.error &&
        //     (res.error.data as { message?: string })?.message ===
        //       "Token not found!"
        //   ) {
        //     toast.error("Please login before setting a location");
        //   } else {
        //     toast.error(res?.data?.message || "Failed to update location!");
        //   }
        // }
      } catch (error) {
        console.error("Failed to update location:", error);
        // toast.error("An error occurred while updating location");
      }
    }
  };

  return (
    <Select
      options={stateOptions}
      value={selectedState}
      onChange={handleStateChange}
      formatOptionLabel={(option) => option.label}
      className="state-dropdown"
      classNamePrefix="state-select"
      isSearchable={true}
      placeholder="Select your state..."
      components={{
        DropdownIndicator: () => null,
      }}
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          color: "white",
        }),
        option: (provided, state) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
          padding: "10px 16px",
          gap: "8px",
          backgroundColor: state.isSelected
            ? "#032237"
            : state.isFocused
            ? "rgba(3, 34, 55, 0.1)"
            : "white",
          color: state.isSelected ? "white" : "#032237",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
          "&:hover": {
            backgroundColor: state.isSelected
              ? "#032237"
              : "rgba(3, 34, 55, 0.1)",
          },
        }),
        singleValue: (provided) => ({
          ...provided,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
          fontWeight: 500,
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          zIndex: 9999,
        }),
        menuList: (provided) => ({
          ...provided,
          padding: "8px 0",
          maxHeight: "250px",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: "rgba(255, 255, 255, 0.7)",
        }),
        input: (provided) => ({
          ...provided,
          color: "white",
        }),
      }}
    />
  );
};

export default CustomDropdown;

import React, { useState } from "react";
import { useStepperContext } from "../../context/StepperContext";

const CollegeNameForm = () => {
  const {
    updateFormData,
    setErrors,
    errors,
    formData: { collegeName },
  } = useStepperContext();

  const handleChange = (e) => {
    const { value } = e.target;
    updateFormData({ collegeName: value });

    // Clear any previous errors on user input
    setErrors((prev) => ({ ...prev, collegeName: "" }));
  };

  const handleBlur = () => {
    if (!collegeName.trim()) {
      setErrors((prev) => ({
        ...prev,
        collegeName: "College Name is required.",
      }));
    } else if (collegeName.trim().length < 3) {
      setErrors((prev) => ({
        ...prev,
        collegeName: "College Name must be at least 3 characters.",
      }));
    } else {
      // If no error, update the form data
      updateFormData({ collegeName });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="collegeName"
        className="font-medium text-[18px] md:text-[25px] leading-[18px] md:leading-[25.06px]"
      >
        College Name
      </label>
      <input
        id="collegeName"
        type="text"
        placeholder="Enter your college name"
        value={collegeName}
        onChange={handleChange}
        onBlur={handleBlur}
        className="md:w-[648.05px] placeholder-[#929090] border-b-[#313030] border-b p-2 outline-none bg-transparent focus:bg-transparent active:bg-transparent"
        autoComplete="off"
        required
      />
      {errors.collegeName && (
        <p className="text-red-500 mt-2 text-sm">{errors.collegeName}</p>
      )}
    </div>
  );
};

export default CollegeNameForm;

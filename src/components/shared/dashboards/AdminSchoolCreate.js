import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  mobile: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be 10 digits" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  dob: z.string().refine((date) => new Date(date) <= new Date(), {
    message: "Date of Birth cannot be in the future",
  }),
});

const AdminSchoolCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <form
      className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-30px gap-y-15px mb-15px">
        <div>
          <label className="mb-3 block font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
            type="text"
            id="name"
            {...register("name")}
            placeholder="Enter your name"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-3 block font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-3 block font-semibold" htmlFor="mobile">
            Mobile
          </label>
          <input
            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
            type="text"
            id="mobile"
            {...register("mobile")}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && (
            <p style={{ color: "red" }}>{errors.mobile.message}</p>
          )}
        </div>
        <div>
          <label className="mb-3 block font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <div>
          <label className="mb-3 block font-semibold" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
            type="date"
            id="dob"
            {...register("dob")}
          />
          {errors.dob && <p style={{ color: "red" }}>{errors.dob.message}</p>}
        </div>
      </div>
      <ButtonPrimary type="submit">Submit</ButtonPrimary>
    </form>
  );
};

export default AdminSchoolCreate;

import React from "react";
import { useForm } from "react-hook-form"; // Importing react-hook-form for managing form state
import { FaPhoneAlt } from "react-icons/fa"; // Icons used for contact details
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import logo from "../images/logo.png";
import emailjs from "@emailjs/browser";

function Contact() {
  //initialize the useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  //register to register input fields
  //handle submit to handle form submission
  //reset to reset the form after submission
  //to manage form state (errors , submission status)

  const onSubmit = (data) => {
    const serviceID = "service_tq1zpef";
    const templateID = "template_5yftouj";
    const publicKey = "MPPq5TYGvoeL3ul2n";

    emailjs.send(serviceID, templateID, data, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        reset();
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };
  // onSubmission Function called on successful form submission
  //reset() clears form field
  return (
    <div className="min-h-screen w-full py-8 m-0 bg-white">
      <div className="grid place-items-center md:grid-cols-2 gap 8 ">
        {/* form starts here */}
        <div className="md:w-2/3 ">
          <h2 className="md:text-center text-xl py-5  text-gray-800 font-semibold">
            Customized Message
          </h2>
          {/* Show success message after submission */}
          {isSubmitSuccessful && (
            <p className="text-green-600 mb-4">
              Message sent successfully. We'll get back to you!
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 m-10">
            {/* name field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[rgb(1,53,1)] outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            {/*email field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[rgb(1,53,1)] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[rgb(1,53,1)] outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-[rgb(1,53,1)] text-white rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Details Section */}
        <div className="m-2 md:w-1/2 ">
          <h2 className="text-xl  text-gray-800 m-5 font-semibold md:text-center">
            Reach Me
          </h2>
          <div className="min-w-full ">
            <div className="flex items-center space-x-4 text-gray-700 text-lg m-5">
              <div>
                <MdEmail className="text-blue-500 text-2xl" />
              </div>
              <p>artaliscreativespace@outlook.com</p>
            </div>
            {/* Location */}
            <div className="flex items-center space-x-4 text-gray-700 text-lg m-5">
              <div>
                <IoLocation className="text-red-500 text-2xl" />
              </div>
              <p>Nairobi, Kenya</p>
            </div>
            <div></div>

            {/* Phone */}
            <div className="flex items-center space-x-4 text-gray-700 text-lg m-5 ">
              <div>
                <FaPhoneAlt className="text-green-600 text-2xl" />
              </div>
              <p>+254703197935</p>
            </div>
          </div>
          <div className=" flex mx-2 p-2 justify-center items-center ">
            <img src={logo} alt="logo" className="h-24 w-24 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

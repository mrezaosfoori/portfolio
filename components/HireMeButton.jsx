"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import emailjs from "emailjs-com";
import { FileUpload } from "./ui/file-upload";
import { toast } from "react-toastify";

const HireMeButton = () => {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    // EmailJS parameters
    const serviceId = "service_i93aeh7";
    const templateId = "template_rx72bgh";
    const userId = "9FwXOZIOyT70AW4Gr";

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        userId
      );
      toast.success("Your message has been sent successfully. I will get back to you soon.");

      formRef.current.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("FAILED...", error);
    }
  };

  return (
    <Popup
      trigger={
        <button className="bg-blue-400 border-[4px] border-blue-400 text-white px-6 py-3 rounded-xl text-[18px] hover:bg-transparent hover:text-blue-400 transition">
          Hire Me
        </button>
      }
      modal
      nested
      closeOnDocumentClick={true}
    >
      <div
        style={{
          width: "400px",
          zIndex: 9999,
          backgroundColor: "white",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          borderRadius: 16,
        }}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <label className="text-black">Your Email</label>
          <input
            className="border border-black bg-white p-2 text-black"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label className="text-black">Message</label>
          <textarea
            className="border border-black bg-white p-2 text-black"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <FileUpload name="files" onChange={setValue} />

          <button
            type="submit"
            className="bg-blue-200 border-[4px] border-blue-200 text-white px-6 py-3 rounded-xl text-[18px] hover:bg-transparent hover:text-blue-200 transition mt-8"
          >
            Send
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default HireMeButton;

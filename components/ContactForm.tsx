"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import CustomCard from "./ui/custom-card";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div 
     className="w-[850px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[850px] mx-auto my-16"
     style={{
       background:
         "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
     }}>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-bold text-xl text-neutral-200">Contact</h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Let’s Discuss Your Project
        </p>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

      <div className="flex flex-row-reverse gap-8">
        <form className=" flex-1" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Phone Number</Label>
            <Input id="mobile" placeholder="09373765646" type="number" />
          </LabelInputContainer>

          <LabelInputContainer>
              <Label htmlFor="Message">Last name</Label>
              <textarea name="message" id="message" className="min-h-[200px]  flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm"></textarea>
            </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative mt-4 group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit Message
            <BottomGradient />
          </button>
        </form>

        <div className="flex-1 flex flex-col gap-4 items-center">
          <CustomCard
            src="/icons/phone.svg"
            title="phone"
            decription="09373765646"
          />
          <CustomCard
            src="/icons/email.svg"
            title="email"
            decription="mohammadreza.osfuri@gmail.com"
          />
          <CustomCard
            src="/icons/location.svg"
            title="phone"
            decription="tehran-delavaran"
          />
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

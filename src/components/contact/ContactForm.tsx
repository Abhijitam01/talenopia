"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </>
  );
};

const SelectInput = ({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  const radius = 100;
  const [visible, setVisible] = useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        #c8102e,
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <select
        className={cn(
          `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           group-hover/input:shadow-none transition duration-400 appearance-none`,
          className
        )}
        {...props}
      >
        {children}
      </select>
    </motion.div>
  );
};

const TextAreaInput = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const radius = 100;
  const [visible, setVisible] = useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        #c8102e,
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <textarea
        className={cn(
          `flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           group-hover/input:shadow-none transition duration-400`,
          className
        )}
        {...props}
      />
    </motion.div>
  );
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Get in Touch
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Tell us about your project or requirement. We&apos;ll get back to you within 48 hours.
      </p>

      {submitted ? (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 font-medium text-center">
          Thank you! Your request has been received. We will respond shortly.
        </div>
      ) : (
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" placeholder="John Doe" type="text" required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Acme Inc." type="text" />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" placeholder="you@company.com" type="email" required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" />
            </LabelInputContainer>
          </div>
          
          <LabelInputContainer className="mb-4">
            <Label htmlFor="type">Requirement Type</Label>
            <div className="relative">
              <SelectInput id="type">
                <option>IT Resource Augmentation</option>
                <option>Non-IT Resource Augmentation</option>
                <option>Specialized Talent Requirement</option>
                <option>Engagement Model Discussion</option>
                <option>General Business Inquiry</option>
              </SelectInput>
            </div>
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <TextAreaInput 
              id="message" 
              placeholder="Share your requirement, preferred timeline, and expected team composition." 
              rows={5}
              required
            />
          </LabelInputContainer>

          <button
            className="bg-black dark:bg-zinc-800 relative group/btn block w-full text-white rounded-md h-10 font-bold shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
            type="submit"
          >
            Submit Request &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          
          <div className="text-center text-xs text-neutral-500">
             By submitting this form, you agree to our privacy policy.
          </div>
        </form>
      )}
    </div>
  );
}

"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface FormFields extends FieldValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormFields>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("data", data);
    fetch("/api/send-email", { method: "POST", body: JSON.stringify(data) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <div className="flex w-full flex-1 gap-8">
        <Input
          label="Name"
          {...register("name", { required: "Enter you full name" })}
          error={errors.name?.message}
          control={control}
        />
        <Input
          label="Email"
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email",
            },
          })}
          control={control}
          error={errors.email?.message}
        />
      </div>
      <Input
        label="Message"
        {...register("message", {
          required: "Enter a message",
        })}
        control={control}
        error={errors.message?.message}
      />
      <Button label="Submit" color="primary" />
    </form>
  );
};

export default ContactForm;

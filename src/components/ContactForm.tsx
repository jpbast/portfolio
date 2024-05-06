'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface FormFields extends FieldValues {
  name: string;
  email: string;
  message: string;
}

type ContactForm = {
  color?: 'primary' | 'secondary';
};

const ContactForm: React.FC<ContactForm> = ({ color = 'primary' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormFields>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    fetch('/api/send-email', { method: 'POST', body: JSON.stringify(data) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-1 flex-col gap-6">
      <div className="flex w-full flex-1 gap-6 max-lg:flex-col">
        <Input
          label="Name"
          {...register('name', { required: 'Enter you full name' })}
          error={errors.name?.message}
          control={control}
          color={color}
        />
        <Input
          label="Email"
          {...register('email', {
            required: 'Enter your email',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Enter a valid email',
            },
          })}
          control={control}
          error={errors.email?.message}
          color={color}
        />
      </div>
      <TextArea
        label="Message"
        {...register('message', {
          required: 'Enter a message',
        })}
        control={control}
        error={errors.message?.message}
        rows={4}
        color={color}
      />
      <Button label="Submit" color={color} className="max-w-[300px] max-[500px]:max-w-none" />
    </form>
  );
};

export default ContactForm;

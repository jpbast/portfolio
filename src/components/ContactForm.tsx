'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface FormFields extends FieldValues {
  name: string;
  email: string;
  message: string;
}

type ContactForm = {
  color?: 'primary' | 'secondary';
};

const ContactForm: React.FC<ContactForm> = ({ color = 'primary' }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormFields>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      setError(false);
      setLoading(true);
      await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(data) });
      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`relative flex w-full flex-1 flex-col gap-6 transition-all duration-300 ${submitted ? 'max-h-[200px] translate-x-full opacity-0' : ''}`}
      >
        <div className={`flex w-full flex-1 gap-6 ${submitted ? '' : 'max-lg:flex-col'}`}>
          <Input
            label="Name"
            {...register('name', { required: 'Enter you full name' })}
            error={errors.name?.message}
            control={control}
            color={color}
            disabled={submitted || loading}
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
            disabled={submitted || loading}
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
          disabled={submitted || loading}
        />
        <Button
          label="Submit"
          color={color}
          className="max-w-[300px] max-[500px]:max-w-none"
          disabled={submitted || loading}
          loading={loading}
        />
        {error && (
          <p
            className={`${color === 'primary' ? 'text-text-primary' : 'text-text-secondary'} flex items-center justify-start gap-1 text-xl font-semibold`}
          >
            <IoIosCloseCircleOutline size={32} color="red" /> Oops! Try sending your message again
          </p>
        )}
      </form>
      <div
        className={`absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-3xl p-4 opacity-0 shadow-lg transition-all duration-300 ${submitted ? 'opacity-100' : '-translate-x-full opacity-0'}`}
      >
        <IoCheckmarkCircleOutline color="green" size={100} />
        <p
          className={`${color === 'primary' ? 'text-text-primary' : 'text-text-secondary'} text-center text-xl font-semibold`}
        >
          Thanks for your message! <br /> I'll reply as soon as I can.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;

import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInput } from '../molecules/FormInput';

export type RegistrationFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
};

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

export const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const onSubmit = handleSubmit(data => {
    console.log('submitting...', data);
  });

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <FormInput<RegistrationFormFields>
        id="firstName"
        name="firstName"
        placeholder="리나테스트1"
        register={register}
        rules={{ required: 'You must enter your first name.' }}
        errors={errors}
      />

      <FormInput<RegistrationFormFields>
        id="lastName"
        name="lastName"
        placeholder="리나테스트2"
        register={register}
        rules={{ required: 'You must enter your last name.' }}
        errors={errors}
      />

      <FormInput<RegistrationFormFields>
        id="email"
        name="email"
        placeholder="Email Address"
        register={register}
        rules={{
          required: 'You must enter your email address.',
          pattern: emailPattern,
        }}
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

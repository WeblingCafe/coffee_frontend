// import React, { FC } from 'react';
// import { useForm } from 'react-hook-form';
// import { FormInput } from '../molecules/FormInput';

// export type RegistrationFormFields = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };

// export const emailPattern = {
//   value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
//   message: 'Enter a valid email address.',
// };

// export const RegistrationForm: FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<RegistrationFormFields>();

//   const onSubmit = handleSubmit(data => {
//     console.log('submitting...', data);
//   });

//   return (
//     <form onSubmit={onSubmit}>
//       <FormInput
//         id="firstName"
//         type="text"
//         name="firstName"
//         label="First Name"
//         placeholder="First Name"
//         className="mb-2"
//         register={register}
//         // rules={{ required: 'You must enter your first name.' }}
//         errors={errors}
//       />

//       <FormInput
//         id="lastName"
//         type="text"
//         name="lastName"
//         label="Last Name"
//         placeholder="Last Name"
//         className="mb-2"
//         register={register}
//         // rules={{ required: 'You must enter your last name.' }}
//         errors={errors}
//       />

//       <FormInput
//         id="email"
//         type="email"
//         name="email"
//         label="Email Address"
//         placeholder="Email Address"
//         className="mb-2"
//         register={register}
//         // rules={{
//         //   required: 'You must enter your email address.',
//         //   pattern: emailPattern,
//         // }}
//         errors={errors}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// components/organisms/ContactForm.tsx
import React from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import FormInput from '../molecules/FormInput';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};
const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data, errors);
  };
  console.log('error1', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="firstName"
        register={register}
        rules={{ required: 'You must enter your last name.' }}
        errors={errors}
      />
      <FormInput name="lastName" register={register} errors={errors} />
      <FormInput name="email" required={true} register={register} errors={errors} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;

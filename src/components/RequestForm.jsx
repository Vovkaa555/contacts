import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  StyledRequestForm,
  StyledTitle,
  StyledInputInfo,
  StyledNameError,
  StyledMailError,
  StyledInputMultiline,
  StyledMessageError,
  StyledSubmit,
  StyledSubmitedMessage,
} from './RequestFormStyles';

function RequestForm() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  return (
    <StyledRequestForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>
        <p>Reach out to us!</p>
      </StyledTitle>
      <StyledInputInfo
        type="text"
        placeholder="Your name*"
        {...register('userName', {
          required: true,
          minLength: 2,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.userName && <StyledNameError>Enter your name (min 2-20 letters).</StyledNameError>}
      <StyledInputInfo
        type="text"
        placeholder="Your e-mail*"
        {...register('userEmail', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      {errors.userEmail && <StyledMailError>Invalid email.</StyledMailError>}
      <StyledInputMultiline
        type="textarea"
        placeholder="Your message*"
        {...register('userMessage', {
          required: true,
          minLength: 5,
          maxLength: 1000,
        })}
      />
      {errors.userMessage && (
        <StyledMessageError>Enter your message ( 5-1000symbols).</StyledMessageError>
      )}
      <StyledSubmit type="submit" value="Send message" />
      {isAlertVisible && <StyledSubmitedMessage>Form sended successfully!</StyledSubmitedMessage>}
    </StyledRequestForm>
  );
}

export default RequestForm;

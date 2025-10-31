"use client"

import { createRef, useState } from "react";
import { useForm } from "react-hook-form";


export default function Subscription_Form() {

    const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data.Email);
    const res = await fetch("/api/subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
      console.log(res);
    if (res.ok) {
      setStatus("Subscription Complete successfully! 🎉");
      reset();
    } else {
      setStatus("Failed to send ❌");
    }
  };


    return (
        <>
           <div className='flex items-center justify-between gap-3  overflow-hidden w-full max-w-md'>
                <form className='bg-white rounded-full flex' onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className='flex-1 px-6 py-3 text-sm text-gray-500 outline-none  rounded-full'
                    type='email'
                    placeholder='Your E-Mail'
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <button type='submit' className='bg-brand-color-1 text-white w-35 cursor-pointer font-bold px-6 py-3 rounded-full transition-all'>
                    Subscribe
                  </button>
                </form>
              </div>
              {status && ( <p className='text-sm text-brand-color-3 mt-4'>{status}</p>)}
        </>
    );
}

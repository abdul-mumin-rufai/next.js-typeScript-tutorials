'use client'
import React from 'react'
import { createUser } from '@/utils/actions';

const FormInput = () => {
    
    return (
        <form action={createUser} className={formStyle}>
            <h1 className='mt-4 font-bold capitalize'>
                create user
            </h1>
            <input
                type="text"
                name='firstName'
                required
                defaultValue='Abdul-Mumin'
                className={inputStyle}
            />
            <input
                type="text"
                name='lastName'
                required
                defaultValue='Rufai'
                className={inputStyle}
            />
            <button type='submit' className={btnStyle}>
                submit
            </button>
        </form>
    )
};

export default FormInput;
const formStyle ='flex flex-col gap-4 w-full max-w-sm mx-auto my-8 p-6 bg-white rounded shadow-md';
const inputStyle = 'border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
const btnStyle =
  'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
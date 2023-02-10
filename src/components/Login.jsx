import React from 'react'
import { LoginImg } from '../assets/images'

export default function Login() {
  return (
        <div className='grid grid-flow-cols-1 sm:grid-cols-2 h-screen w-full'>

      <div className='hidden sm:block'>
        <img classname='w-full h-full object-cover'src={LoginImg} alt="" />
      </div>
      
      <div className='bg-gray-100 flex flex-col justify-center'>
      <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
        <p className='text-2xl font-semibold my-2'>Hi, Selamat Datang Kembali!</p>
        <p className='text-gray-400 my-2'>Senang bertemu Anda lagi, silahkan login disini</p>
        <div className='flex flex-col py-2'>
            <label>NPM</label>
            <input className='border p-2' type="text"/>
        </div>
        <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='border p-2' type="password"/>
        </div>

        <div className='flex justify-between'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" />Ingat Saya</p>
            <p>Buat Akun</p>
        </div>

        <button className='border w-full my-8 py-2 bg-red-700 text-white'>Masuk</button>
      </form>
      </div>
    </div>
  )
}

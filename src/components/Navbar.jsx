import React, {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    // START container 
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>

        {/* START container navbar */}
    <div className='px-2 flex justify-between items-center w-full h-full bg-red-700'>
        <div className='flex items-center'>
            <h1 className='font-bold text-2xl text-white ml-4 sm:text-3xl'>SKRIPSI-UST</h1>
        </div>
        <div className='hidden md:flex pr-4 text-white'>
        <ul className='hidden md:flex'> 
            <li>Kategori</li>
            <li>Pemilik</li>
            <li>Panduan</li>
        </ul>
        <div className='mx-4 my-1'>
        <button className='bg-transparent text-white px-6 py-2 mr-1 rounded-full'>Masuk</button>
        <button className='px-6 py-2 rounded-full'>Yuk Baca</button>
    </div>
        </div>
       
        {/* END container Navbar */}

        {/* START container navbar mobile */}
        <div className='md:hidden' onClick={handleClick}>
            {!nav ? <Bars3Icon className='w-6 stroke-white'/> : <XMarkIcon className='w-6 stroke-white'/>}
        </div>

    </div>
    <ul className={!nav ? 'hidden' : 'absolute bg-red-700 w-full px-8 border-'}>
    <li className='border-b-2 border-red-800 w-full text-white'>Kategori</li>
    <li className='border-b-2 border-red-800 w-full text-white'>Pemilik</li>
    <li className='border-b-2 border-red-800 w-full text-white'>Panduan</li>
    <div className='flex flex-col my-4'>
        <button className='bg-transparent text-white px-8 py-3 mb-4'>Masuk</button>
        <button className='px-8 py-3'>Yuk Baca</button>
    </div>
    </ul>
    {/* END container navbar mobile */}
</div>
// END container
  )
}


export default Navbar



import React from 'react'
import { Landing2 } from '../assets/iconComponent'
// import { Ebook } from '../assets'



const Hero = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

            {/* START container gambar 1 */}
            <div>
                <Landing2 className='w-full' width={330} height={250}/>
            </div>
            {/* END container gambar 1 */}
            
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p1 className='text-3xl md:text-5xl font-quicksand font-bold '>Selamat Datang Di Skripsi-UST </p1>  
                <h1 className='py-2 text-1xl md:text-1xl mt-6 font-quicksand font-medium'>"Menyesali nasib tidak 
                akan mengubah keadaan. Terus berkarya dan bekerjalah yang membuat kita berharga"
                </h1>
                
                {/* START container button 'Yuk Baca' */}
                <div className='flex flex-col w-40'>
                <button className='py-4 px-8 sm:w[60%] text-center mt-1 bg-red-700 font-quicksand font-bold text-white rounded-full'>Yuk Baca</button>
                </div>
                {/* START container button 'Yuk Baca' */}
            </div>
            <div>
              <p></p>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
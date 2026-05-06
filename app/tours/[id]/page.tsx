import React from 'react'
import rufaiImg from '@/images/Rufai.png';
import Image from 'next/image';

const ToursId = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <div className=' text-4xl'>
      <h2>this is the ID: {params.id}</h2>
      <section className='flex gag-x-4 mt-4'>
        <div>
          {/*  local image */}
          <Image src={rufaiImg}
            alt='RufaiImage'
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded'
            priority
          />
          <h2 className='text-3xl font-bold'>
            Local Image
          </h2>
        </div>
      </section>
    </div>
  )
};

export default ToursId;
import React from 'react'
import rufaiImg from '@/images/Rufai.png';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const ToursId = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <div className=' text-4xl'>
      <h2>this is the ID: {params.id}</h2>
      <section className='flex gap-x-4 mt-4'>
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
        
        <div>
          {/* with the remote images we have to set the remote config in the next.config.mjs file */}
          {/* remote images */}
          <Image src={url}
            alt='image'
            width={192}
            height={192}
            priority
            className='w-48 h-48 object-cover rounded'
          />
          <h2 className='text-3xl font-bold'>
            Remote Image
          </h2>
        </div>
      </section>
    </div>
  )
};

export default ToursId;
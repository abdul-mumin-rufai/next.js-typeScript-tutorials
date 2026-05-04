import React from 'react'

const ToursId = ({ params }: { params: { id: string } }) => {
    console.log(params);
  return (
      <div className=' text-4xl'>
          <h2>this is the ID: { params.id}</h2>
    </div>
  )
}

export default ToursId;
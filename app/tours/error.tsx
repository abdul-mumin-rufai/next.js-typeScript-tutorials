'use client'

const Error = ({ error }: { error: Error }) => {
    console.log(error);
    
  return (
      <div>
          <h1 className=" font-bold text-3xl capitalize text-red-600">
              an error occried while fetching the data!!!
              check your network connection
          </h1>
    </div>
  )
}

export default Error;
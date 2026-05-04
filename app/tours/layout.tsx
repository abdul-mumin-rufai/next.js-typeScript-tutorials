const ToursLayout = ({children}:{children:React.ReactNode}) => {
  return (
      <div>
          <header className='py-2 bg-slate-500 rounded mb-4'>
              <h1 className='text-3xl text-white text-center capitalize'>
                tours layout (nested layout)
              </h1>
          </header>
          {children}
    </div>
  )
}

export default ToursLayout;
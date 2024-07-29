const Card  = ({logo, title, description}) => {
    return (
        <div className='flex justify-center items-center'>
        <div className='flex bg-white flex-col justify-center items-center h-full w-11/12   border border-solid border-borderCard rounded-3xl py-16 px-5'>
          <img src={logo} className=" w-1/2 h-auto" />
          <div className='flex flex-col  mt-11'>
            <h1 className='text-xl sm:text-2xl font-bold'>{title}</h1>
            <p className='text-lg sm:text-xl font-semibold mt-2'>
                {description}
            </p>
          </div>
        </div>
      </div>
    )
}

export default Card;
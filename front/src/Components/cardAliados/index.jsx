const CardAliados = ({logo, descripcion}) => {
    return(
        <div className=' h-full m-2 flex-shrink-0 flex justify-center items-center cursor-pointer'>
            <img className='flex justify-center items-center '  src={logo} alt={descripcion}/>
        </div>
    )
}

export default CardAliados;
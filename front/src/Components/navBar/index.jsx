import ImageLogo from '../../assets/logo_nav.webp'

function navBar () {
    return (
        <div className='w-screen'>
            <div className='p-3.5 w-full border'>
            <a href="/" class="text-2xl font-semibold text-gray-900">
                <img class="w-32 h-auto" src={ImageLogo} />
            </a>
            </div>
        </div>
    )
}

export default navBar
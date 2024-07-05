import Logo from '../../assets/logo.png'

function LogIn() {
    return (
<div className="flex flex-col items-center justify-center p-6 mx-auto lg:py-0 lg:h-screen">
      <div className="w-full mt-10 flex flex-col items-center gap-10">
        <a href="/" className="text-2xl font-semibold text-gray-900">
          <img className="w-80  h-auto" src={Logo}  alt="Logo" />
        </a>
        <div className="w-full max-w-md bg-white rounded-lg border shadow-sm">
          <div className="p-7 space-y-5">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">Ingresá a Justina.io</h1>

            <form>
              <div className="flex flex-col gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="nombre@gmail.com"
                    className="mt-1 p-3.5 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="mt-1 p-3.5 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <a href="/recuperacion" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot Password?</a>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Ingresar
                </button>
                <a
                  href="/registro"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Registrate
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LogIn;
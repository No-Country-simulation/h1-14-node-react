import React from 'react'


function FormExample() {
    return (
        <div className='flex flex-col justify-center h-screen items-center bg-pattern'>    {/* image for background class="bg-[url('/img/pattern.webp')]"*/}
            <div className="w-full max-w-md bg-white rounded-lg border shadow-sm md:max-w-3xl">
                <div class="p-7 space-y-5">
                    <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                        Formulario de trabajo
                    </h1>
                    <form class="grid gap-5 grid-cols-1 md:grid-cols-1">
                        <label for="field1" class="block text-sm font-medium text-gray-700" >field1</label>
                        <input type="text" placeholder='field1' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label for="field2" class="block text-sm font-medium text-gray-700" >field2</label>
                        <input type="text" placeholder='field2' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <label for="field3" class="block text-sm font-medium text-gray-700" >field3</label>
                        <input type="text" placeholder='field3' className='inputClass' class="mt-1 block w-full border border-gray-300  p-3.5 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </form>
                    <button className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white"> form</button>
                </div>
            </div>
        </div>


    )
}

export default FormExample;

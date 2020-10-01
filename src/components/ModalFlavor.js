import React from 'react'

export const ModalFlavor = ({ hideFlavorModal }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 flex space-x-4">
                    <svg className="h-10 w-10 text-gray-500 hover:text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="flavor" type="text" placeholder="flavor" />
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={hideFlavorModal} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

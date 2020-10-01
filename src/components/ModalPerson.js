import React from 'react'

export const ModalPerson = ({ hidePersonModal }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" />
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={hidePersonModal} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

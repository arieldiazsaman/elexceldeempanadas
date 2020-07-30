import React from 'react'
import { PersonItem } from './PersonItem'

export const People = ({ data }) => {
    const x = 3
    return (
        <div className="inline-block">
            {
                <div className={`grid grid-cols-${x} flex`}>
                    <div className="grid grid-rows-3 flex">
                        <div className="bg-gray-300 h-12 flex items-center justify-center p-4">
                            Ariel
                        </div>
                        <div className="bg-gray-300 h-12 flex items-center justify-center p-4">
                            3
                        </div>
                        <div className="bg-gray-300 h-12 flex items-center justify-center p-4">
                            4
                        </div>
                    </div>
                    <div className="grid grid-rows-3 flex">
                        <div className="bg-gray-300 h-12 flex items-center justify-center p-4">
                            Jorge
                        </div>
                        <div className="bg-gray-300 h-12 flex items-center justify-center p-4">
                            2
                        </div>
                        <div className="bg-gray-300 h-12 flex items-center justify-center p-4">
                            2
                        </div>
                    </div>
                    <div className="bg-gray-300 h-12 flex items-center justify-center">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            +
                        </button>
                    </div>
                </div>
            }
        </div>

    )
}

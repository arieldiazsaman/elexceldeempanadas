import React from 'react'
import { FlavorItem } from './FlavorItem'

export const Flavors = ({ flavors, showFlavorModal }) => {

    const getFlavorItems = () => flavors.map((flavor) => <FlavorItem key={flavor.key} flavor={flavor.flavor} />)

    return (
        <div className="inline-block w-48">
            {
                <div className={`grid grid-rows-${flavors.length + 2} flex`}>
                    <div className="bg-gray-300 h-12" />
                    {
                        getFlavorItems()
                    }
                    <div className="bg-gray-300 h-12 flex items-center justify-center">
                        <button onClick={showFlavorModal} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">
                            +
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

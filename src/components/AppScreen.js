import React from 'react'
import { Flavors } from './Flavors'
import { People } from './People'
import { TotalFlavors } from './TotalFlavors'

export const AppScreen = () => {
    const data = {
        names:
            [
                {
                    name: 'Jorge',
                    flavors: {
                        'carne': 2,
                        'jamon': 2
                    }
                },
                {
                    name: 'Ariel',
                    flavors: {
                        'carne': 3,
                        'jamon': 4
                    }
                }
            ],
        flavors: [
            {
                flavor: 'Carne',
                key: 'carne'
            },
            {
                flavor: 'Jamón y Queso',
                key: 'jamon'
            }
        ]
    }
    return (
        <div className="container">
            <div className="flex bg-gray-100">
                <Flavors flavors={data.flavors} />
                <People data={data} />
                <TotalFlavors data={data} />
            </div>
        </div>
    )
}

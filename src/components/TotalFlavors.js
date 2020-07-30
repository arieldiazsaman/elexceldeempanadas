import React from 'react'
import { TotalFlavorsItem } from './TotalFlavorsItem'

export const TotalFlavors = ({ data }) => {
    const amount = data.flavors.map((flavor) => {
        const personInit = {
            flavors: {
                [flavor.key]: 0
            }
        }
        return data.names.reduce((person1, person2) => {
            if (!(flavor.key in person2)) {
                return { flavors: { [flavor.key]: person1?.flavors[flavor.key] + person2?.flavors[flavor.key], key: flavor.key } }
            } else {
                return { flavors: { [flavor.key]: person1?.flavors[flavor.key] + 0, key: flavor.key } }
            }
        }, personInit)
    })

    const getTotalFlavorsItems = () => amount.map((flavor) => <TotalFlavorsItem key={flavor.flavors.key} amount={flavor.flavors[flavor.flavors.key]} />)

    return (
        <div className="inline-block">
            {
                <div className={`grid grid-rows-${data.flavors.length + 2} flex`}>
                    <div className="bg-gray-300 h-12 w-10 flex items-center justify-center" />
                    {
                        getTotalFlavorsItems()
                    }
                </div>
            }
        </div>
    )
}

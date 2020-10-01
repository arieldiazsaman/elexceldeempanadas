import React, { useState } from 'react'
import { Flavors } from './Flavors'
import { People } from './People'
import { TotalFlavors } from './TotalFlavors'
import { ModalPerson } from './ModalPerson'
import { ModalFlavor } from './ModalFlavor'

export const AppScreen = () => {
    const [personModal, setPersonModal] = useState(false);
    const [flavorModal, setFlavorModal] = useState(false);
    const showPersonaModal = () => {
        setPersonModal(true)
    }
    const hidePersonModal = () => {
        setPersonModal(false)
    }
    const showFlavorModal = () => {
        setFlavorModal(true)
    }
    const hideFlavorModal = () => {
        setFlavorModal(false)
    }
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
        <>
            {
                personModal ? <ModalPerson hidePersonModal={hidePersonModal} /> :
                    flavorModal ? <ModalFlavor hideFlavorModal={hideFlavorModal} /> : (
                        <div className="container">
                            <div className="flex bg-gray-100">
                                <Flavors flavors={data.flavors} showFlavorModal={showFlavorModal} />
                                <People data={data} showPersonaModal={showPersonaModal} />
                                <TotalFlavors data={data} />
                            </div>
                        </div>
                    )
            }
        </>
    )
}

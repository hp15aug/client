import React from 'react'

const MOAgrid = () => {
    return (
        <section>
            {/* Grid for Deliverables and Client Info */}
            <div className="bg-white w-full grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
                {/* Deliverables Card */}
                <div className="p-6 border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl autoShow">
                    <h3 className="text-gray-500 mb-4">Deliverables</h3>
                    <ul className="space-y-2">
                        <li className="transition duration-300 hover:text-indigo-600">
                            3D Animations
                        </li>
                        <li className="transition duration-300 hover:text-indigo-600">
                            High-Resolution Illustrations
                        </li>
                        <li className="transition duration-300 hover:text-indigo-600">
                            Holographic 3D Animations
                        </li>
                    </ul>
                </div>

                {/* Client Card */}
                <div className="p-6 border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl autoShow">
                    <h3 className="text-gray-500 mb-4">Client</h3>
                    <p>xyz</p>
                </div>
            </div>
        </section>
    )
}

export default MOAgrid
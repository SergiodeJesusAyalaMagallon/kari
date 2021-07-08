import React from 'react'
import Footer2Botn from '../components/Compartidos/Footer2Botn'

const AddPetitioner = () => {
    return (
        <div>
            <div className="text-primary600 font-Roboto font-bold text-2xl text-center m-auto pt-16">Servicio de emergencia</div>
            <div className="text-onBackground font-Sans font-semibold text-lg text-center m-auto pt-2">¿Quién lo solicita?</div>
            <div className="mt-12">
                <div className="bg-surface w-10/12 lg:w-5/12  m-auto mb-8 rounded-xl py-4 text-primary600 font-semibold text-lg text-center">Ayuntamiento</div>
                <div className="bg-surface w-10/12 lg:w-5/12 m-auto mb-8 rounded-xl py-4 text-primary600 font-semibold text-lg text-center">C5i</div>
                <div className="bg-surface w-10/12 lg:w-5/12 m-auto mb-8 rounded-xl py-4 text-primary600 font-semibold text-lg text-center">CRUM</div>
                <div className="bg-surface w-10/12 lg:w-5/12 m-auto mb-8 rounded-xl py-4 text-primary600 font-semibold text-lg text-center">Hospital</div>
                <div className="bg-primary300 w-10/12 lg:w-5/12 m-auto mb-8 rounded-xl py-4 text-onPrimary font-semibold text-lg text-center">Población abierta</div>
            </div>
            <div>
                <Footer2Botn Ruta="/ConfService" Ruta2="/"/>
            </div>
        </div>
    )
}

export default AddPetitioner

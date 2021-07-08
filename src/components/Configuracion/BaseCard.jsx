import React from 'react'

const BaseCard = ({Context}) => {
    return (
        <div className="bg-onPrimary rounded-3xl w-11/12 lg:w-8/12 m-auto px-6 py-3">
            <Context/>
        </div>
    )
}

export default BaseCard

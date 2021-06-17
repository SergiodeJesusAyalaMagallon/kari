import React from 'react'

const CardSimple = ({Fig,texto}) => {
    return (
        <div className="bg-primary300 text-surface w-1/5 ml-7 grid grid-cols-1 justify-items-center text-center rounded-2xl">
            <div className="pt-2">
                <Fig style={{fontSize:'250%'}}/>
            </div>
            <div className="pb-3 text-xs pt-2">
                {texto}
            </div>
        </div>
    )
}

export default CardSimple

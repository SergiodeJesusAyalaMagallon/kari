import React from 'react'
import Chip from './Chip'

const ChipGroup = (Chips) => (
        <div className="inline-flex w-full">
            <Chip Titulo="Registros actuales" modo="isSelected"/>
            <Chip Titulo="Últimos 7 días" modo="isNotSelected"/>
        </div>
    )

export default ChipGroup

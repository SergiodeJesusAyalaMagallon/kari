import {React,useState} from 'react'
import Calendar from 'react-calendar';

const Calendario = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="w-10/12 m-auto">
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Calendario
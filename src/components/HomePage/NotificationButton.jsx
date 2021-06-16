import React from 'react'
import Notifications from '@material-ui/icons/NotificationsRounded';

const NotificationButton = () => {
    return (
        <div className="grid grid-cols-12">
            <button className="bg-secondary500 rounded-lg col-span-12 h-10">
                <Notifications className="text-onPrimary"/>
            </button>
        </div>
    )
}

export default NotificationButton

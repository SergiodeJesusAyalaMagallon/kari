import React from 'react'
import Notifications from '@material-ui/icons/NotificationsRounded';

const NotificationButton = () => {
    return (
        <div className="w-full  grid grid-cols-12">
            <div className="flex flex-wrap content-center justify-center bg-secondary500 rounded-lg col-span-12 h-10">
                <Notifications className="text-onPrimary"/>
            </div>
        </div>
    )
}

export default NotificationButton

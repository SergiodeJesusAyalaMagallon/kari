import React from 'react'
import {HomeRounded,HistoryRounded,NotificationsRounded,SettingsRounded} from '@material-ui/icons'
import { Paper, Tab, Tabs } from '@material-ui/core';

const BottomNavBar = () => {
    return (
    <div className="absolute bottom-0 w-full">
        <Paper square>
            <Tabs
                variant="fullWidth"
                indicatorColor='primary'
            >
                <Tab icon={<HomeRounded/>} aria-label="phone" />
                <Tab icon={<HistoryRounded/>} aria-label="favorite" />
                <Tab icon={<NotificationsRounded/>} aria-label="person" />
                <Tab icon={<SettingsRounded/>} aria-label="person" />
            </Tabs>
        </Paper>

        
    </div>
    )
}

export default BottomNavBar

import React from 'react'
import "./topbar.css";
import {NotificationsNone} from '@material-ui/icons';

export default function topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topright'>
                <span className='logo'>Imadmin</span>
            </div>
            <div className='topleft'>
                <div className='topbarIcons'>
                    <NotificationsNone/>

                </div>
            </div>
        </div>
        
    </div>
  )
}

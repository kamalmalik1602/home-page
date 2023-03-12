import React from 'react'
import LeftSideIcon from './LeftSideIcon'
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const LeftSide = () => {
  return (
    <div className="sidebar">
        
        <div className="sidebar-logo">
            <h3>
                Edviron
            </h3>
        </div>

        <div className="left-sidebar-icons ">
      
            <LeftSideIcon active Icon={AppsIcon} text="Dashboard"/>
            <LeftSideIcon active Icon={PersonIcon} text="Users"/>
            <LeftSideIcon active Icon={InsertPhotoIcon} text="Projects"/>
            <LeftSideIcon active Icon={ReceiptIcon} text="Sales"/>
          <div className="setting-bottom ">
          <LeftSideIcon active Icon={SettingsIcon} text="Settings"/>
            <LeftSideIcon active Icon={LogoutIcon} text="Logout"/>
          </div>
        </div>
    </div>
  )
}

export default LeftSide
import React from 'react'
import Avatar from '@mui/material/Avatar';

const Data = ({image,sale,revenue,name}) => {
  return (
    <div className="history-data d-flex align-items-center justify-content-between ">
 <div className="profile-data d-flex  justify-content-between align-items-center">
 <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src={image} />
 <span className="ps-2">
    {name}
 </span>
 </div>
 <span>
    {sale}k+ sales
 </span>
 <span>
    ${revenue}m revenue
 </span>
    </div>
  )
}

export default Data
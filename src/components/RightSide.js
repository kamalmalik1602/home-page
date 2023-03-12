import React from "react";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Data from "./Data";
import TimeWatch from "./TimeWatch";
const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="top-leftside d-flex">
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"
        />
        <div className="profile-name ms-2 ps-2">
          <h6>Aditya Singh</h6>
          <span>Admin</span>
        </div>
        <div className="notifcation-icon">
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
      <div className="recent-history">
        <h4>Recent Transactions</h4>
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
          name="Jasraj"
          sale="40"
          revenue="1.2"
        />
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2mHjhf_0E2RUH8SXrVaw-FPJ6whDt7awjQ&usqp=CAU"
          name="Jasraj"
          sale="40"
          revenue="1.2"
        />
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiKV_lIjutZrEYVD9qw3wi-1lK2y3BZVHxw&usqp=CAU"
          name="Jasraj"
          sale="40"
          revenue="1.2"
        />
        <button>View All Users</button>
      </div>
      <div className="recent-history">
        <h4>Highest Transactions</h4>
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFacn0pb12vsSRTPKRUDnxFrP8sj7st13r8A&usqp=CAU"
          name="Jasraj"
          sale="40"
          revenue="1.2"
        />
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          name="Jasraj"
          sale="40"
          revenue="1.2"
        />
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU"
          name="Jasraj"
          sale="40"
          revenue="1.2"
        />
        <button>View All Transactions</button>
      </div>
      <div className="time-watch">
        <TimeWatch />
      </div>
    </div>
  );
};

export default RightSide;

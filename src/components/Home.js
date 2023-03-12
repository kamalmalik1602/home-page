import React from "react";
import "./Home.css";
import card from "../assests/card.png";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Avatar from "@mui/material/Avatar";
import LinearProgress from "@mui/material/LinearProgress";
import Pagination from '@mui/material/Pagination';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <div className="home">
      <div className="searchBar">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" placeholder="   Search users, payments" name="" />
      </div>

      <div className="home-heading">
        <h5>In the last 30 days.</h5>
        <img src={card} alt="" />
      </div>
      <div className="home-data">
        <div className="home-content">
          <h5>All users</h5>

          <span>Monitor sales, transaction etc</span>
        </div>
        <div className="home-icons">
          <div className="searchBar-home">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="   Search transaction" name="" />
          </div>
          <div className="filter-home">
            <FilterAltOutlinedIcon />
            <span>Filter</span>
          </div>
        </div>
      </div>
      <div className="section-3">
        <table width="100%">
          <thead>
            <tr>
              <td>User</td>
              <td>Status</td>
              <td>Ratings</td>
              <td>Quantity</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="people">
                <div className="people-de d-flex">
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU"
                  />

                  <p className="ms-2">Mulay</p>
                </div>
              </td>
              <td className="status">
                <p>Verified</p>
              </td>
              <td className="ratings ">
                <div
                  className="progress-bar"
                >
                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value="40" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(40)}%`}</Typography>
      </Box>
    </Box>
                </div>
                 
              </td>
              <td className="Quantity">
                <p>400</p>
              </td>
              <td className="Amount">
                <p>$400,000</p>
              </td>
            </tr>
            <tr>
              <td class="people">
                <div className="people-de d-flex">
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3DgP-r2jcJjdzms_C_WYKnBPK0SdMUE8xA&usqp=CAU"
                  />

                  <p className="ms-2">Tarun</p>
                </div>
              </td>
              <td className="j">
                <p>Pending</p>
              </td>
              <td className="ratings ">
                <div
                  className="progress-bar"
                >
                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value="57" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(57)}%`}</Typography>
      </Box>
    </Box>
                </div>
                 
              </td>
              <td className="Quantity">
                <p>200</p>
              </td>
              <td className="Amount">
                <p>$450,000</p>
              </td>
            </tr>
            <tr>
              <td class="people">
                <div className="people-de d-flex">
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZifvveZ9bsdeiCxsVqmT_tmAHoF6bt0nKQ9EBQwa4nP4nXPI7z-Uq3y0pHRA3KwBZup8&usqp=CAU"
                  />

                  <p className="ms-2">Jasraj</p>
                </div>
              </td>
              <td className=" g">
                <p>Unverified</p>
              </td>
              <td className="ratings ">
                <div
                  className=""
                >

    No Ratings Available
                </div>
                 
              </td>
              <td className="Quantity">
                <p>0</p>
              </td>
              <td className="Amount">
                <p>$0</p>
              </td>
            </tr>
            <tr>
              <td class="people">
                <div className="people-de d-flex">
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCu_5fDK1jhDGCAwewGXaPxm2Rr4SV4bR_w&usqp=CAU"
                  />

                  <p className="ms-2">Lakshay</p>
                </div>
              </td>
              <td className="status">
                <p>Verified</p>
              </td>
              <td className="ratings ">
                <div
                  className="progress-bar"
                >
                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value="80" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(80)}%`}</Typography>
      </Box>
    </Box>
                </div>
                 
              </td>
              <td className="Quantity">
                <p>100</p>
              </td>
              <td className="Amount">
                <p>$300,000</p>
              </td>
            </tr>
            <tr>
              <td class="people">
                <div className="people-de d-flex">
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72tm53oQ8xufKgdZu1p6llIThh-SM72hzKQ&usqp=CAU"
                  />

                  <p className="ms-2">Ojha</p>
                </div>
              </td>
              <td className="j">
                <p>Pending</p>
              </td>
              <td className="ratings ">
                <div
                  className="progress-bar"
                >
                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value="60" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(60)}%`}</Typography>
      </Box>
    </Box>
                </div>
                 
              </td>
              <td className="Quantity">
                <p>300</p>
              </td>
              <td className="Amount">
                <p>$8900,000</p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="page-change mt-3">
        <Pagination count={7} variant="outlined" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Home;

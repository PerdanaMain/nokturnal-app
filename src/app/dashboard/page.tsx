import React from "react";
import SidebarDash from "../components/dashboard/Sidebar";
import PanelDash from "../components/dashboard/Panel";

import Image from "next/image";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import profile4 from "../assets/images/profile-4.jpg";
import plus from "../assets/images/plus.png";

const Page = () => {
  return (
    <div className="dash-container">
      {/* Sidebar Section */}
      <SidebarDash />
      {/* End of Sidebar Section */}

      {/* Main Content */}
      <main>
        <h1>Dsahboard</h1>
        {/* Analyses */}
        <div className="dash-analyse">
          <div className="sales">
            <div className="status">
              <div className="info">
                <h3>Total Sales</h3>
                <h1>$65,024</h1>
              </div>
              <div className="progresss">
                <svg>
                  <circle cx={38} cy={38} r={36} />
                </svg>
                <div className="percentage">
                  <p>+81%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="visits">
            <div className="status">
              <div className="info">
                <h3>Site Visit</h3>
                <h1>24,981</h1>
              </div>
              <div className="progresss">
                <svg>
                  <circle cx={38} cy={38} r={36} />
                </svg>
                <div className="percentage">
                  <p>-48%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="searches">
            <div className="status">
              <div className="info">
                <h3>Searches</h3>
                <h1>14,147</h1>
              </div>
              <div className="progresss">
                <svg>
                  <circle cx={38} cy={38} r={36} />
                </svg>
                <div className="percentage">
                  <p>+21%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Analyses */}

        {/* New Users Section */}
        <div className="new-users">
          <h2>New Users</h2>
          <div className="user-list">
            <div className="user">
              <Image src={profile2} width={100} height={100} alt="Profile" />
              <h2>Jack</h2>
              <p>54 Min Ago</p>
            </div>
            <div className="user">
              <Image src={profile3} width={100} height={100} alt="Profile" />
              <h2>Amir</h2>
              <p>3 Hours Ago</p>
            </div>
            <div className="user">
              <Image src={profile4} width={100} height={100} alt="Profile" />
              <h2>Ember</h2>
              <p>6 Hours Ago</p>
            </div>
            <div className="user">
              <Image src={plus} width={100} height={100} alt="Profile" />
              <h2>More</h2>
              <p>New User</p>
            </div>
          </div>
        </div>
        {/* End of New Users Section */}

        {/* Recent Orders Table */}
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody />
          </table>
          <a href="#">Show All</a>
        </div>
        {/* End of Recent Orders */}
      </main>
      {/* End of Main Content */}

      {/* Right Section */}
      <PanelDash />
      {/* End of Right Section */}
    </div>
  );
};

export default Page;

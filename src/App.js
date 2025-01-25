import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { Bell, ChevronDown, Calendar } from 'lucide-react';
import { RiDropboxFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdCancelPresentation } from "react-icons/md";
import { BiSolidWalletAlt } from "react-icons/bi";
import { FaHandsClapping, FaArrowTrendUp } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import logo from '../src/assests/ben.jpeg';
import logo1 from '../src/assests/MM-removebg-preview.png';
import './App.css';

const Dashboard = () => {
  const pieData = [
    { name: 'Initiated', value: 60 },
    { name: 'Pending', value: 20 },
    { name: 'Signed', value: 15 },
    { name: 'Expired', value: 5 },
  ];

  const COLORS = ['#8b5cf6', '#c084fc', '#ddd6fe', '#ede9fe'];

  const pendingActions = [
    { id: '#1023456', status: '30 days left', description: 'Files pending to be uploaded' },
    { id: '#3456677', status: '15 days left', description: 'Files waiting to be validated' },
    { id: '#7654321', status: '15 days left', description: 'Files waiting to be validated' },
    { id: '#7654321', status: '15 days left', description: 'Files waiting to be validated' },
  ];

  const orderStats = [
    { title: 'Draft Orders', count: 18, count1: '+2.4%', icon: <RiDropboxFill /> },
    { title: 'Pending', count: 10, count1: '+2.4%', icon: <FaClock /> },
    { title: 'Cancelled Order', count: 5, count1: '+2.4%', icon: <BsBoxSeamFill /> },
    { title: 'Generated Order', count: 3, count1: '+2.4%', icon: <MdCancelPresentation /> },
  ];

  const signStatusColors = [
    { label: 'Initiated', color: '#8b5cf6' },
    { label: 'Pending', color: '#c084fc' },
    { label: 'Signed', color: '#ddd6fe' },
    { label: 'Expired', color: '#ede9fe' },
  ];

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <nav className="nav-links">
            <a href="#">Services</a>
            <a href="#">User Management</a>
            <a href="#">My Orders</a>
            <a href="#">Reports</a>
            <a href="#">Stamp Inventory</a>
            <a href="#">Bar Codes</a>
            <a href="#">Invoice</a>
            <button className="coming-soon-btn">Coming Soon</button>
          </nav>
        </div>
        <div className="header-right">
          <Bell className="bell-icon" />
          <div className="profile">
            <a href="#" className="profile-name">Michael Smith</a>
            <img src={logo1} alt="Profile" className="logo1" />
          </div>
        </div>
      </header>

      <div className="welcome-section">
        <div className="welcome1">
          <h1 className="welcome-title">
            <FaHandsClapping className="hand-icon" /> Welcome back, Michael
          </h1>
          <p className="welcome-date">24 Dec 2025 - Friday</p>
        </div>
        <Card className="wallet-card">
          <CardContent>
            <div className="wallet">
              <p className="wallet-label">My Wallet<a><BiSolidWalletAlt className="wallet-icon" /></a></p>
              
              <p className="wallet-amount">₹ 2,50,000</p>
              <p className="current-balance">Current Balance</p>
              <p className="running-low">
              Running low <a href="#" style={{ color: 'purple' }}>Notify admin</a>

              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="card-title">Pending Actions</h3>
            <div className="pending-actions-list">
              {pendingActions.map((action, index) => (
                <div key={index} className="pending-action">
                  <div className="action-header">
                    <span className="action-id">{action.id}</span>
                    <span className="action-status">{action.status}</span>
                  </div>
                  <p className="action-description">{action.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="services-section">
        <h2 className="services-title">Frequently Used</h2>
        <div className="services-grid">
          <Card>
            <CardContent >
              <div className='services1'>
              <h3 className="service-title">Contract Execution Upload</h3>
              <p className="service-description">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
             
              <button className="get-started-btn">Get Started →</button>
              </div>
              
            </CardContent>
          </Card>
          <Card>
            <CardContent>
            <div className='services2'>
              <h3 className="service-title">Contract Execution Upload</h3>
              <p className="service-description">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
              
              <button className="get-started-btn">Get Started →</button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
            <div className='services3'>
              <h3 className="service-title">Contract Execution Upload</h3>
              <p className="service-description">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
              
              <button className="get-started-btn">Get Started →</button>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>


      <div className="filters-row">
         <div className="filter-select">
           <select className="select-dropdown">
             <option>All branches</option>
             <option>Branch 1</option>
             <option>Branch 2</option>
           </select>
          
         </div>
         <div className="filter-options">
           <div className="filter-select">
             <select className="select-dropdown">

              <option>Custom range</option>              
              <option>Last 7 days</option>
              <option>Last 30 days</option>
             </select>
            
           </div>
           <div className="calendar-box">
             <Calendar className="calendar-icon" />
             <span className="calendar-date">March 2025</span>
           </div>
         </div>
      </div>

          <div className="main-content-grid">
        <div className='view'>
        <h2 className="title-title" style={{ width: 200, height: 32 }}>Order Details</h2>

        
        </div>
    

        <div className="order-stats">
        {orderStats.map((stat, index) => (
            <Card key={index} className="order-stat-card">
              <CardContent className="order-stat-content">
                <div className="order-stat-header flex">
                  <p className="order-count">{stat.count}</p>
                  <div className='stat-icon'>{stat.icon}</div>
                  
                </div>
                <div className="order-stat-footer">
                  
                  <p className="order-title">{stat.title}</p>
                  <p className='count1'><a>< FaArrowTrendUp className="arrow-icon"  /></a>{stat.count1}</p>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

     
      


      <div className="charts-section">
        {['E-sign Count', 'E-stamp Count'].map((title, i) => (
          <div className="card-box" key={i}>
            <h3 className="card-title underline">{title}</h3>
            <div className="chart-content">
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  <Label
                    value="30K Initiated"
                    position="center"
                    style={{ fontWeight: 'bold', fill: 'black' }}
                  />
                </Pie>
              </PieChart>
              <div className="legend">
                {signStatusColors.map((status, index) => (
                  <div key={index} className="legend-item">
                    <div className="color-box" style={{ backgroundColor: status.color }} />
                    <span className="legend-label">{status.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="social-icons">
          <CiFacebook className="footer-logo" />
          <TiSocialTwitterCircular className="footer-logo" />
          <TiSocialLinkedinCircular className="footer-logo" />
        </div>
        <p className="footer-text">© 2023 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Dashboard;






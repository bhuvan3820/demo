import React from 'react';
import { Card, CardContent } from '../ui/card';
import { PieChart, Pie, Cell } from 'recharts';
import { 
  Bell, 
  Download, 
  FileText, 
  Settings, 
  ChevronDown,
  Calendar,
  Search
} from 'lucide-react';
import { RiDropboxFill } from "react-icons/ri";


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
    { id: '#7654321', status: 'Processed', description: '' },
  ];

  const orderStats = [
    { title: 'Draft Orders', count: 18, icon: FileText, color: 'bg-purple-100', icon: <RiDropboxFill /> },
    { title: 'Pending', count: 10, icon: Bell, color: 'bg-blue-100', icon: <RiDropboxFill /> },
    { title: 'Cancelled Order', count: 5, icon: FileText, color: 'bg-red-100', icon: <RiDropboxFill /> },
    { title: 'Generated Order', count: 3, icon: FileText, color: 'bg-green-100, icon: <RiDropboxFill />' },
  ];

  const signStatusColors = [
    { label: 'Initiated', color: '#8b5cf6' },
    { label: 'Pending', color: '#c084fc' },
    { label: 'Signed', color: '#ddd6fe' },
    { label: 'Expired', color: '#ede9fe' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
          <nav className="flex space-x-28">
            <a href="#" className="text-gray-600" >Services</a>
            <a href="#" className="text-gray-600">User Management</a>
            <a href="#" className="text-gray-600">My Orders</a>
            <a href="#" className="text-gray-600">Reports</a>
            <a href="#" className="text-gray-600">Stamp Inventory</a>
            <a href="#" className="text-gray-600">Bar Codes</a>
            <a href="#" className="text-gray-600">Invoice</a>
            <button className="ml-4 px-6 py-2 bg-white-500 text-violet rounded hover:bg-blue-600 ">
          Coming Soon
        </button>

          
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="h-5 w-5 text-gray-600" />
          <div className="flex items-center space-x-2">
            {/* <img src="Michal Smith" alt="Profile" className="h-8 w-8 rounded-full" /> */}
            <a href="#" className="text-gray-600">michal smith</a>
            <img src="Michal Smith" alt="Profile" className="h-8 w-8 rounded-full" />
            {/* <span className="text-gray-700">M</span> */}
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Michael</h1>
          <p className="text-gray-500">24 Dec 2025 - Friday</p>
        </div>
        <Card className="w-48">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">My Wallet</p>
            <p className="text-2xl font-semibold">₹ 2,50,000</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters Row */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <select className="pl-4 pr-8 py-2 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All branches</option>
            <option>Branch 1</option>
            <option>Branch 2</option>
          </select>
          <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="pl-4 pr-8 py-2 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Custom range</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 border rounded-md">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">March 2025</span>
          </div>
        </div>
      </div>

    {/* Frequently Used Services */}
 <div className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Frequently Used</h2>
  <div className="grid grid-cols-3 gap-6">
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-2">Contract Execution Upload</h3>
        <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet consectetur</p>
        <button className="text-purple-600">Get Started →</button>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-2">E-Stamp Services</h3>
        <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet consectetur</p>
        <button className="text-purple-600">Get Started →</button>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-2">E-Sign Services</h3>
        <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet consectetur</p>
        <button className="text-purple-600">Get Started →</button>
      </CardContent>
    </Card>
  </div>
</div> 


      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Pending Actions */}
        <Card className="col-span-1">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Pending Actions</h3>
            <div className="space-y-4">
              {pendingActions.map((action, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">{action.id}</span>
                    <span className="text-sm text-gray-500">{action.status}</span>
                  </div>
                  {action.description && (
                    <p className="text-sm text-gray-600">{action.description}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Order Stats */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {orderStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex items-center space-x-4">
                {/* <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-purple-600" />
                </div> */}
                <RiDropboxFill />
                <div>
                  <p className="text-2xl font-semibold">{stat.count}</p>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">E-sign Count</h3>
            <div className="flex">
              <div className="flex-1">
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
                  </Pie>
                </PieChart>
              </div>
              <div className="flex-1">
                <div className="space-y-2">
                  {signStatusColors.map((status, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded" 
                        style={{ backgroundColor: status.color }}
                      />
                      <span className="text-sm text-gray-600">{status.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">E-stamp Count</h3>
            <div className="flex">
              <div className="flex-1">
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
                  </Pie>
                </PieChart>
              </div>
              <div className="flex-1">
                <div className="space-y-2">
                  {signStatusColors.map((status, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded" 
                        style={{ backgroundColor: status.color }}
                      />
                      <span className="text-sm text-gray-600">{status.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
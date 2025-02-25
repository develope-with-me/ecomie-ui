import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const DashboardComponent: React.FC = () => {
    const navigate = useNavigate();
    const [selectedItem, setselectedItem] = useState<string>("Account");
    const handleClick= (path:string, itemName:string)=>{
        navigate(path) ;
        setselectedItem(itemName)  ;
    }
    return (
        // <div className="h-screen">
            <div className="w-1/5 dashboard px-10" >
                <div>
                    <div className="flex mt-20">
                        <i className="fa-solid fa-users text-xl"></i>
                        <p className="ml-8">Ecomie body</p>
                    </div>
                    <ul>
                        <li className="flex mt-2">
                            <i className="ml-14 mt-1 fa-solid fa-arrow-right "></i>
                            <p
              className={`ml-3 cursor-pointer hover:text-blue-500 ${
                selectedItem === "Staffs" ? "text-blue-500" : ""
              }`}
              onClick={() => handleClick("/staffs", "Staffs")}
            >
              Staffs
            </p>
                        </li>
                        <li className="flex mt-2">
                            <i className="ml-14 mt-1 fa-solid fa-arrow-right"></i>
                            <p className="ml-3">Coaches</p>
                        </li>
                        <li className="flex mt-2">
                            <i className="ml-14 mt-1 fas fa-arrow-right"></i>
                            <p
              className={`ml-3 cursor-pointer hover:text-blue-500 ${
                selectedItem === "Ecomist" ? "text-blue-500" : ""
              }`}
              onClick={() => handleClick("/ui/EcomistPage", "Ecomist")}
            >
              Ecomist
            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-7">
                    <i className="fa-solid fa-bell text-xl"></i>
                    <p className="ml-9">Notifications</p>
                </div>
                <div className="flex mt-7">
                    <i className="fa-solid fa-person-praying text-xl"></i>
                    <p className="ml-10">Prayer topics</p>
                </div>
                <div>
                    <div className="flex mt-7">
                        <i className="fa-solid fa-bullhorn text-lg"></i>
                        <p className="ml-9">Evangelism</p>
                    </div>

                    <div className="flex mt-7">
                    <i className="fa-solid fa-user-shield text-xl"></i>
                    <p className={`ml-9 cursor-pointer hover:text-blue-500 ${
            selectedItem === "Statistics" ? "text-blue-500" : ""
          }`} 
          onClick={() => handleClick("/ui/statistics", "Statistics")}
          >Statistics</p>
                </div>
                    <ul>
                        <li className="flex mt-2">
                            <i className="ml-14 mt-1 fa-solid fa-arrow-right"></i>
                            <p className="ml-3">SMICT challenge</p>
                        </li>
                        <li className="flex mt-2">
                            <i className="ml-14 mt-1 fa-solid fa-arrow-right"></i>
                            <p className="ml-3">KETMINA challenge</p>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-7">
                    <i className="fa-solid fa-user-shield text-xl"></i>
                    <p className="ml-9">Manage access</p>
                </div>
                <div className="flex mt-7">
                    <i className="fa-solid fa-user text-xl"></i>
                    <p className={`ml-9 cursor-pointer hover:text-blue-500 ${
            selectedItem === "Account" ? "text-blue-500" : ""
          }`} 
          onClick={() => handleClick("/ui/user-profile", "Account")}
          >Account</p>
                </div>
                <div className="flex mt-20">
                    <i className="fa-solid fa-right-from-bracket text-xl"></i>
                    <p className="ml-11">Logout</p>
                </div>
            </div>

        // </div>

    );
};

export default DashboardComponent;

import React from 'react'
import '../Components/Home.css';
import Call from '../assets/call.png';
import Homee from '../assets/homee.png'
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { PiNumberCircleFourThin } from "react-icons/pi";

function Home() {
    const navigate = useNavigate();
  return (
    <div className='home-main'>
        <img src={Call} className='home-img1'/>
        <div className='home-img2'>
            <img src={Homee} style={{marginTop:'100px',marginLeft:'3rem'}} height={100} width={100}/>
            <PiNumberCircleFourThin className='home-icon' />
        </div>
        <div className='dashboard'>
            <span >Employee Productivity Dashboard</span>
        </div>
        <div className='products'>
            <div className='product'>
                <div>
                    <h5 className='p2'>Productivity on Monday</h5>
                    <div className='mon'></div>
                </div>
                <h6 className='pp2'>4%</h6>
            </div>
            <div className="product">
                <div>
                    <h5 className='p2'>Productivity on Tuesday</h5>
                    <div className='tue'></div>
                </div>
                <h6 className='pp2'>92%</h6>
            </div>
            <div className="product">
                <div>
                    <h5 className='p2'>Productivity on Wednesday</h5>
                    <div className='wed'></div>
                </div>
                <h6 className='pp2'>122%</h6>
            </div>
            <div className="product">
                <div>
                    <h5 className='p2'>Productivity on Thursday</h5>
                    <div className='thu'></div>
                </div>
                <h6 className='pp2'>93%</h6>
            </div>
            <div className="product">
                <div>
                    <h5 className='p2'>Productivity on Friday</h5>
                    <div className='fri'></div>
                </div>
                <h6 className='pp2'>89%</h6>
            </div>
            <div className="product">
                <div>
                    <h5 className='p2'>Productivity on Saturday</h5>
                    <div className='sat'></div>
                </div>
                <h6 className='pp2'>98%</h6>
            </div>

        </div>
        <div className='home-bottom' style={{marginTop:'6.9rem'}}>
            <HiHome onClick={()=>navigate('/home')} style={{height:'10vh',width:'5vh'}}/>
            <FaUser onClick={()=>navigate('/user')} style={{height:'10vh',width:'5vh'}}/>
        </div>
    
    </div>

  )
}

export default Home
import React, { useState } from 'react'
import '../Components/User.css';
import Call from '../assets/call.png';
import Homee from '../assets/homee.png'; 
import Card from 'react-bootstrap/Card';
import Userdata from './User.json';
import { IoMdSearch } from "react-icons/io";
import { PiNumberCircleFourThin } from "react-icons/pi";
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function User() {
    const [search,setSearch] = useState('');
    const navigate = useNavigate();

  return (
    <div className='user-main'>
        <img src={Call} alt="" className='user-img1'/>
        <div className='user-img2'>
            <img src={Homee} style={{marginTop:'100px',marginLeft:'3rem'}} height={100} width={100}/>
            <PiNumberCircleFourThin className='user-icon' />
        </div>
        <div className='user-search'>
            <input type='text' placeholder='Search with name' onChange={(e)=>setSearch(e.target.value)} value={search}/>
            <IoMdSearch style={{marginLeft:'-3rem'}} height={20}/>
        </div>
        <div className='user-data'>
        {
            Userdata.filter((data)=>{
                if(search == ""){
                    return data;
                }else if (data.NAME.toLowerCase().includes(search.toLowerCase())){
                    return data;
                }
            })
            .map((data)=>{
                return(
                    <div key={data.id} className='userdata-data'>
                        <Card style={{ width: '18rem',marginLeft:'4rem' }} className='card-user'>
                            <Card.Body >
                                <Card.Title style={{marginLeft:'2rem',color:'white'}}>EMP ID : {data.EMPID}</Card.Title>
                                <Card.Text style={{color:'white'}}>Name : {data.NAME}</Card.Text>
                                <Card.Text style={{color:'orange'}}>DOB : {data.DOB}</Card.Text>
                                <Card.Text style={{color:'#36A54680'}}>Role : {data.Role}</Card.Text>
                            </Card.Body>
                         </Card>
                    </div>
                )
            })
        }
        <div className='home-bottom'>
            <HiHome onClick={()=>navigate('/home')} style={{height:'10vh',width:'5vh'}}/>
            <FaUser onClick={()=>navigate('/user')} style={{height:'10vh',width:'5vh'}}/>
        </div>
        </div>
    </div>
  )
}

export default User
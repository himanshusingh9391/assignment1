import React, { useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import login from '../assets/login.png';
import '../Components/Login.css';

function Login() {
    const [email,setEmail]=  useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin =  ()=>{
        localStorage.setItem('userEmail',email);
        localStorage.setItem('userPassword',password);
        let emails = localStorage.getItem("userEmail");
        let passwords = localStorage.getItem("userPassword");
        if(emails && passwords){
            navigate('/home')
        }else{
            alert('Wrong Credentials')
        }
    }
    return (
        <div className='login-main'>   
        <div className='login-img'> 
            <img src={login} style={{marginTop:'200px'}} height={160} width={160}/>
            <p>#We are Electric</p>
        </div>
       
            <Container>
                <Form>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} className='input' />
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className='input'/>
                    <Button onClick={() => handleLogin()} type="submit" className='login-btn'>Login</Button>    
                </Form>
                <h3>Forget Password ?</h3>
            </Container>
        </div>
    )
}

export default Login
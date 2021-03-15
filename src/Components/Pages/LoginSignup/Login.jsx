import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';


import { login } from '../../../Redux/User/userActions'

import './Login.css'
const Login = ({ login }) => {
    const [data, setdata] = useState({
        email: '',
        password: ''
    })
    const { email, password } = data
    const onChange = e => setdata({ ...data, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault()
        login(email, password);
    }


    return (

        <div className='login'>
            <div className='login__pic'></div>
            <div style={{ padding: '50px' }}>
                <form onSubmit={e => onSubmit(e)} style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField variant="outlined" type="email" name="email" placeholder="Email" onChange={e => onChange(e)} required style={{ marginRight: '20px' }} />
                    <TextField variant="outlined" type="password" name="password" placeholder="Password" onChange={e => onChange(e)} required minLength='8' style={{ marginRight: '20px' }} />
                    <Button type='submit' color="primary" variant="contained" size="large" value='Signin' onClick={onSubmit}  > SignIn </Button>
                </form>
                <Link to='/signup' style={{ textDecoration: 'none' }}><p className='login__signup'>Sign Up</p></Link>
            </div>

        </div>


    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password)),
    }
}
export default connect(null, mapDispatchToProps)(Login)
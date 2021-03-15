import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack';

import { register } from '../../../Redux/User/userActions'

import './Login.css'

const Signup = ({ register }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })



    const { enqueueSnackbar } = useSnackbar();
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault()
        const { name, email, password } = data
        if (mediumRegex.test(password)) {
            const image = 'https://lh3.googleusercontent.com/proxy/6JI7rDICjHdO7jFlNs2n5ftsSwBFqTj7oU0I_BgJE09kfq22ED4zMBhXfPbRGfMjHUavGSlFxUji0zo8j2A2Hr0tUDO1pk4SjW-_0P__Sjt1d24Q_CRWvA'
            register(name, email, password, image)
        } else {
            enqueueSnackbar('Maan please enter a good password', { variant: 'error', autoHideDuration: 1500 })
        }

    }

    return (
        <div className='signup'>
            <p className='signup__text'>Create Your Account</p>
            <div className='signup__logo'></div>
            <form className='signup__form' onSubmit={onSubmit}>
                <TextField variant="outlined" type="text" name="name" placeholder="Enter Your Name .." onChange={e => onChange(e)} required />
                <TextField variant="outlined" type="email" name="email" placeholder="Enter Your Email .." onChange={e => onChange(e)} required />
                <TextField variant="outlined" type="password" name="password" placeholder="Enter Your Password .." onChange={e => onChange(e)} required minLength='8' />
                <Button type='submit' color="primary" variant="contained" size="large" value='Signup' style={{ marginTop: '30px' }}> Sign Up </Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (name, email, password, image) => dispatch(register(name, email, password, image)),
    }
}



export default connect(null, mapDispatchToProps)(Signup)
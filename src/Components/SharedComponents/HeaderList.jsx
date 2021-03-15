import React from 'react';
import './HeaderList.css'


const HeaderList = () => {

    const logOut = () => {
        localStorage.removeItem('access')
        window.location.reload()
    }
    return (
        <div className='list-container'>
            <button onClick={logOut}>hello</button>
        </div>
    )

}


export default HeaderList
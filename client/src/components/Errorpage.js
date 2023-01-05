import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div id="notfound" className='' >
                <div className="notfound d-flex flex-column justify-content-center align-items-center" style={{height:"50vh"}}>
                    <div className="notfound-404">
                        <h1>404 : PAGE NOT FOUND</h1>
                    </div>
                    <h3 className="text-center">WE are Sorry</h3>
                    <NavLink to='/'><button className='btn btn-primary'>Back To Home Page</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
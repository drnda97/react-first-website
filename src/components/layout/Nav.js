import React from 'react'
import logo from '../../assets/images/logo.png'
const Nav = () => {
    return (
        <nav className='w-100 d-flex'>
            <div className='w-50 text-center'>
                <a href="#">
                    <img src={logo} alt='logo' className="my-3 w-10"/>
                </a>
            </div>
            <div className='ml-25 w-25'>
                <ul className='d-flex w-100 mt-4'>
                    <li className="col-4 mt-4">
                        <a href="#">Pocetna</a>
                    </li>
                    <li className="col-4 mt-4">
                        <a href="#">Cenovnik</a>
                    </li>
                    <li className="col-4 mt-4">
                        <a href="#">Sklapanje</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav



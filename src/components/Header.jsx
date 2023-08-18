import React from 'react'
import './Header.css'
import { AiOutlineUser } from 'react-icons/ai'
import Search from './Search'
import Social from './Social'
import Cart from './Cart'
import Nav from './Nav'
function Header() {
    return (
        <div className="header">
            <div className='container'>
                <div className="header-1">
                    <div className='header_user'>
                        <AiOutlineUser size={20} />
                    </div>
                    <div className="header_content">
                        <div className="contact_info">
                            <p className="info_title">
                                <span>Gọi ngay : 1900 6750</span>
                                - Hỗ trợ 7 ngày trong tuần từ 9h - 21h
                            </p>
                        </div>
                        <Search />
                        <div className="currency_unit">
                            <button className='VND'>VND</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header-2">
                    <Social />
                    <div className="container_content">
                        <img src="	http://127.0.0.1:5500/baitapcuoikhoa/imgs/blog/logo.webp" alt="" />
                    </div>
                    <div className='container_cart'>
                        <Cart />
                    </div>
                </div>

            </div>
            <div className='container'>
                <Nav />
            </div>
        </div >
    )
}

export default Header

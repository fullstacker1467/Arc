import React from 'react'
import { Link } from 'react-router-dom'


function Catalog() {
    return (
        <div className='catalog'>
           <div className="container">
           <div className="top">
                <h1>КАТАЛОГ</h1>
                <div className="bottom">
                    <div className="card">
                        <img src="/img/kitchen.png" />
                        <Link>КУХНИ</Link>
                    </div>
                    <div className="card">
                        <img src="/img/guestroom.png" />
                        <Link>ГОСТИННЫЕ</Link>
                    </div>
                    <div className="card">
                        <img src="/img/badroom.png" />
                        <Link>СПАЛЬНИ</Link>
                    </div>
                    <div className="card">
                        <img src="/img/commingroom.png" />
                        <Link>ПРИХОЖИЕ</Link>
                    </div>
                    <div className="card">
                        <img src="/img/shkaf.png" />
                        <Link>ШКАФЫ-КУПЕ</Link>
                    </div>
                    <div className="card">
                        <img src="/img/childroom.png" />
                        <Link>ДЕТСКИЕ</Link>
                    </div>
                    <div className="card">
                        <img src="/img/bada.png" />
                        <Link>ДИВАНЫ</Link>
                    </div>
                    <div className="card">
                        <img src="/img/chairs.png" />
                        <Link>СТОЛЫ И СТУЛЬЯ</Link>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Catalog
import React from 'react'
import { Link } from 'react-router-dom'

function Location() {
  return (
    <div className='location'>
        <div className="container">
            <div className="contact">
                <h3>НАШИ КОНТАКТЫ</h3>
                <h4>Краснодар, Московская 144 корпус -1</h4>
                <h5>+7 961-525-91-91</h5>
                <Link>ЗАДАТЬ ВОПРОС</Link>
            </div>
            <div className="map">
            </div>
        </div>
    </div>
  )
}

export default Location
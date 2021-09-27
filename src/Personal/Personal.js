import React from 'react'
import './personal.css'

export const Personal = () => {
    const target = "_bank";
    return (
        <div className='container personal'>
            <div className='row'>
                <div className='col-md-4'>
                    <h3> hazem mohamed </h3>
                    <p> front end developer </p>
                </div>
                <div className='col-md-8'>
                    <div className='info  '>
                        <div>
                            <i className="fas fa-globe-africa"></i>
                            <p> egyption </p>
                        </div>
                        <div>
                            <i className="fas fa-map-marker-alt"></i>
                            <p> Qalyubia && Menoufia </p>
                        </div>
                        <div>
                            <i className="fab fa-whatsapp"></i>
                            <a target={ target } href="https://api.whatsapp.com/send?phone=201097890457"> 0109789057 </a>
                        </div>
                        <div>
                            <i className="fas fa-at"></i>
                            <p> hazemmo.7077@gmail.com </p>
                        </div>
                        <div>
                            <i class="fab fa-telegram-plane"></i>
                            <a href='https://t.me/hazemMoo' target={ target }> telegram </a>
                        </div>
                        <div>
                            <i className="fab fa-facebook-messenger"></i>
                            <a href='https://2u.pw/Zi7n6' target={ target }> massanger </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

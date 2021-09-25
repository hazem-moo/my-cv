import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import './Skills.css'

const lang = 
    [
        'html',
        'css',
        'html5', 
        'css3', 
        'javaScript', 
        'react.js', 
        'bootstrap', 
        'reactstrap', 
        'jQuery',
        "github"
    ]

export const Skills = () => {

    const all_lang = lang.map( ( res, idx ) => {
        return (
            <Fragment key={ idx }>
                <p> { res } </p>
            </Fragment>
        )
    })
    return (
        <div className='skills container bg-white'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3> skills </h3>
                </div>
                <div className='col-md-6'>
                    <div className='info'>
                        { all_lang }
                    </div>
                </div>
            </div>
        </div>
    )
}

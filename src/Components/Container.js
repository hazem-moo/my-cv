import React from 'react'
import { Edu } from '../Edu/Edu'
import { Personal } from '../Personal/Personal'
import { Portfolio } from '../portfolio/Portfolio'
import { Skills } from '../Skills/Skills'
import { Summary } from '../Summary/Summary'
import './container.css'

export const Container = () => {

    return (
        <div className='themes'>
            <Personal />
            <Summary />
            <Skills />
            <Edu />
            <Portfolio />
        </div>
    )
}

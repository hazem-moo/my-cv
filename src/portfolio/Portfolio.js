import React, { Fragment } from 'react'
import './portfolio.css'

export const Portfolio = () => {

    const allWebsite =[
        {
            link: "https://hazem-moo.github.io/zoma-style/",
            name: "zoma style",
            text: 'this is frist disign with me i creaataed by HTML HTML5 CSS CSS3 react javaScript reactstrap',
            target: "_blank",
            id: 1
        },
        {
            link: "https://hazem-moo.github.io/almdar/",
            name: "almdar",
            text: 'this is news website i creaataed by HTML HTML5 CSS CSS3 react javaScript reactstrap',
            id: 2,
            target: "_blank"
        },
        {
            link: "https://hazem-moo.github.io/combo/",
            name: "combo",
            text: 'this is foot website i creaataed by HTML HTML5 CSS CSS3 react javaScript reactstrap',
            target: "_blank",
            id: 3
        },
        {
            link: "https://hazem-moo.github.io/zoom/",
            name: "zoom",
            text: 'This site is one of my favorite reality for the frying I made i creaataed by HTML HTML5 CSS CSS3 react javaScript reactstrap',
            target: "_blank",
            id: 4
        }
    ]

    const website = allWebsite.map(({ link, name, text, target, id }) => {
        return (
            <Fragment key={ link }>
                <div className='info '>
                    <div> { id } </div>
                    <a name={ name } href={ link } target={ target }> { name } </a>
                    <p className='text-center'> { text } </p>
                </div>
            </Fragment>
        )
    })



    return (
        <div className='portfolio container bg-white'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3> portfolio </h3>
                </div>
                <div className='col-md-6'>
                    { website }
                </div>
            </div>

        </div>
    )
}

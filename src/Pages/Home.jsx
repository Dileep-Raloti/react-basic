import React from 'react'
import MainSection from '../Component/MainSection'
import dd from '../images/d.jpg'

export default function Home() {
    return (
        <div>
            <MainSection 
            imgsrc={dd} 
            smallText='welcome...' 
            h3 = ' Hi From '
            btn='Connect Now'
            link1 = '/about'
            p1="Good to see you here"
            p2 = ''
            />
        </div>
    )
}

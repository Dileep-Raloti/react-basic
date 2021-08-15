import React from 'react'
import MainSection from '../Component/MainSection'
import d from '../images/ddr.jpg'
export default function About() {
    return (
        <div>
             <MainSection 
            imgsrc={d} 
            smallText='welcome...' 
            h3 = ' Hi From '
            btn='Connect Me Now'
            link1 = '/contact'
            p1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus possimus, consectetur suscipit quasi mollitia dolor amet id quis corrupti, dolorum dignissimos, voluptates quas? Rerum cum laboriosam facere quis. Fuga"
            p2='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem nihil commodi rerum cum beatae aperiam, eius veniam porro facilis ratione nesciunt vitae officia perspiciatis id nisi sint expedita repellat'
            />
        </div>
    )
}

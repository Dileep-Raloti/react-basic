import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainSection(props) {
    return (
        <div>
            <section className="main h-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6 order-1 order-lg-2">
                            <div className="box mt-5 mb-5">
                                <h3>{props.h3}<br></br> <span className="my-4">ddr_world</span></h3>
                                <small>{props.smallText}</small>
                                <p>{props.p1}</p>
                                <p>{props.p2}</p>
                                <NavLink to={props.link1} className="linkbtn">{props.btn}   </NavLink>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 order-2 order-lg-1">
                            <div className="box">
                                <a href={props.imgsrc}>  <img className="w-100 mt-5" src={props.imgsrc} alt="img" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

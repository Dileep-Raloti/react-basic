import React from 'react'
import SerCard from '../Component/SerCard'
import Sdata from '../Component/Sdata'

export default function Services() {
    return (
        <div>
            <section className="main">
                <div className="container mt-5">
                    <div className="text-center mb-5 text-uppercase heading" data-aos="fade-up" data-aos-duration="1000">
                        <h3 >service <span>section</span></h3> <br />
                        <small className="mt-4">fill the form & get touch with me</small>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            Sdata.map((val,ind)=>{
                               return  <SerCard  key = {ind}
                                            imgsrc = {val.imgsrc}
                                            title = {val.imgsrc}
                                        />
                            })
                        }
                  
                    </div>
                </div>

            </section>
        </div>
    )
}

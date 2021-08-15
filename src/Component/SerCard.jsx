import React from 'react'
export default function SerCard(props) {
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img className="ser-img" src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{props.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

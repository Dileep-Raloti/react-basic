import React from 'react'

export default function Form() {
    return (
        <div>
             <section className="main">
        <section className="contact-form py-5">
            <div className="heading" data-aos="fade-up" data-aos-duration="1000">
                <h3>Contact <span>Me</span></h3> <br />
                <small className="mt-4">fill the form & get touch with me</small>
            </div>
           <form className="row g-3 needs-validation py-5">
                    <div className="col-md-6" data-aos="fade-right" data-aos-duration="3000">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label >Full Name</label>
                          </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3 " >
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label >Your email</label>
                          </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3" >
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label >Subject</label>
                          </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3 " >
                            <input type="tel" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label >Phone</label>
                          </div>
                    </div>
    
                    <div className="form-floating mb-3" >
                        <textarea   className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label >Comments</label>
                      </div>
                    <div className="py-3" >
                      <button className="btn btn-outline-success mx-auto" type="submit">Send message</button>
                    </div>
              </form>
        </section>
    
      </section>

        </div>
    )
}

import React from 'react'

function Newsletter() {
  return (
    <>
        <section className="newslater-area p-relative pt-120 pb-120" style={{background : "#f7f5f1"}}>
                <div className="animations-01"><img src="assets/img/bg/an-img-07.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-xl-9 col-lg-9">
                            <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5>Newsletter</h5>
                                <h2>
                                    Get Best Offers On The Hotel
                                </h2>
                                <p>With the subscription, enjoy your favourite deals and offers with Square Castle Hotel without having to think about it</p>
                            </div>
                            <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                               <div className="form-group">
                                  <input className="form-control" id="email2" name="email" type="email" placeholder="Your Email Address" value="" required="" /> 
                                  <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                               </div>
                            </form>
                        </div>
                    </div>                   
                </div>
        </section>
    </>
  )
}

export default Newsletter
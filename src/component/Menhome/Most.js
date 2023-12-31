import React from 'react'
import { Link } from 'react-router-dom'
import About from "../../assets/img/bg/an-img-02.png"
import About1 from "../../assets/img/features/about_img_02.png"
import About2 from "../../assets/img/features/about_img_03.png"
import About3 from "../../assets/img/features/signature.png"

function Most() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
                <div className="animations-02"><img src={About} alt="contact-bg-an-02"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                <img src={About1} alt="img"/>   
                                <div className="about-icon">
                                    <img src={About2} alt="img"/>   
                                </div>
                            </div>
                        </div>
					    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content s-about-content  wow fadeInRight  animated pl-30" data-animation="fadeInRight" data-delay=".4s">
                                <div className="about-title second-title pb-25">  
                                    <h5>About Us</h5>
                                    <h2>Most Safe & Rated Hotel In Lagos.</h2>                                   
                                </div>
                                   <p>Seated in the heart of Omole Estate lies our Facility. Omole Estate is one of the safest locations in the city of Lagos with a straight shot drive to the international airport and necessary amenities and fun spots within reach.</p>
                                    <p>The hotel has amazingly private facilities not common to most hotels within reach. At Square Castle you can enjoy our amazing restaurant delicacies, go for a swim in our pool, take a breather and relax at the spa, and have fun at our unique underground lounge.</p>
                                    <div className="about-content3 mt-30">
                                    <div className="row justify-content-center align-items-center">
                                    <div className="col-md-12">
                                        <ul className="green mb-30">                                              
                                            <li> 24 Month / 24,000km Nationwide Warranty monotone</li>
                                            <li> Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</li>     
                                            <li> Customer Rewards Program and excellent technology</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider-btn">                                          
                                            <Link to="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="signature">
                                            <img src={About3} alt="img"/>                                             
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Most
import React from 'react'

const Cta = () => {
  return (
   <section className="section_cta">
                <div className="padding-global is-cta">
                    <div className="container-large">
                        <div className="cta_wrap scroll-slide-left" style={{opacity: 0}}>
                            <div className="card bg-secondary">
                                <div><img
                                        src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/6853430377e44437f9168295_Union.svg"
                                        loading="lazy" alt="" />
                                    <div className="spacer-xlarge"></div>
                                    <h2 className="h3">Ready to Invest in Rwanda?</h2>
                                    <div className="spacer-xlarge"></div>
                                    <div>Let's guide you through every step of your investment journey. Schedule a consultation with our team to discuss your project and regulatory requirements.</div>
                                </div>
                                <div className="spacer">
                                    <div style={{height:"14.5rem"}} className="spacer-desktop"></div>
                                    <div style={{height:"3rem"}} className="spacer-tablet"></div>
                                    <div style={{height:"2rem"}} className="spacer-mobile"></div>
                                </div>
                                <div className="button-wrapper"><a data-wf--button--variant="base"
                                        data-w-id="240aeaf1-8b90-c9f8-b11f-bd4675861a39" href="/contact"
                                        className="button w-inline-block">
                                        <div className="button-content">
                                            <div className="button-text is-one"
                                                style={{transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                                Schedule Consultation</div>
                                            <div className="button-text is-two"
                                                style={{transform: "translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                                                Schedule Consultation</div>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Cta
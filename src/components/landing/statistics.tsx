import React from 'react'

const Statistics = () => {
  return (
    <section className="section_statistic">
                <div className="padding-global padding-section-medium">
                    <div className="container-large">
                        <div className="releted_codes w-embed w-script">
                            <script defer
                                src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-numbercount@1/numbercount.js"></script>
                        </div>
                        <div className="vertical-center">
                            <div className="scroll-slide-top"
                                style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                <div className="tag">About Elev8</div>
                            </div>
                            <div className="spacer-medium"></div>
                            <h2 className="text-align-center scroll-slide-top"
                                style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                Your Gateway to Rwanda's Investment Opportunities</h2>
                            <div className="spacer-medium"></div>
                            <div className="max-width-medium text-align-center">
                                <div className="text-color-secondary scroll-slide-top"
                                    style={{ opacity: 1, transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    Elev8 Advisory & Investment Consultancy is a Rwandan-registered firm providing investment guidance, regulatory support, and local expertise to help foreign investors navigate Rwanda with confidence.</div>
                            </div>
                        </div>
                        <div className="spacer">
                            <div style={{ height: '7.5rem' }} className="spacer-desktop"></div>
                            <div style={{ height: '5rem' }} className="spacer-tablet"></div>
                            <div style={{ height: '3rem' }} className="spacer-mobile"></div>
                        </div>
                        <div className="w-layout-grid statistic_grid is-third">
                            <div className="statistic_item is-center">
                                <div className="scroll-slide-left"
                                    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    Rwanda Business Ranking</div>
                                <div className="statistic_group scroll-slide-left"
                                    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    <div className="font-primary">
                                        <div className="text-2xl text-color-50">#</div>
                                    </div>
                                    <div fs-numbercount-duration="2000" fs-numbercount-element="number"
                                        fs-numbercount-start="0" fs-numbercount-end="1" className="text-number"
                                        role="marquee" aria-roledescription="Number count animation from 0 to 1"
                                        aria-description="Number count animation from 0 to 1">1</div>
                                </div>
                            </div>
                            <div className="statistic_item is-center">
                                <div className="scroll-slide-left"
                                    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    FDI Growth Rate</div>
                                <div className="statistic_group scroll-slide-left"
                                    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    <div fs-numbercount-duration="2000" fs-numbercount-element="number"
                                        fs-numbercount-start="0" fs-numbercount-end="38" className="text-number"
                                        role="marquee" aria-roledescription="Number count animation from 0 to 38"
                                        aria-description="Number count animation from 0 to 38">38</div>
                                    <div className="font-primary">
                                        <div className="text-2xl text-color-50">%</div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_45a92d68-9070-67dd-370c-f6f319fb6cb2-63a64deb"
                                className="statistic_item is-center">
                                <div className="scroll-slide-left"
                                    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    Mining Sector Value</div>
                                <div className="statistic_group scroll-slide-left"
                                    style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    <div className="font-primary">
                                        <div className="text-2xl text-color-50">$</div>
                                    </div>
                                    <div fs-numbercount-duration="2000" fs-numbercount-element="number"
                                        fs-numbercount-start="0" fs-numbercount-end="500" className="text-number"
                                        role="marquee" aria-roledescription="Number count animation from 0 to 500"
                                        aria-description="Number count animation from 0 to 500">500</div>
                                    <div className="font-primary">
                                        <div className="text-2xl text-color-50">M+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Statistics

export default function About(){
    return(
        <section id="about-section" className="page bg-style1">
            <div className="page-header-wrapper">
                <div className="container">
                    <div className="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
                        <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
                        <div className="devider"></div>
                        <p className="subtitle">little information</p>
                    </div>
                </div>
            </div>
            <div className="rotate-box-1-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
                                <span className="rotate-box-icon"><i className="fa fa-users"></i></span>
                                <div className="rotate-box-info">
                                    <h4>Who We Are?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
                                <span className="rotate-box-icon"><i className="fa fa-diamond"></i></span>
                                <div className="rotate-box-info">
                                    <h4>What We Do?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
                                <span className="rotate-box-icon"><i className="fa fa-heart"></i></span>
                                <div className="rotate-box-info">
                                    <h4>Why We Do It?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-3 col-sm-6">
                            <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.6s">
                                <span className="rotate-box-icon"><i className="fa fa-clock-o"></i></span>
                                <div className="rotate-box-info">
                                    <h4>Since When?</h4>
                                    <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
                                </div>
                            </a>
                        </div>
                        
                    </div> 
                </div> 
            </div>
            
            <div className="extra-space-l"></div>
        </section>
    )
}
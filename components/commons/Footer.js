export default function Footer(){
  return(
    <>
      <footer className="text-off-white">
        <div className="footer-top">
          <div className="container">
              <div className="row wow bounceInLeft" data-wow-delay="0.4s">

                    <div className="col-sm-6 col-md-4">
                      <h4>Useful Links</h4>
                        <ul className="imp-links">
                          <li><a href="#">About</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Press</a></li>
                          <li><a href="#">Copyright</a></li>
                          <li><a href="#">Advertise</a></li>
                          <li><a href="#">Legal</a></li>
                        </ul>
                    </div>
                
                  <div className="col-sm-6 col-md-4">
                      <h4>Subscribe</h4>
                      <div id="footer_signup">
                          <div id="email">
                            <form id="subscribe" method="POST">
                              <input type="text" placeholder="Enter email address" name="email" id="address" data-validate="validate(required, email)"/>
                              <button type="submit">Submit</button>
                              <span id="result" className="section-description"></span>
                            </form> 
                          </div>
                        </div> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <h4>Recent Tweets</h4>
                        <div className="single-tweet">
                          <div className="tweet-content"><span>@Unika</span> Excepteur sint occaecat cupidatat non proident</div>
                          <div className="tweet-date">1 Hour ago</div>
                        </div>
                        <div className="single-tweet">
                          <div className="tweet-content"><span>@Unika</span> Excepteur sint occaecat cupidatat non proident uku shumaru</div>
                          <div className="tweet-date">1 Hour ago</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="footer">
            <div className="container text-center wow fadeIn" data-wow-delay="0.4s">
              <p className="copyright">Copyright &copy; 2015 - Designed By <a href="https://www.behance.net/poljakova" className="theme-author">Veronika Poljakova</a> &amp; Developed by <a href="http://www.imransdesign.com/" className="theme-author">Imransdesign</a></p>
            </div>
        </div>
      </footer>
    </>
  )
}
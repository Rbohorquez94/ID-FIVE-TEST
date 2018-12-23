import React, { Component } from 'react';
//import the testimonials
import Testimonials from "../components/testimonials";
import SideBar from "../components/sidebar";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <header>
            <div className="overall">
              <nav>
                <ul>
                <li className="logo"><img src={require('../logo.svg')} width="100%"/></li>
                <li className="label"><h1>MENU</h1><div id="page-wrap"></div></li>
                </ul>
              </nav>
              <div className="header-data">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <button className="header-button">CTA Button</button>
                <a className="scroll-down" href="#"><i class="fa fa-chevron-down animated" aria-hidden="true"></i></a>
              </div>
           </div>
          </header>
         
        <section className="container-text">
         <div>
            <p className="text-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet
            pharetra ex. Ut eu feugiat magna. Sed fermentum sem ut fermentum
            fermentum. Duis dolor velit, dictum id imperdiet nec, lobortis a dolor.
            Curabitur non eros condimentum.</p>
         </div>
        </section>

          <section className="container">
            <div className="cards">
                <div>
                   <div className="icons">
                   <img src={require('../images/speech-bubbles.svg')} width="100%"/>
                   </div>
                    <div className="content">
                        <img src={require('../images/img1.png')} width="100%"/>
                        <p className="text-images"><b>Lorem ipsum dolor sit amet</b></p>
                    </div>
                </div>
            </div>

            <div className="cards">
                <div>
                   <div className="icons">
                    <img src={require('../images/paper-plane.svg')} width="100%"/>
                   </div>
                    <div className="content">
                        <img src={require('../images/img2.png')} width="100%"/>
                        <p className="text-images"><b>Lorem ipsum dolor sit amet</b></p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div>
                   <div className="icons">
                   <img src={require('../images/rocket.svg')} width="100%"/>
                   </div>
                    <div className="content">
                       <img src={require('../images/img3.png')} width="100%"/>
                       <p className="text-images"><b>Lorem ipsum dolor sit amet</b></p>
                    </div>
                </div>
            </div>
          </section>

          <section className="img-section">
                  <div className="col-1">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet pharetra ex. Ut eu feugiat magna. Sed fermentum sem ut
        fermentum fermentum. Duis dolor velit, dictum id imperdiet nec, lobortis a dolor. Curabitur non eros condimentum</p>
                  </div>
                  <div className="col-2">
                      <button className="section-button">CTA Button</button>
                  </div>
          </section>


          <section className="dual-card section-desktop">
              <div>
                  <p className="padding-dual-card"><h1>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vitae convallis
                    turpis. Nam hendrerit euismod lorem
                    interdum tempus.</h1></p>
              </div>
              <div>
                  <img src={require('../images/sectionimg1.png')}/>
              </div>
          </section>
                            
        <section className="dual-card section-desktop">
              <div>
                  <img src={require('../images/sectionimg2.png')}/>
              </div>    
              <div>
                  <p className="padding-dual-card"><h1>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vitae convallis
                    turpis. Nam hendrerit euismod lorem
                    interdum tempus.</h1></p>
              </div>
          </section>

        <section className="dual-card section-mobile">
              <div>
                  <img src={require('../images/sectionimg1.png')}/>
              </div>
              <div>
                  <p className="padding-dual-card"><h1>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vitae convallis
                    turpis. Nam hendrerit euismod lorem
                    interdum tempus.</h1></p>
              </div>
          </section>
                            
        <section className="dual-card section-mobile">
              <div>
                  <img src={require('../images/sectionimg2.png')}/>
              </div>    
              <div>
                  <p className="padding-dual-card"><h1>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus vitae convallis
                    turpis. Nam hendrerit euismod lorem
                    interdum tempus.</h1></p>
              </div>
          </section>
      
        <footer>
            <div>
                <ul>
                    <li><p className="title"><img src={require('../logo.svg')} width="100%"/></p></li>
                    <li><p>81 Mosher Street, Third Floor
                    Baltimore, Maryland 21217
                    410.837.5555</p></li>
                    <li><p><b>Contact Us
                    Employment Opportunities
                    Privacy Policy</b></p></li>
                    <li><p><img className="img-social" src={require('../images/facebook.png')}/>&nbsp;&nbsp;<img className="img-social" src={require('../images/twitter.png')}/></p>
                    <p>Copyright © 2009-2018.
                    All rights reserved.</p></li>
                </ul>
            </div>
        </footer>
     
      </div>

      
    );
  }
}

export default Main;

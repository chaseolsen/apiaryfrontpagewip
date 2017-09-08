import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

// Life Cycles
  componentWillMount(){

  }

  componentDidMount(){
  }


  render() {
    return (
      <div>
        <Navbar />
          <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            {/* <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol> */}
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src="./images/shawnjumbo.jpg" alt="Image 1" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src="./images/natejumbo.jpg" alt="Image 2" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src="./images/ronjumbo.jpg" alt="Image 3" style={{width: '100%'}} />
              </div>
            </div>
            {/* Left and right controls */}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* END Carousel */}
          <img className="jumbofooter" src="./images/headerswoosh1.png" width="100%" />
          <div className="container learntotrade">
            {/* <p class="apiaryheader" style="color: #258DCC; width: 100%">APIARY<span style="color: #8CC538;">FUND</span></p> */}
            <img className="topBrand" src="./images/apiaryfundlogo.png.png"/>
            <img src="./images/learnhowtotrade.png" style={{width: '80%', marginBottom: 20, marginTop: 30}} />
            <p className="lightpara" /><h2 style={{color: '#a8a8a8'}}>Learn from Apiary's currency market experts &amp; join the thousands who are taking control of their financial future!</h2><p />
            <div className="signupdiv">
              {/* Trigger/Open The Modal */}
              <span style={{color: '#8CC538', fontSize: 36}}><button id="myBtn" className="btn signup">SIGN UP</button> FOR A FREE 30-DAY TRIAL</span><br />
            </div>
          </div>
          {/* The Modal */}
          <div id="myModal" className="modal">
            {/* Modal content */}
            <div className="modal-content">
              <div className="modal-header">
                <span className="close">×</span>
                <h2>Modal Header</h2>
              </div>
              <div className="modal-body">
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
              </div>
              <div className="modal-footer">
                <h3>Modal Footer</h3>
              </div>
            </div>
          </div>
          <div className="takecontroldiv">
            <div className="takecontrolheader"><h1>TAKE CONTROL OF YOUR FINANCIAL FUTURE</h1></div>
            <div className="takecontrolsmallheader"><h3>Watch these short videos to find out what Apiary Fund is about!</h3></div>
            <img src="./images/whatisapiary.png" style={{width: '70%', marginBottom: 40, textAlign: 'center'}} />
            <div className="takecontrolpara">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
          <div className="container worldclass">
            <div className="worldclassheader"><h1>WORLD CLASS MARKET TRAINING</h1></div>
            <div className="worldclasssmallheader"><h3>From beginners to season professionals, Apiary Fun has you covered!</h3></div>
            <div className="likeapro"><h3>Learn to trade like a pro.</h3></div>
            <div className="likeapropara"><h4>Every day, thousands of dollars are lost by people who don't know what they're doing in the market. If you want to learn how to trade but are nervous about losing your money in the market, then Apiary is the place to be.</h4></div>
            <div className="row imagerow">
              <div className="col-md-4">
                <img src="./images/experttraders.png" />
                <h4 className="imagehead"><i className="fa fa-book fa-lg" aria-hidden="true" /> Expert Traders</h4>
                <p className="imagepara">Apiary’s Expert Traders teach you everything you need to know about trading in the FOREX market!</p>
              </div>
              <div className="col-md-4">
                <img src="./images/completeinstructions.png" />
                <h4 className="imagehead"><i className="fa fa-server fa-lg" aria-hidden="true" /> Complete Instruction</h4>
                <p className="imagepara">Courses for all levels! From the essentials to advanced trading systems, Apiary’s has you covered.</p>
              </div>
              <div className="col-md-4">
                <img src="./images/experttraders.png" />
                <h4 className="imagehead"><i className="fa fa-calendar fa-lg" aria-hidden="true" /> Set Your Own Pace</h4>
                <p className="imagepara">Apiary’s easy to follow training modules allow you to learn at your own pace. With desktop and mobile support, you can learn from anywhere, whenever you have time!</p>
              </div>
            </div>
          </div>
          <div className="alveo">
            <img src="./images/alveo.png" style={{width: '70%'}} />
          </div>
          <div className="ourmoneywrap">
            <div className="container ourmoney">
              <div className="ourmoneyheader">
                TRADE WITH OUR MONEY
              </div>
              <div className="ourmoneysmallheader">
                Get FUNDED and keep up to 70% of your trade profits!
              </div>
              <div className="col-md-4 processcard">
                <img src="./images/apiarymoney.png" />
                <br />
                <div className="processpara">
                  <span style={{color: '#8CC538'}}><img src="./images/one.png" /> Use Apiary Fund’s Money</span>
                </div>
              </div>
              <div className="col-md-4 processcard">
                <img src="./images/norisk.png" />
                <br />
                <div className="processpara">
                  <span style={{color: '#8CC538'}}><img src="./images/two.png" /> No Risk To You</span>
                </div>
              </div>
              <div className="col-md-4 processcard">
                <img src="./images/takeprofit.png" />
                <br />
                <div className="processpara">
                  <span style={{color: '#8CC538'}}><img src="./images/three.png" /> Take Home Profit!</span>
                </div>
              </div>
            </div>
          </div>
          <div className="beelinetofunding">
            <div className="container">
              <img src="./images/beelinetofunding.png" style={{width: '50vw', position: 'relative', top: '-40px'}} />
              <div className="beelineheader">
                Track your progress and earn achievements with Beeline to Funding!
              </div>
              <div className="row">
                {/* <div class="col-md-3">
            <img src="./images/copper.png">
          </div>
          <div class="col-md-3">
            <img src="./images/bronze.png">
          </div>
          <div class="col-md-3">
            <img src="./images/silver.png">
          </div>
          <div class="col-md-3">
            <img src="./images/gold.png">
          </div> */}
                <img src="./images/badges.png" width="100%" />
              </div>
              <div className="beelinefooter">
                All Apiary Fund members unlock funding at GOLD III
              </div>
            </div>
          </div>
          {/* TESTIMONIAL PLACE HOLDER */}
          {/* Carousel */}
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            {/* <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol> */}
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src="#" alt="Image 1" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src="chicago.jpg" alt="Image 2" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src="ny.jpg" alt="Image 3" style={{width: '100%'}} />
              </div>
            </div>
            {/* Left and right controls */}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* END Carousel */}
          <div className="starttrading">
            CHOOSE YOUR PLAN &amp; START TRAINING TODAY!
          </div>
          <div className="chooseplan">
            <div className="container">
              <img src="./images/buyoptions.png" style={{width: '90%'}} />
            </div>
          </div>
          <div className="footerswoosh">
            <img src="./images/footerswoosh2.png" style={{width: '100%'}} />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

import React from 'react';

export default class Footer extends React.Component {

constructor(){
  super();
  this.state = {
  }
}

componentWillMount(){
}

componentDidMount(){
}

componentWillUnmount(){
}

  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={{textAlign: 'center'}}>
              <img className="bottomapiary" src="./images/apiaryfundlogo.png" alt="Apiary Fund" />
            </div>
            {/* Header and Social Links */}
            <div className="col-md-6" style={{textAlign: 'center', paddingTop: 10}}>
              <img src="./images/facebook.png" style={{padding: '0px 5px 0px 5px'}} />
              <img src="./images/twitter.png" style={{padding: '0px 5px 0px 5px'}} />
              <img src="./images/instagram.png" style={{padding: '0px 5px 0px 5px'}} />
              <img src="./images/linkedin.png" style={{padding: '0px 5px 0px 5px'}} />
              <img src="./images/youtube.png" style={{padding: '0px 5px 0px 5px'}} />
            </div>
          </div>
          {/*  */}
          <div className="row" style={{textAlign: 'center', paddingTop: 30}}>
            <div className="col-md-6" style={{color: 'white'}}>
              <h4 style={{marginBottom: 5}}>LINKS</h4>
              <div className="greenbar">
              </div>
              <h6 style={{paddingTop: 20}}>APIARY FUND</h6>
              <h6 style={{paddingTop: 10}}>TRADER DEVELOPMENT</h6>
              <h6 style={{paddingTop: 10}}>ALVEO TRADING</h6>
              <h6 style={{paddingTop: 10}}>APIARY SIGNALS</h6>
              <h6 style={{paddingTop: 10}}>ABOUT US</h6>
              <h6 style={{paddingTop: 10}}>APIARY BLOG</h6>
              <h6 style={{paddingTop: 10}}>TERMS &amp; CONDITIONS</h6>
              <h6 style={{paddingTop: 10, paddingBottom: 20}}>PRIVACY POLICY</h6>
            </div>
            <div className="col-md-6" style={{color: 'white'}}>
              <h4 style={{marginBottom: 5}}>FACEBOOK</h4>
              <div className="greenbar">
              </div>
              {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/apiaryfund/%2Ffacebook&tabs=timeline&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>  </div> */}
            </div>
            <div className="row" style={{textAlign: 'center', color: 'white'}}>
              <div className="col-md-6">
                <h4 href="#" data-toggle="collapse" data-target="#dropdown" style={{marginBottom: 5}}><i className="fa fa-caret-down" aria-hidden="true" /> DISCLAIMERS</h4>
                <div className="greenbar">
                </div>
              </div>
            </div>
            <div id="dropdown" className="collapse" style={{color: 'white'}}>
              FOREX DISCLAIMER
              <p style={{fontSize: 12}}>
                Before deciding to participate in the Forex market, you should carefully consider your investment objectives, level of experience and risk tolerance. Most importantly, do not invest money you cannot afford to lose.There is considerable exposure to risk in any off-exchange foreign exchange transaction, including, but not limited to, leverage, creditworthiness, limited regulatory protection and market volatility that may substantially affect the price, or liquidity of a currency or currency pair. The leveraged nature of forex trading means that any market movement will have an equally proportional effect on your deposited funds. This may work against you as well as for you. The possibility exists that you could sustain a total loss of initial margin funds and be required to deposit additional funds to maintain your position. If you fail to meet any margin requirement, your position may be liquidated and you will be responsible for any resulting losses.
              </p>
              SITE DISCLAIMER
              <p style={{fontSize: 12}}>
                Before deciding to participate in the Forex market, you should carefully consider your investment objectives, level of experience and risk tolerance. Most importantly, do not invest money you cannot afford to lose.There is considerable exposure to risk in any off-exchange foreign exchange transaction, including, but not limited to, leverage, creditworthiness, limited regulatory protection and market volatility that may substantially affect the price, or liquidity of a currency or currency pair. The leveraged nature of forex trading means that any market movement will have an equally proportional effect on your deposited funds. This may work against you as well as for you. The possibility exists that you could sustain a total loss of initial margin funds and be required to deposit additional funds to maintain your position. If you fail to meet any margin requirement, your position may be liquidated and you will be responsible for any resulting losses.
              </p>
              SOFTWARE DISCLAIMER
              <p style={{fontSize: 12}}>
                There are risks associated with utilizing an Internet-based trading system including, but not limited to, the failure of hardware, software, and Internet connection. Apiary is not responsible for communication failures or delays when trading via the Internet.
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

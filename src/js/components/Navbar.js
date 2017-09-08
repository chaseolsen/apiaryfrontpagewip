import React from 'react';

export default class Navbar extends React.Component {

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
      <div className="navContainer">
        <nav className="navbar nav-green navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar3">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#"><img src="./images/apiaryfundlogo.png" alt="Apiary Fund" />
              </a>
            </div>
            <div id="navbar3" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                {/* <li class="active"><a href="#">HOME</a></li> */}
                <li><a href="#">FEATURES</a></li>
                <li><a href="#">REVIEWS</a></li>
                <li><a href="#">SIGNUP</a></li>
                <li><a href="#">PRICING</a></li>
                {/* <li><a href="#">BLOG</a></li> */}
                <li><a href="#">LOGIN</a></li>
                {/* <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li class="dropdown-header">Nav header</li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li> */}
              </ul>
            </div>
            {/*/.nav-collapse */}
          </div>
          {/*/.container-fluid */}
        </nav>
      </div>

    );
  }
}

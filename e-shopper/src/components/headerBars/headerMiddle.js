import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BarMiddle = () => {
    return (
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 clearfix">
              <div className="logo pull-left">
                <a href="index.html">
                  <img src="images/home/logo.png" alt="" />
                </a>
              </div>
              <div className="btn-group pull-right clearfix">
                <div className="btn-group">
                  <DropdownButton id="dropdown-basic-button" style={{marginRight:'5px'}} title="USA" >
                    <ul>
                      <li>
                        <Dropdown.Item href="#/action-1">Canada</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#/action-2">UK</Dropdown.Item>
                      </li>
                    </ul>
                  </DropdownButton>
                  {/* <button
                    type="button"
                    className="btn btn-default dropdown-toggle usa"
                    data-toggle="dropdown"
                  >
                    USA
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="">Canada</a>
                    </li>
                    <li>
                      <a href="">UK</a>
                    </li>
                  </ul> */}
                </div>

                <div className="btn-group">
                  <DropdownButton id="dropdown-basic-button" title="Dollar">
                    <ul>
                      <li>
                        <Dropdown.Item href="#/action-1">
                          Canadian Dollar
                        </Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#/action-2">Pound</Dropdown.Item>
                      </li>
                    </ul>
                  </DropdownButton>

                  {/* <button
                    type="button"
                    className="btn btn-default dropdown-toggle usa"
                    data-toggle="dropdown"
                  >
                    DOLLAR
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="">Canadian Dollar</a>
                    </li>
                    <li>
                      <a href="">Pound</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-md-8 clearfix">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="">
                      <i className="fa fa-user"></i> Account
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-star"></i> Wishlist
                    </a>
                  </li>
                  <li>
                    <Link to={`/shop/checkout`}>
                      <i className="fa fa-crosshairs"></i> Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to={`/shop/cart`}>
                      <i className="fa fa-shopping-cart"></i> Cart
                    </Link>
                  </li>
                  <li>
                    <Link to={`/shop/login`}>
                      <i className="fa fa-lock"></i> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BarMiddle;
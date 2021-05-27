import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

const Leftbar = () => {


    return (
      <>
        <div className="col-sm-3">
          <div className="left-sidebar">
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">
              <div className="panel panel-default">
                <Accordion>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#sportswear"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus"></i>
                          </span>
                          Sportswear
                        </a>
                      </h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ul>
                      <li>
                        <a href="">Nike </a>
                      </li>
                      <li>
                        <a href="">Under Armour </a>
                      </li>
                      <li>
                        <a href="">Adidas </a>
                      </li>
                      <li>
                        <a href="">Puma</a>
                      </li>
                      <li>
                        <a href="">ASICS </a>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
                <Accordion>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#mens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus"></i>
                          </span>
                          Mens
                        </a>
                      </h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ul>
                      <li>
                        <a href="">Fendi</a>
                      </li>
                      <li>
                        <a href="">Guess</a>
                      </li>
                      <li>
                        <a href="">Valentino</a>
                      </li>
                      <li>
                        <a href="">Dior</a>
                      </li>
                      <li>
                        <a href="">Versace</a>
                      </li>
                      <li>
                        <a href="">Armani</a>
                      </li>
                      <li>
                        <a href="">Prada</a>
                      </li>
                      <li>
                        <a href="">Dolce and Gabbana</a>
                      </li>
                      <li>
                        <a href="">Chanel</a>
                      </li>
                      <li>
                        <a href="">Gucci</a>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
                <Accordion>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#womens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus"></i>
                          </span>
                          Womens
                        </a>
                      </h4>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ul>
                      <li>
                        <a href="">Fendi</a>
                      </li>
                      <li>
                        <a href="">Guess</a>
                      </li>
                      <li>
                        <a href="">Valentino</a>
                      </li>
                      <li>
                        <a href="">Dior</a>
                      </li>
                      <li>
                        <a href="">Versace</a>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                  <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Kids</a>
                        </h4>
                      </div>
                    </Accordion.Toggle>
                  </Accordion>
                  <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Fashion</a>
                        </h4>
                      </div>
                    </Accordion.Toggle>
                  </Accordion>
                  <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Households</a>
                        </h4>
                      </div>
                    </Accordion.Toggle>
                  </Accordion>
                  <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Interiors</a>
                        </h4>
                      </div>
                    </Accordion.Toggle>
                  </Accordion>
                  <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Clothing</a>
                        </h4>
                      </div>
                    </Accordion.Toggle>
                  </Accordion>
                  <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Bags</a>
                        </h4>
                      </div>
                    </Accordion.Toggle>
                  </Accordion>
                  <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">Shoes</a>
                        </h4>
                      </div>
                    </Accordion.Toggle>
                  </Accordion>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="brands_products">
            <h2 style={{ color: "#696763" }}>Brands</h2>
            <div className="brands-name">
              <ul className="nav nav-pills nav-stacked">
                <li>
                  <a href="">
                    <span className="pull-right">(50)</span>Acne
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="pull-right">(56)</span>Grüne Erde
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="pull-right">(27)</span>Albiro
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="pull-right">(32)</span>Ronhill
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="pull-right">(5)</span>Oddmolly
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="pull-right">(9)</span>Boudestijn
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="pull-right">(4)</span>Rösch creative
                    culture
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="price-range">
            <h2>Price Range</h2>
            <div className="well">
              <input
                type="range"
                className="span2"
                data-slider-min="0"
                data-slider-max="600"
                data-slider-step="5"
                data-slider-value="[250,450]"
                id="sl2"
              />
              <br />
              <b>$ 0</b> <b className="pull-right">$ 600</b>
            </div>
          </div>

          <div className="shipping text-center">
            <img src="../images/home/shipping.jpg" alt="" />
          </div>
        </div>

        {/* <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/* <div className="col-sm-3">
        <div className="left-sidebar">
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">
			<div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">

                            <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
							Sportswear
						</a>
                        </h4>
                    </div>
                    <div id="sportswear" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul>
                                <li><a href="">Nike </a></li>
                                <li><a href="">Under Armour </a></li>
                                <li><a href="">Adidas </a></li>
                                <li><a href="">Puma</a></li>
                                <li><a href="">ASICS </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
							Mens
						</a>
                        </h4>
                    </div>
                    <div id="mens" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul>
                                <li><a href="">Fendi</a></li>
                                <li><a href="">Guess</a></li>
                                <li><a href="">Valentino</a></li>
                                <li><a href="">Dior</a></li>
                                <li><a href="">Versace</a></li>
                                <li><a href="">Armani</a></li>
                                <li><a href="">Prada</a></li>
                                <li><a href="">Dolce and Gabbana</a></li>
                                <li><a href="">Chanel</a></li>
                                <li><a href="">Gucci</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
							Womens
						</a>
                    </h4>
                </div>
                <div id="womens" className="panel-collapse collapse">
                    <div className="panel-body">
                        <ul>
                            <li><a href="">Fendi</a></li>
                            <li><a href="">Guess</a></li>
                            <li><a href="">Valentino</a></li>
                            <li><a href="">Dior</a></li>
                            <li><a href="">Versace</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Kids</a></h4>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Fashion</a></h4>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Households</a></h4>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Interiors</a></h4>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Clothing</a></h4>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Bags</a></h4>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><a href="#">Shoes</a></h4>
                </div>
            </div>
        </div>

		<div className="brands_products">
			<h2>Brands</h2>
                <div className="brands-name">
                    <ul className="nav nav-pills nav-stacked">
                        <li><a href=""> <span className="pull-right">(50)</span>Acne</a></li>
                        <li><a href=""> <span className="pull-right">(56)</span>Grüne Erde</a></li>
                        <li><a href=""> <span className="pull-right">(27)</span>Albiro</a></li>
                        <li><a href=""> <span className="pull-right">(32)</span>Ronhill</a></li>
                        <li><a href=""> <span className="pull-right">(5)</span>Oddmolly</a></li>
                        <li><a href=""> <span className="pull-right">(9)</span>Boudestijn</a></li>
                        <li><a href=""> <span className="pull-right">(4)</span>Rösch creative culture</a></li>
                    </ul>
                </div>
            </div>

			<div className="price-range">
				<h2>Price Range</h2>
                    <div className="well">
                        <input type="text" className="span2" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                            <b>$ 0</b> <b className="pull-right">$ 600</b>
				</div>
                    </div>

			<div className="shipping text-center">
		<img src="../images/home/shipping.jpg" alt="" />
            </div>

		</div>
    </div> */}
      </>
    );
};

export default Leftbar;
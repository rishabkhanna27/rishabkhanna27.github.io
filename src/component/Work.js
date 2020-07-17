import React,{ Component } from 'react';
import image from '../assets/work.svg';
import { Button, Card } from 'react-bootstrap';
import { Footer } from './Footer';

export class Work extends Component{
    render(){
        return(
            <div className="Work">
                <div className="parallax2">
                    <div className="text-container">
                    <div className="intro">
                        <p className="intro1">MY PROJECTS<p className="create">I Create blah blah blah</p></p>
                        
                        <div  className="intro2"><img className="picture" src={image} alt="imageing"></img></div>
                        <div className="car">
                        <div class="projectbutton2"><Button href="#head2" className="btnn" variant="info">Game<br></br>Projects</Button></div>
                        <div class="projectbutton1"><Button href="#head1" className="btnn" variant="info">Complete<br></br>Projects</Button></div>
                        <div class="projectbutton3"><Button href="#head3" className="btnn" variant="info">Base<br></br>Projects</Button></div>
                        </div>
                        </div>
                </div>
                </div>
                <div id="overview">
                    <div id="head1" className="complete1">
                        <div className="heading1">Complete Projects</div>
                        <div class="complete2">
                            <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card>
                        </div>
                        <div class="complete3">
                        <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card>
                        </div>
                        <div class="complete4">
                        <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card>
                        </div>
                        <div class="complete5">
                        <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card>
                        </div>
                    </div>
                <div className="parallax3"></div>
                    <div id="head2" className="game1">
                        <div className="heading2">Game Projects</div>
                        <div class="game2">
                        <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card>
                        </div>
                        <div class="game3">
                        <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card>
                        </div>
                        <div class="game4">
                        <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card>
                        </div>
                    </div>
                <div className="parallax4"></div>
                    <div id="head3" className="base1">
                        <div className="heading3">Base Projects</div>
                        <div class="base2"><Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card></div>
                        <div class="base3"><Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card></div>
                        <div class="base4"><Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card></div>
                        <div class="base5"><Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card></div>
                        <div class="base6"><Card style={{ width: '19rem' }}>
                              <Card.Img variant="top" src="holder.js/100px200" />
                              <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card title and make up the bulk of
                                  the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Card></div>
                    </div>
                <Footer/>
                </div>
            </div>
        );
    }
}
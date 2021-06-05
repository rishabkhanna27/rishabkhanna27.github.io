import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/wash.png';
import image2 from '../assets/cook.png';
import image3 from '../assets/music.png';
import { Button, Card } from 'react-bootstrap';

export class Work2 extends Component{
    render(){
        return(
            <div className="Work">

        <div id="head1" className="complete1">
            <div className="heading1">Complete Projects</div>
            <div className="complet">
                <div className="right-box1"><img className="pictu" src={image1} alt="imageing"/></div>
                <div className="left-box1">2</div>
            </div>
            <div className="complet">
                <div className="right-box1">1</div>
                <div className="left-box1"><img className="pictu" src={image2} alt="imageing"/></div>
            </div>
            <div className="complet">
                <div className="right-box1"><img className="pictu" src={image3} alt="imageing"/></div>
                <div className="left-box1">2</div>
            </div>
            </div>
            <div className="parallax3"></div>
            <div id="head2" className="game1">
            <div className="heading2">Game Projects</div>
            <div className="game2">
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
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
            </div>
            <div className="game3">
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
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
            </div>
            <div className="game4">
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
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
            </div>
            </div>
            <div className="parallax4"></div>



            <div id="head3" className="base1">
            <div className="heading3">Base Projects</div>
            <div className="base2"><Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src="holder.js/100px200" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
                </div>
            <div className="base3"><Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src="holder.js/100px200" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
                </div>
            <div className="base4"><Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src="holder.js/100px200" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
                </div>
            <div className="base5"><Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src="holder.js/100px200" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
                </div>
            <div className="base6"><Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src="holder.js/100px200" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Link to="/sign" className="btn btn-light"></Link>
                </Card>
                </div>
            <div className="base7"><Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src="holder.js/100px200" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
            </div>
            </div>
            <div className="parallax5"></div>
            <div id="head2" className="game1">
            <div className="heading2">Arduino Projects</div>
            <div className="game2">
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
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
            </div>
            <div className="game3">
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
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
            </div>
            <div className="game4">
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
                <Link to = "#" className="btn btn-light"></Link>
                </Card>
            </div>
            </div>
            </div>
        );
    }
}
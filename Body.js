import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';
import './Project.css';


class Body extends Component {
    render() {
        

        return(
            <div className="container-fluid body-top">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12 text-div">
                        <h2 className="giving">Giving is a Virtue</h2>
                        <p class="mission-first">LOVE. COMPASSION. CHARITY</p>
                        <p>Project Charity is a non-profit dedicated to blah blah blah 
                        blah blah blah blah blah blah blah blah blah blah blah blah 
                        blah blah blah blah blah blah blah blah blah blah blah blah
                        </p>
                        {/* <a href="#" className="donate yeah">DONATE</a> */}
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 image-div">
                        <img src={require('./cross.jpg').default} className="body-image"></img>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="stats">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <h2 className="stats-numbers">200+</h2>
                                <p className="stats-text">VOLUNTEER HOURS</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <h2 className="stats-numbers">1,000</h2>
                                <p className="stats-text">CHILDREN REACHED</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <h2 className="stats-numbers">20</h2>
                                <p className="stats-texts">COMMUNITIES SERVED</p>
                            </div>
                            <p className="stats-update">UPDATED NOV 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Body
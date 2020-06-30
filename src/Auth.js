import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import { withTranslation, Trans } from 'react-i18next';

import {Button, Container, Row} from 'react-bootstrap';

import './assets/css/gradients.css';
import './assets/css/general.css';
import './assets/css/buttons.css';

class Auth extends React.Component {

    constructor(){
        super();

        this.state = {
            pageTitle: <Trans i18nKey='auth.title'></Trans>,
            firstLaunch: "false",
        }
    }

    handler = (value) => {
        this.props.getChildClick(value);
    }

    render() {

        const container = {
            background: 'none'
        }

        const bkg = {
            minHeight:'100vh'
        }
        
        return (
            <div style={bkg} className="App rootStyle m-0 p-0">
                <div id="pag e-content-wrapper m-0 p-0">

                    <a className=" align-center w-100 m-0 p-0" style={{color:'white', fontWeight:'bold', fontSize:'2em'}}>
                        <Trans i18nKey="">{this.props.title}</Trans>
                    </a>

                    <div>

                        <div className="">
                            <img className="mx-auto my-3" src={require('./assets/img/gclogo.png')} width={'97.35dp'} height={'104.15dp'} />
                        </div>
                        <img className="mx-auto my-3 img-responsive p-0 m-0" src={require('./assets/img/hero.png')} width={'362dp'} height={'177dp'} />

                        <Container style={container} fluid>
                            <Row>
                                <button className="w-100 my-3 GenericPlayBtn">
                                    <Trans i18nKey="auth.signup"></Trans>
                                </button>
                            </Row>

                            <hr style={{borderWidth:'2'}} />

                            <Row>
                                <button className="w-100 my-3 socialBtns">
                                    <Trans i18nKey="auth.facebookup"></Trans>
                                </button>
                            </Row>
                            <Row>    
                                <button  onClick={() => this.handler(false)} className="w-100 my-3 socialBtns">
                                    <Trans i18nKey="auth.googleup"></Trans>
                                </button>
                            </Row>
                            <Row className="my-5 justify-content-center">
                                <Router>
                                    <p className="" style={{color:'white', fontSize:'12sp', lineHeight:'18sp', fontWeight:'bold'}}>Already have an account? <Link className="linkColor" to={`Auth`}>Sign in!</Link></p>
                                </Router>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(Auth);
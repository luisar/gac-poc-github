import React from 'react';
import $ from 'jquery';
import { withTranslation, Trans } from 'react-i18next';
import { AsyncStorage } from 'AsyncStorage';

import LoyaltyIcon from '@material-ui/icons/Loyalty';

import ContentTopNav from './ContentTopNav';

import './assets/css/gradients.css';
import './assets/css/general.css';
import './assets/css/buttons.css';

const styles = {
    textfield: {
      borderRadius: 1,
      fontWeight: 'bold',
      color: 'white',
      height: 48,
      width: '150dp',
      background: 'none',
      borderColor: '#50fbdb',
    }
    
  };

class Referral extends React.Component {

    constructor(){
        super();

        this.state = {
            pageTitle: <Trans i18nKey='referral.title'></Trans>,
            firstLaunch: "false",
            notReferred: false
        }
    }

    componentDidMount(){

        AsyncStorage.getItem("referred").then(value => {
            if(value == null){
                AsyncStorage.setItem("referred", "true");
                console.log(true);
                this.setState({
                    notReferred: true
                });
            }else{
                console.log(false);
                this.setState({
                    notReferred: false
                });
            }
        });

        AsyncStorage.getItem("firstLoadGeta").then(value => {
            if(value == null){
                AsyncStorage.setItem("firstLoadGeta", "true");
                this.setState({
                    notReferred: true
                });
            }else{
                this.setState({
                    notReferred: false
                });
                $("#wrapper").toggleClass("toggled");
            }
        });

        $("#menu-toggle").click(function (e) {
             e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }

    handler = (value) => {
        this.props.getChildClick(value);
    }

    render() {

        const container = {
            background: 'none'
        }
        
        return (
            <div className="App rootStyle m-0 p-0">
                <div id="pag e-content-wrapper m-0 p-0">

                    <ContentTopNav title={this.state.pageTitle} />

                    <div>

                        <div className="">
                            <img className="mx-auto my-3" src={require('./assets/img/gclogo.png')} width={'97.35dp'} height={'104.15dp'} />
                        </div>
                        <img className="mx-auto my-3 img-responsive p-0 m-0" src={require('./assets/img/hero.png')} width={'362dp'} height={'177dp'} />

                        <div className="input-group">
                            <input className=" my-3 form-control" placeholder="" type="text" style={styles.textfield} />
                            <div className="input-group-append">
                                <i className="mt-4 ml-1">
                                    <LoyaltyIcon style={{color: "#50fbdb", marginLeft:'-40px'}} />
                                </i>
                            </div>
                        </div>

                        <button onClick={() => this.handler('library')} className="w-100 my-2 GenericPlayBtn">
                            <Trans i18nKey="referral.join"></Trans>
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(Referral);
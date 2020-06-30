import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { AsyncStorage } from 'AsyncStorage';

import './assets/css/general.css';
import './assets/css/buttons.css';

import GetAppIcon from '@material-ui/icons/GetApp';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

class Cards extends React.Component {

    state = {
        notReferred: false
    }

    componentDidMount(){
        AsyncStorage.getItem("referred").then(value => {
            if(value == null){
                this.setState({
                    notReferred: true
                });
            }else{
                this.setState({
                    notReferred: false
                });
            }
        });
    }

    handler = (value) => {
        this.props.getChildClick(value);
    }

    render() {
        
        {
            if(this.state.notReferred){
                return (
                    <div className="card border-0 flex-row flex-wrap p-0 m-0" style={{background:'none'}}>
                        <div className="col-2 p-0 m-0">
                            <div className="card-header border-0 m-0 mt-1 p-0">
                                <img className="imgBorder" src={require('./assets/img/car.jpg')} width={'95.6dp'} height={'119.5dp'} alt=""/>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="card-block align-items-center p-0 m-0">
                                <h4 className="card-title" style={{color:'white', fontWeight: 'bold'}}>{this.props.title}</h4>
                                <p className="card-text pl-5 mb-0" style={{color:'white', lineHeight:'1'}}>Sed ut perspiciatis unde omnis iste natus error sit...</p>
                                <p className="muted m-0 p-0" style={{color:'white', lineHeight:'1.4', fontSize:'80%'}}>05/05/20</p>
                                <a onClick={() => this.handler('referral')} className="playBtn my-2"><SportsEsportsIcon /><Trans i18nKey='library.referral'>Play</Trans> </a>
                            </div>
                        </div>
                        <div className="w-100"></div>
                    </div>
                );
            }else{
                return (
                    <div className="card border-0 flex-row flex-wrap p-0 m-0" style={{background:'none'}}>
                        <div className="col-2 p-0 m-0">
                            <div className="card-header border-0 m-0 mt-1 p-0">
                                <img className="imgBorder" src={require('./assets/img/car.jpg')} width={'95.6dp'} height={'119.5dp'} alt=""/>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="card-block align-items-center p-0 m-0">
                                <h4 className="card-title" style={{color:'white', fontWeight: 'bold'}}>{this.props.title}</h4>
                                <p className="card-text pl-5 mb-0" style={{color:'white', lineHeight:'1'}}>Sed ut perspiciatis unde omnis iste natus error sit...</p>
                                <p className="muted m-0 p-0" style={{color:'white', lineHeight:'1.4', fontSize:'80%'}}>05/05/20</p>
                                <a href={this.props.url} className="playBtn my-2"><SportsEsportsIcon /><Trans i18nKey='library.play'>Play</Trans> </a>
                            </div>
                        </div>
                        <div className="w-100"></div>
                    </div>
                );
            }
        }
    }
}

export default withTranslation('translations')(Cards);
import React, {Component} from 'react';
import $ from 'jquery';
import { withTranslation, Trans } from 'react-i18next';
import { AsyncStorage } from 'AsyncStorage';

import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './assets/css/general.css';

import Cards from './Cards';

import ContentTopNav from './ContentTopNav';

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

class Library extends React.Component {
    
    constructor(){
        super();

        this.state = {
            label: <Trans i18nKey='library.search'></Trans>,
            cardname: ["GetA Racer", "GetA Puzzle"],
            cardurl: ["http://52.78.142.101/racing_web/index.html", "https://www.luisarmando.mx/play/gac/src/apks/puzzle_20200615.apk"],
            input: '',
            pageTitle: <Trans i18nKey='library.title'></Trans>,
            firstLaunch: "false",
        }
    }

    onChangeHandler(e){
        this.setState({
            input: e.target.value
        });
    }

    componentDidMount(){
        AsyncStorage.getItem("inits").then(value => {
            if(value == null){
                AsyncStorage.setItem("inits", "true");
                this.setState({
                    firstLaunch: "true"
                });
            }else{
                this.setState({
                    firstLaunch: "false"
                });
                $("#wrapper").toggleClass("toggled");
            }
        });

        $("#menu-toggle").click(function (e) {
             e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }

    changeComponent = (value) => {
        this.props.getChildClick(value);
    }

    render() {
        const list = this.state.cardname
                        .filter(d => this.state.input === '' || d.includes(this.state.input))
                        .map((d, index) => 
                        <li className="list-group-item cardbkgless my-2 border-0 p-0 m-0" key={index}>{/*d*/} 
                            <Cards getChildClick={this.changeComponent} title={this.state.cardname[index]} url={this.state.cardurl[index]} />
                        </li>);
        
        return (
            <div id="pag e-content-wrapper">

                <ContentTopNav title={this.state.pageTitle} />

                <div className="container-fluid">

                    <div className="text-center">
                    <img className="mx-auto my-3" src={require('./assets/img/gclogo.png')} width={'97.35dp'} height={'104.15dp'} />
                        <img className="mx-auto my-3" src={require('./assets/img/hero.png')} width={'362dp'} height={'177dp'} />
                    </div>
                    <div>
                        <div className="input-group">
                            <input onChange={this.onChangeHandler.bind(this)} className=" my-3 form-control" placeholder="" type="text" style={styles.textfield} />
                            <div className="input-group-append">
                                <i className="mt-4 ml-1">
                                    <SearchIcon style={{color: "#50fbdb", marginLeft:'-40px'}} />
                                </i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="list-group">{list}</ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default withTranslation('translations')(Library);
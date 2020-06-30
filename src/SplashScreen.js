import React, {Component} from 'react';

// Component for Splash Screen
class SplashScreen extends React.Component {
    render() {
      const style = {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'fixed'
      };

      const bkg = {
        position:'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor:'rgba(31,26,82,1)'
      }
  
      return (
        <div className="container">
          <div className="row" >
            <div style={bkg} className="col">
              <img className="mx-auto my-auto" src={require('./assets/img/gclogo.png')} width={'200dp'} height={'200dp'} style={style}/>
            </div>
          </div>
        </div>
      );
    }
  }


export default SplashScreen;
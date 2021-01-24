import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import List from './List';

class Login extends Component {
    state = { 
        userName: '',
        isError: false,
     }

     onClickButton = () => {
         const {userName} = this.state;
         if (userName != '' && !this.state.isError) {
            this.props.dispatch({
                type: 'ADD_TEST',
                data: {
                    userName: this.state.userName,
                }
         })

         this.props.history.push('List');
         } else {

            alert('please provide proper inputs!!!')
         }
        
     }

    
    render() { 
        return (
            <div style={{
                display: 'flex', 
            flexDirection: 'column',
            backgroundImage: "url(" + "https://files.thedoodleboy.com/images/footer-doodle.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '1000px',
            backgroundRepeat: 'no-repeat'
            }}>
            <div 
            onClick={() => this.props.history.push('/')}
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '25px',
                cursor: 'pointer',
            }}>
                <p style={{fontSize: '25px'}}>Get Info</p>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '200px',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <div style={{display: 'flex', 
                flexDirection: 'row', 
                backgroundColor: 'white',
                padding: '50px'
               // border: '1px solid red' ,
            }} >
                    <p style={{width: '200px', fontSize:34, }}>User Name</p>
                    <input 
                    style={{fontSize: 34, width: '400px', height: '70px', marginTop: '15px'}}
                    value={this.state.userName} onChange={(e) => {
                        this.setState({
                        userName: e.target.value
                    })}} />
                </div>
           <div 
           style={{
               marginTop: '50px', 
           width: '300px',
           backgroundColor: 'green',
           alignItems: 'center',
           justifyContent: 'center',
           cursor: 'pointer',
           borderRadius: '7px'
           }}
           onClick={this.onClickButton}
           >
                <p style={{color: 'white', fontSize: 24, textAlign: 'center'}}>Log In</p>
           </div>
            </div>
            </div>
          );
    }
}

 
const mapStateToProps = (state) => ({
    UserDetails: state.UserDetails
})

export default connect(mapStateToProps)(Login);
 

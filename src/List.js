import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import DownloadLink from "react-download-link";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ChartDisplayMain from './ChartDisplayMain';

const abc  = require('./front-end.json');

class List  extends Component {
    state = { 
        typesOfCharts: [
            'Line',
            'Spline',
            'Area',
            'Column',
            'Bar',
            'Pie'
        ],
        selectedType: 'Column'
     }

    getUserLocation = () => {
        
    }

    componentDidMount() {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div style={{
                    width: '850px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '45px',
                    borderRadius: 8,
                    backgroundColor: 'white',
                    boxShadow: "1px 4px 6px 1px #9E9E9E",
                    }}
                    >
                  <h1>Can you please download the JSON file?</h1>
                  <div style={{display: 'flex'}}>
                  <div 
                  style={{
                      display: 'flex',
                      marginRight: '55px', 
                      backgroundColor: '#DCDCDC', 
                      width: '300px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: "1px 4px 6px 1px #9E9E9E",
                    }}
                  onClick={() => {
                      onClose();
                      }}><p>No</p></div>
                  <div
                   style={{
                    display: 'flex',
                    backgroundColor: '#DCDCDC', 
                   width: '300px',
                   alignItems: 'center',
                   justifyContent: 'center',
                   boxShadow: "1px 4px 6px 1px #9E9E9E",
                }}
                  >
                        <DownloadLink
        label="Yes, Sure"
        filename="front-end.json"
        exportFile={() => Promise.resolve(JSON.stringify(abc)).then(() => {
           // console.log('hello world')
            this.props.dispatch({
                        type: 'ADD_FILE',
                        data: {
                            dataFile: abc.splice(0,50),
                           // dataFile: abc,
                        }
                 })
            onClose()
        })}
    />
                  </div>
                  </div>
                </div>
              );
            }
          });
      }

      onClickLogout = () => {
        this.props.history.push('/');
      }
    
    
    render() { 
        return ( 
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', backgroundColor: 'black', height: '250px'}}>
               <div style={{
                   display: 'flex', 
                   flexDirection: 'column', 
                   width: '35%'
                   }}>
               <p style={{
                   color: 'white', 
                   fontSize: 37,
                   paddingLeft: '30px'
                   }}>Types of Charts you want to see
                   </p>
               <div style={{
                   display: 'flex',
                   flexDirection: 'row',
                   
               }}>
                   {this.state.typesOfCharts.map(item => (
                      <ul key={''+item}
                      style={{ cursor: 'pointer',}}
                      onClick={() => this.setState({selectedType: item})}
                      >
                          <p style={{color: 'white', fontSize: 24, textAlign: 'center'}}>{item}</p>
                      </ul>
                      
                   ))}
                   </div>
              
              
               </div>
               <div 
               style={{marginLeft: '1260px', cursor: 'pointer',}}
               onClick={this.onClickLogout}
               >
                  <p style={{color: 'white', fontSize: 27}}>Logout</p>
              </div> 
            </div>
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '50px',
            justifyContent: 'center',
            flexDirection: 'column'
        }}
        >
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{fontSize: 40}}>Hi, </p>
                <p style={{marginLeft: '20px', fontSize: 40}}>{this.props.UserDetails.userName}!</p>
            </div>
        
        {this.props.dataFile ? (
       
        <ChartDisplayMain  dataFile={this.props.dataFile} selectedType={this.state.selectedType}/>
       
        ) : null}
       
        </div> 
        </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    UserDetails: state.UserDetails,
    dataFile: state.dataFile.dataFile
})

export default connect(mapStateToProps)(List);

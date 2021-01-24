import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';


class ChartDisplayMain extends React.PureComponent {
   
     constructor(props) {
        super(props);
        this.state = {
            dataDisplay:
        props.dataFile &&
        props.dataFile.map((data, index) => ({
          id: index,
          name: data.insid,
          x: data.dom,
          y: data.dow,
          drilldown: data.insid,
        })),
        dataDisplayHour:   props.dataFile &&
        props.dataFile.map((data, index) => ({
          id: index,
          name: data.insid,
          x: data.hour,
          y: data.SumHourly,
          drilldown: data.insid,
        })),
        options: {}
        }
      }

   
   
     
    render() { 
        return ( 
            <div className='App' style={{width: '80%',  boxShadow: "1px 4px 6px 1px #9E9E9E",}}>
              <HighchartsReact highcharts={Highcharts} options={{
                   chart: {
                    type: this.props.selectedType.toLowerCase()
                  },
                  title: {
                    text: 'My chart'
                  },
             
                  series: [
                    {
                        name: 'dom-dow',
                    data: this.state.dataDisplay
                    },
                    {
                        name: 'hour-sumHourly',
                    data: this.state.dataDisplayHour
                    }
                  ]
              }} />  
            </div>
         );
    }
}
 
export default ChartDisplayMain;
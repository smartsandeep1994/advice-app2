import React from 'react';
import axios from 'axios';
// import {
//   Link
// } from 'react-router-dom';

import './App.css';

class App extends React.Component {
      state = {
        advice: '',
        author:'',
        bg:'whitesmoke',
        btn1:'green',
        btn2:'red',
        font:'24',
        font2:'32'
      }

      componentDidMount() {
        this.fetchAdvice();
      }

      fetchAdvice = async () => {
        const res = await axios.get('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
        // console.log(res.data.quotes);
        // console.log(res.data.quotes[0].text);
        // console.log(res.data.quotes[0].author);
        this.setState({ advice:res.data.quotes[0].text });
        this.setState({ author:res.data.quotes[0].author });

        var bg = [];
        for(var i = 0; i < 3; i++){
            bg.push(Math.floor(Math.random() * 255));
            console.log(bg);
            this.setState({ bg:'rgb('+ bg.join(',') + ')' });
        } 

        var btn1 = [];
        for(var i = 0; i < 3; i++){
            btn1.push(Math.floor(Math.random() * 255));
            console.log(btn1);
            this.setState({ btn1:'rgb('+ btn1.join(',') + ')' });
        } 

        var btn2 = [];
        for(var i = 0; i < 3; i++){
            btn2.push(Math.floor(Math.random() * 255));
            console.log(btn2);
            this.setState({ btn2:'rgb('+ btn2.join(',') + ')' });
        } 

        var font = Math.floor(Math.random() * ((30-12)+1) + 12); 
        this.setState({ font: font });
        
        var font2 = Math.floor(Math.random() * ((30-12)+1) + 12); 
        this.setState({ font2: font2 });
      }
  

    render() {
      return (
        <div className="app">
          {this.state.advice ?
              <div className="card" style={{background:this.state.bg}}>
                <h3 className="heading" style={{fontSize:this.state.font+'px'}}>{this.state.advice}{this.state.font}</h3>
                <h1 style={{fontSize:this.state.font2+'px'}}>-{this.state.author}</h1>
              
                <button className="button button1" style={{background:this.state.btn1}}>
                  <a href={"https://twitter.com/intent/tweet?url=" +this.state.advice} 
                    target="_blank"
                    id="tweet-quote anchor element."
                  >
                    <span>Twiter</span>
                  </a>
                </button>
                <button className="button button2" onClick={this.fetchAdvice} style={{background:this.state.btn2}}>
                  <span>New Quote</span>
                </button>
              </div>
          :<div>Loading</div>}
          
        </div>
      );
    }
}

export default App;
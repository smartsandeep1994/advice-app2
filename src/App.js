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
        font:'black',
        font2:'white',
        font3:'yellow',
        font4:'#ccc',
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

        var font = [];
        for(var i = 0; i < 3; i++){
            font.push(Math.floor(Math.random() * 255));
            console.log(font);
            this.setState({ font:'rgb('+ font.join(',') + ')' });
        } 

        var font2 = [];
        for(var i = 0; i < 3; i++){
            font2.push(Math.floor(Math.random() * 255));
            console.log(font2);
            this.setState({ font2:'rgb('+ font2.join(',') + ')' });
        } 

        var font3 = [];
        for(var i = 0; i < 3; i++){
            font3.push(Math.floor(Math.random() * 255));
            console.log(font3);
            this.setState({ font3:'rgb('+ font3.join(',') + ')' });
        } 

        var font4 = [];
        for(var i = 0; i < 3; i++){
            font4.push(Math.floor(Math.random() * 255));
            console.log(font4);
            this.setState({ font4:'rgb('+ font4.join(',') + ')' });
        } 
        // var font = Math.floor(Math.random() * ((30-12)+1) + 12); 
        // this.setState({ font: font });
        
        // var font2 = Math.floor(Math.random() * ((30-12)+1) + 12); 
        // this.setState({ font2: font2 });
      }
  

    render() {
      return (
        <div className="app">
          {this.state.advice ?
              <div className="card quote-box" style={{background:this.state.bg}} id="text">
                <div className="contentss">
                  <h3 className="heading" style={{color:this.state.bg}}>
                    <span> <i class="fa fa-quote-left"></i> &nbsp; {this.state.advice}</span>
                  </h3>
                  <h1 style={{color:this.state.bg}} className="author">-{this.state.author}</h1>
                
                  <button className="button button1" style={{background:this.state.bg}}>
                    <a href={"https://twitter.com/intent/tweet?url=" +this.state.advice} 
                      target="_blank"
                      id="tweet-quote-anchor-element."
                    >
                      <span  style={{color:'#fff'}} id="tweet-quote"><i class="fa fa-twitter tweet" aria-hidden="true"></i></span>
                    </a>
                  </button>
                  <button className="button button2" onClick={this.fetchAdvice} style={{background:this.state.bg}}>
                    <span  style={{color:'#fff'}} id="new-quote">New Quote</span>
                  </button>
                </div>
                
              </div>
          :<div>Loading</div>}
          
        </div>
      );
    }
}

export default App;
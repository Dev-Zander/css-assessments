import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CSS & HTML Assessments</h1>
        </header>
        <p className="App-intro">
          This is the place to find my CODE for Badging.

          <div className="main-css-container">

            <div className="animation">
              KeyFrames 28C
          </div>
            <div className="animation2">
              Transform 28E
          </div>
            <div className="animation3">
              Transition 28D
          </div>
            <div className="fancy-effects">

              <div className="box-shadow">
                Box-Shadow 30C
          </div>
              <div className="gradients">
                gradients 30D
          </div>
              <div className="text-effects">
                text effects 30E
          </div>
              <div className="flexbox">
                Flexbox 27C 27D 27E 27F 27G
          </div>

              <div className="variables">
                Variables 31C
          </div>


              <div class="section group">
                <div class="col span_1_of_2">
                  This is Grid 1 31D
	</div>
                <div class="col span_1_of_2">
                  This is Grid 2 31D
	</div>
              </div>
            </div>

            <div className="pseudo">

              <input className="pseudo-disabled" disabled value="disabled 26E" />
              <input className="pseudo-focus" value="focus 26G" />
              <input className="pseudo-hover" value="hover 26H" />

              <div>
                <p>nth-child 26L</p>
                <p>nth-child 26L</p>
                <p id="testing">nth-child 26L</p>
                <p>nth-child 26L</p>
              </div>

            </div>

            <div className="box-model">
            
            Box Model 24C 24D 24E 24F

          <div> Float and Display 25D 25F</div>
            </div>

        <div className="font-background">
23D-1	font-weight
23D-2	color
23D-3	font-size
23E	background-color
23F	background-image
        </div>

        <div className="positions"> 25C-1	relative</div>
        <div className="positions1">25C-2	absolute</div>
        <div className="positions2">25C-3	fixed</div>

          </div>

          <div className="main-html-container">


          </div>
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* 54F-1 */}
          <h1 className="App-title">Welcome to CSS & HTML Assessments</h1>
        </header>
        <p className="App-intro">
        {/* 54C-2 */}
          <span>This is the place to find my CODE for Badging.</span>


        {/* 54C-3 */}
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
            {/* 54G */}
              <input className="pseudo-disabled" disabled value="disabled 26E" />
              <input className="pseudo-focus" value="focus 26G" />
              <input className="pseudo-hover" value="hover 26H" />

              <div>
                {/* 54C-1 */}
                <p>nth-child 26L</p>
                <p>nth-child 26L</p>
                <p id="testing">nth-child 26L</p>
                <p>nth-child 26L</p>
              </div>

            </div>

            <div className="box-model">
            
            {/* 54F-2 */}
            <h2>Box Model 24C 24D 24E 24F</h2>

          <div> Float and Display 25D 25F</div>
            </div>

        <div className="font-background">
23D-1	font-weight
23D-2	color
23D-3	font-size
23E	background-color
23F	background-image
        </div>
        {/* 54J */}
        <div className="positions"> 25C-1	relative</div>
        <div className="positions1">25C-2	absolute</div>
        <div className="positions2">25C-3	fixed</div>

          </div>

          <div className="main-html-container">

          {/* 59C */}
          <button className="button-1" role="button">59C	ARIA</button>
          {/* 59E */}
          {/* 54E-2	 */}
          <img src={logo} className="App-logo" alt="logo" />

{/* 54E-1 */}
<ul>
  <li>Test</li>
  <li>Test</li>
  <li>Test</li>
  <li>Test</li>
</ul>
  
{/* 54H */}
<a href="http://www.google.com">Google Link</a>

{/* 54D-2 */}
<section>
{/* 54D-1 */}
<article>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</article>
</section>

          </div>
        </p>
        {/* 54D-3 */}
        <footer>THis is the footer</footer>

       
      </div>
    );
  }
}

export default App;

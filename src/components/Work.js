import React from 'react'
import SectionTitle from './SectionTitle'

class Work extends React.Component {
  render(){
    return (
      <div>
        <SectionTitle
          title="Work"
          />
        <div className="work wrapper" id="Work">

          <section>

            <div className="info">
              <h3>JC Acupuncturist</h3>
              <a href="./justin_cameron" target="_blank">See it Here</a>
              <ul>
                <li>HTML, CSS, SASS, NODE JS</li>
                <li>Mobile-First Responsive Web Design</li>
                <li>2016</li>
              </ul>
            </div>   

          </section>

          <section>
        

            <div className="info">
              <h3>Gavin Crawford Actor</h3>
              <a href="http://gavincrawford.com" target="_blank">See it here</a>
              <ul>
                <li>2014</li>
                <li>HTML, CSS, SASS</li>
                <li>Responsive Web Design</li>
                <li>Wordpress Custom Theme</li>
              </ul>
            </div>

          </section>

          <section>
            <div className="info">

              <h3>Jimmy Country Music</h3>
              <a href="./jimmy_crackcorn" target="_blank">See it Here</a>
              <ul>
                <li>HTML, CSS, SASS, NODE JS</li>
                <li>Mobile-First Responsive Web Design</li>
                <li>2016</li>
              </ul>

            </div>

          </section>

          <section>
            <h3>Request Recycled</h3>
            <a href="http://requestrecycled.com" target="_blank">See Here</a>
            <ul>
              <li>Digital Marketing Automation</li>
              <li>Local Business Listing</li>
              <li>Wordpress Child Theme</li>
            </ul>
          </section>

          <section>
            <h3>Dr. David Acupuncturist</h3>
            <a href="./acupuncturist" target="_blank">See Here</a>
            <ul>
              <li>2014</li>
              <li>HTML, CSS, SASS</li>
              <li>Responsive Web Design</li>
              <li>Static Site</li>
            </ul>
          </section>

          <section>
            <h3>Hyde Cabinetry</h3>
            <a href="./hyde_cabinety" target="_blank">See Here</a>
            <ul>
              <li>2014</li>
              <li>HTML, CSS, SASS, Javascipt</li>
              <li>Responsive Web Design</li>
              <li>Static Site</li>
            </ul>
          </section>

          <section>
            <h3>React Note Board</h3>
            <a href="./react-note-board" target="_blank">See Here</a>
            <ul>
              <li>React JS</li>
            </ul>
          </section>

          <section>
            <h3>Javascript Drum Kit</h3>
            <a href="./js-drumkit" target="_blank">See Here (keyboard required)</a>
            <ul>
              <li>Javascript key mapping, HTML, CSS</li>
            </ul>
          </section>

          <section>
            <h3>JavaScript CSS Clock</h3>
            <a href="./js-css-clock" target="_blank">See Here</a>
            <ul>
              <li>Javascipt transforms CSS into clock.</li>
              <li>Background dynamically loads from API.</li>
            </ul>
          </section>

          <section>
            <h3>Angular JS Energy Calc</h3>
            <a href="./angularJS-energy-calc">See Here</a>
            <ul>
              <li>Made with Angular 2</li>
            </ul>
          </section>

        </div>
      </div>
    )
  }
}

export default Work

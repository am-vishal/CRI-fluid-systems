import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import award1 from './1.png';
import award2 from './2.png';
import machines from './3.png';
import './App.css';
import 'tachyons';


class App extends Component {
  render(){
  return (

  <div className="main" id="main">
      <div className="title tc"><img src={logo} alt="logo" /></div>
      
      <span className="heading">
      <p id="heading"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
      <br/><br/><br/>
      </span>
      <span className='award1'><img src={award1} alt="award1"/></span>

      <ul className="list">
      <li className="first">&#9679; C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
      <li className="last">&#9679; C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
      </ul>
     
    <div>


    </div>


      <figure class="award2-item">
          <span className='award2'><img src={award2} alt="award2"/>
        {/* <span className='award1'><img src={award1} alt="award1"/></span> */}
             <figcaption class="caption">Government of India has awarded the <strong>"National Energy Conservation Award 2018".</strong> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</figcaption>
          </span>
      </figure>
      <figure class="item">
<p className="middle-text">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <span className="machine"><img src={machines} alt="logo" /></span>
             <figcaption class="mv3 pump-caption"><strong>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</strong></figcaption>
      </figure>
      <div className="red bb ma3"></div>

      <div className="tc ma1"><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></div><br/>
      <div className="tc pa2">CHEMICALS & PROCESS <strong style={{color:'red'}}> | </strong> POWER WATER & WASTE WATER <strong style={{color:'red'}}> | </strong> OILS & GAS <strong style={{color:'red'}}> | </strong> PHARMA SUGARS & DISTILLERIES <strong style={{color:'red'}}> | </strong> PAPER & PULP <strong style={{color:'red'}}> | </strong> MARINE & DEFENCE <strong style={{color:'red'}}> | </strong> METAL & MINING FOOD & BEVERAGE <strong style={{color:'red'}}> | </strong> PETROCHEMICAL & REFINERIES <strong style={{color:'red'}}> | </strong> SOLAR <strong style={{color:'red'}}> | </strong> BUILDING <strong style={{color:'red'}}> | </strong> HVAC<strong style={{color:'red'}}> | </strong> FIRE FIGHTING <strong style={{color:'red'}}> | </strong> AGRICULTURE & RESIDENTIAL</div>
      <div className="tc bg-red ba pa3 ma3"><p className="left pa3">Toll free <strong><a href="tel:+1800 200 1234">1800 200 1234</a></strong></p><p className="middle pa3"><a href='www.facebook.com/cripumps'>www.facebook.com/cripumps</a></p><p className="right pa3"><a href= 'www.crigroups.com'>www.crigroups.com</a></p></div>
     



</div>

  );
}
}
export default App;

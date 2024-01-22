
import { useEffect, useState } from 'react';
import {Card }from 'react-bootstrap';
import sena from "../assets/img/logoSena.png"
import oracle from "../assets/img/oracleOne.png"
import tic from "../assets/img/MisionTic.png"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const Skills = () => {
  let [percentage1, setPercentage1] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          if (percentage1 < 80 ) {
            setPercentage1(percentage1 + 1);
          }
        }, 50);
      }, [percentage1]);

      let [percentage2, setPercentage2] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          if (percentage2 < 70 ) {
            setPercentage2(percentage2 + 1);
          }
        }, 50);
      }, [percentage2]);

      let [percentage3, setPercentage3] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          if (percentage3 < 60 ) {
            setPercentage3(percentage3 + 1);
          }
        }, 50);
      }, [percentage3 ]);

      let [percentage4, setPercentage4] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          if (percentage4 < 50 ) {
            setPercentage4(percentage4 + 1);
          }
        }, 50);
      }, [percentage4 ]);
      return (
        <section className="skill" id="skills">
         <div className="skill-bx1">
          <h3 className="pro"> Soft Skills</h3> 
          <div className="skill-progress">
            <div className="item"style={{ width: 100, marginLeft: 70, }}>
              <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
              <h4><span>TeamWork</span></h4>
            </div>
    
            <div className="item" style={{ width: 100, marginLeft: 70, }}>
              <CircularProgressbar  value={percentage2} text={`${percentage2}%`} />
              <h4><span>Creativity</span></h4>
            </div>
    
            <div className="item" style={{ width: 100, marginLeft: 70, }}>
              <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
              <h4><span>Problem Solving</span></h4>
            </div>
    
            <div  className="item" style={{ width: 100, marginLeft: 70, }}>
              <CircularProgressbar value={percentage4} text={`${percentage4}%`} />
              <h4><span>Adaptability</span></h4>
              </div>
            </div>
            <section className="progress-skills">
            <h3 className="pro-1">Hard Skills</h3> 
            <div className="progress-skill">
            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                    <span className="tooltip">85%</span>
                    </span>
                </div>
                
            </div>

            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                    <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="title">Bootstrap</span>
                <div className="skill-bar">
                    <span className="skill-per bootstrap">
                    <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                    <span className="tooltip">50%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                    <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="title">C#</span>
                <div className="skill-bar">
                    <span className="skill-per c">
                    <span className="tooltip">30%</span>
                    </span>
                </div>
            </div>

        </div><div className='education' id='education'>
        <h2 className='title-education'>Education</h2>
        <div className="items-education">

     <Card className="card-item"style={{ width: '12rem', background:'none'}}>
     <Card.Img className="img-card" variant="top" src={sena} />
     <Card.Body>
       <Card.Title>SENA</Card.Title>
       <Card.Text>
       ADSI Technology
       </Card.Text>
     </Card.Body>
   </Card>

   <Card className="card-item" style={{ width: '12rem',  background:'none'}}>
     <Card.Img className="img-card" variant="top" src={tic} />
     <Card.Body>
       <Card.Title>Mision Tic</Card.Title>
       <Card.Text>
       Web Development
       </Card.Text>
     </Card.Body>
   </Card>
   
   <Card  className="card-item" style={{ width: '12rem', background:'none'}}>
     <Card.Img className="img-card" variant="top" src={oracle} />
     <Card.Body>
       <Card.Title>One-Oracle</Card.Title>
       <Card.Text>
       Frontend Development
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   </div>
        </section>

            </div>
            
        </section>
      )
}

export default Skills 
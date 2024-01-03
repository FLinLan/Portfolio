import React from 'react';
import './skills.css';
import firmware from '../../assets/firmware.png';
import problemsolve from '../../assets/problemsolve.png';
import SWE from '../../assets/SWE.png';

const Skills = () => {
    return (
        <section id= 'skills'>
            <span className="skillTitle"> My Expertises</span>
            <span className="skillDesc">Participated in various engineering activities and was also involved in leadership roles that allowed me to practice essential soft skills, continued to pursue my passion for engineering by joining various clubs and activities.</span>
            <div className="skillBars">
                
                <div className="skillBar">
                    <img src = {firmware} alt= "firmware" className="skillBarImg" />
                    <div className= "skillBarText">
                        <h2>Firmware Development</h2>
                        <p>Uses PSoC creator and also involved in firmware debugging</p>
                    </div>
                </div>
                
                <div className="skillBar">
                    <img src = {problemsolve} alt= "problemsolve" className="skillBarImg" />
                    <div className= "skillBarText">
                        <h2>Problem Solving</h2>
                        <p> "Critical thinking and creativity in solving problems, research, and make informed decisions.</p>
                    </div>
                </div>                
                
                <div className="skillBar">
                    <img src = {SWE} alt= "SWE" className="skillBarImg" />
                    <div className= "skillBarText">
                        <h2>Software Engineering</h2>
                        <p>Proficiency in various programming languages and concrete in the fundamentals of programming concepts.</p>
                    </div>
                </div>
            
            </div>
        </section>
    );
}

export default Skills;
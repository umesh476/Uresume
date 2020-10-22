import React, { Component } from 'react';
import Card from './cards/Card';
import CircleCard from './cards/CircleCard';
import MainHeading from './common/MainHeading';
import SubHeading from './common/SubHeading';
import AniText from './common/Text';
import { Table,} from 'react-bootstrap';
import AOS from 'aos';
import { slideInLeft,slideInRight,slideInDown,zoomIn,bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import image_1 from "../Resume_2.jpg";
//import resume from "../Resume.pdf"
// var fileDownload = require('js-file-download');

const styles = {
    slideInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInRight:{
      animation: 'x 1s',
      animationName: Radium.keyframes(slideInRight, 'slideInRight')
    },
    slideInDown:{
        animation:'x 1.1s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
    zoomIn:{
        animation:'x 2.3s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    },
    bounce:{
        animation:'x 2s',
        animationName: Radium.keyframes(bounce, 'bounce')
    },
    bounce_1:{
        animation:'x 2.5s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }

  }


class Resume extends Component {
    state = {  }

click=()=>{
  
}

 componentDidMount=()=>{
     AOS.init({
        offset:120,
        delay:20,
        duration:1000,
        easing:"ease-in-out",
        mirror:true,
        once:false,
        // desable:"mobile"
     })
 }   
    render() { 
        return ( 
            <div className="main-container">
                <div className="heading">
                   <MainHeading text="RESUME"/>
                     {/* <a href={resume} download="Aniket_resume.pdf" className="download-link">Download Resume</a> */}
                </div>
                <StyleRoot>
                <div className="card-container" style={styles.slideInLeft}>
                <Card>
                   <div className="first-container mobile">
                        <div>
                            <div className="space-line-bottom">
                           <SubHeading text="UMESH KUMAR PRAJAPATI"/>
                           </div>
                           <div className="space-line-bottom">
                           <AniText text="MCA (Master of Computer Application)"/>
                           </div>
                           <div className="contact-container space-line-bottom">
                               <SubHeading text="Contact No. :-"/>
                               <div className="space-left">
                               <AniText text="+91 7570059472"/>
                               </div>
                            </div>
                            <div className="contact-container space-line-bottom">
                                <SubHeading text="Email :-"/>
                                <div className="space-left">
                                    <div className="underline">
                                     <AniText text="umeshprajapati476@gmail.com"/>
                                 </div>
                                </div>
                            </div>
                               <div className="underline present-address">
                                 <SubHeading text="Present Address:"/>
                                </div>
                                <div className="address">
                                    <AniText text="Gangbhew,V B Narayanpur Ballia UP (277213)"/>
                                </div>

                        </div>
                        <StyleRoot>
                        <div  style={styles.slideInDown}>
                            <div className="pic-mobile-container" style={styles.bounce}>
                            <CircleCard>
                                <div style={styles.zoomIn}>
                                  <div style={styles.bounce_1}>
                                      {/* <img src={image_1} className="photo" alt="image"/> */}
                                  </div>
                                </div>
                            </CircleCard>
                            </div>
                        </div>
                        </StyleRoot>
                   </div>
                </Card>
                </div>
                </StyleRoot>
                <StyleRoot>
                <div className="card-container" style={styles.slideInRight}>
                    <Card>
                        <div>
                              <div className="heading-space">  
                                 <MainHeading text="OBJECTIVE"/>
                              </div>
                            <AniText text="To exhibit my knowledge and deliver my potential effectively, to learn and use the skill sets to enhance the productivity which determines me distinctively."/>
                        </div>
                    </Card>
                </div>
                </StyleRoot>
                <StyleRoot>
                <div className="card-container" style={styles.slideInLeft}>
                    <Card>
                        <div className="heading-space">
                            <MainHeading text="EXPERIENCE SUMMARY"/>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <AniText text="Around 1.9 years of IT experience in the areas of Web Development."/>
                                </li>
                                <li>
                                    <AniText text="Comprehensive knowledge in asp.net,mvc,C#, JavaScript,JQuery"/>
                                </li>
                                <li>
                                    <AniText text="Experience in developing reusable code and scripts to achieve better performance and to save work hours."/>
                                </li>
                                <li>
                                    <AniText text="Possessing good project team work, communication and interpersonal skills."/>
                                </li>
                                {/* <li> <AniText text="INVOLVED  in  Agile Development - Scrum Method"/>
                                    <ul>
                                        <li>
                                            <AniText text="Sprint Planning Meeting"/>
                                        </li>
                                        <li>
                                            <AniText text="Daily standup Meeting"/>
                                        </li>
                                        <li>
                                            <AniText text="Story Grooming session"/>
                                        </li>
                                        <li>
                                            <AniText text="Sprint Retrospect Meeting"/>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </Card>
                </div>
                </StyleRoot>
                <div className="card-container"data-aos="flip-up">
                    <Card>
                        <div className="heading-space">
                            <MainHeading text="ACADEMIC PROFILE"/>
                        </div>
                        <div>
                           <Table responsive className="ani-table-container">
                               <thead>
                                   <tr>
                                       <th className="text-center"><SubHeading text="Qualification"/></th>
                                       <th className="text-center"><SubHeading text="College Name"/></th>
                                       <th className="text-center"><SubHeading text="Board/University"/></th>
                                       <th className="text-center"><SubHeading text="Year"/></th>
                                       <th className="text-center"><SubHeading text="Percentage"/></th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td><AniText text="MCA"/></td>
                                       <td><AniText text="United Institute Of Management Allahabad"/></td>
                                       <td className="text-center"><AniText text="A.K.T.U"/></td>
                                       <td className="text-center"><AniText text="2018"/></td>
                                       <td className="text-center"><AniText text="72 %"/></td>
                                   </tr>
                                   <tr>
                                   <td><AniText text="BA"/></td>
                                       <td><AniText text="T D College Ballia"/></td>
                                       <td className="text-center"><AniText text="MGKVP Varanasi"/></td>
                                       <td className="text-center"><AniText text="2015"/></td>
                                       <td className="text-center"><AniText text="53 %"/></td>
                                   </tr>
                                   <tr>
                                   <td><AniText text="Intermediate"/></td>
                                       <td><AniText text="Inter College Bansdih Ballia"/></td>
                                       <td className="text-center"><AniText text="UP Board"/></td>
                                       <td className="text-center"><AniText text="2012"/></td>
                                       <td className="text-center"><AniText text="63 %"/></td>
                                   </tr>
                                   <tr>
                                   <td><AniText text="High School"/></td>
                                       <td><AniText text="S V A U M V Kaithawali Ballia"/></td>
                                       <td className="text-center"><AniText text="UP Board"/></td>
                                       <td className="text-center"><AniText text="2010"/></td>
                                       <td className="text-center"><AniText text="49 %"/></td>
                                   </tr>
                               </tbody>
                           </Table>
                        </div>
                    </Card>
                </div>
                <div className="card-container">
                    <Card>
                        <div className="heading-space">
                            <MainHeading text="PROJECTS"/>
                        </div>
                        <div data-aos="flip-up">
                            <Card>
                            <Table responsive>
                                <thead>
                                    <tr >
                                        <th className="project-th"><SubHeading text="Project-1"/></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><SubHeading text="Organisation"/></td>
                                        <td><AniText text="oglacs software pvt. ltd"/></td>
                                    </tr>
                                    <tr>
                                        <td><SubHeading text="Title"/></td>
                                        <td><AniText text="College Management Syatem"/></td>
                                    </tr>
                                    <tr>
                                        <td><SubHeading text="Period"/></td>
                                        <td><AniText text="september 2019 to Continue"/></td>
                                    </tr>
                                    <tr>
                                        <td><SubHeading text="Role"/></td>
                                        <td><AniText text="Software Developer"/></td>
                                    </tr>
                                    <tr>
                                        <td><SubHeading text="Key Responsibilities"/></td>
                                        <td><AniText text="Developed website for College and Hospital"/></td>
                                    </tr>
                                    <tr>
                                        <td><SubHeading text="Technologies"/></td>
                                        <td><AniText text=".net, MVC, C#,JQuery,Javascript, HTML, CSS ,SQL"/></td>
                                    </tr>
                                </tbody>
                            </Table>
                            </Card>
                        </div>
                        <div className="project-container"
                        data-aos="flip-up"
                        >
                            <Card>
                            <Table responsive>
                                <thead>
                                    <tr >
                                        <th className="project-th"><SubHeading text="Project-2"/></th>
                                        <th><div className="link-container"> <a href="#" target="_blank">Web Scraping</a> </div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><SubHeading text="Title"/></td>
                                        <td><AniText text="Web Scraping"/></td>
                                    </tr>
                                    <tr>
                                        <td><SubHeading text="Period"/></td>
                                        <td><AniText text="december 2018 to aug 2019"/></td>
                                    </tr>
                                    <tr>
                                        <td><SubHeading text="Technologies"/></td>
                                        <td><AniText text="C#,SQL,MySql"/></td>
                                    </tr>
                                </tbody>
                            </Table>
                            </Card>
                        </div>
                    </Card>
                </div>
                <div className="card-container" data-aos="flip-up">
                    <Card>
                        <div className="heading-space">
                          <MainHeading text="SKILL"/>
                        </div>
                        <div>
                            <ul>
                                <li><AniText text="ASP.Net"/></li>
                                <li><AniText text="MVC"/></li>
                                <li><AniText text="C#"/></li>
                                <li><AniText text="JavaScript"/></li>
                                <li><AniText text="JQuery"/></li>
                                <li><AniText text="HTML"/></li>
                                <li><AniText text="CSS"/></li>
                                <li><AniText text="SQL Server"/></li>                       
                                <li><AniText text="MySql"/></li>
                                <li><AniText text="Git"/></li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className="card-container" data-aos="flip-up">
                    <Card>
                        <div className="heading-space">
                          <MainHeading text="ROLES & RESPONSIBILITIES"/>
                        </div>
                        <div>
                            <ul>
                                <li><AniText text="Responsible For Team Leadership."/></li>
                                <li><AniText text="Responsible For Our project."/></li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className="card-container" data-aos="flip-up" >
                    <Card>
                        <div className="heading-space">
                          <MainHeading text="INTEREST"/>
                        </div>
                        <div>
                            <ul>
                                <li><AniText text="Computer Programming."/></li>
                                <li><AniText text="Learning New Technologies."/></li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className="card-container" >
                    <Card>
                        <div className="heading-space">
                          <MainHeading text="PERSONAL DETAILS"/>
                        </div>
                        <div className="personal-details-container" data-aos="flip-up">
                            <Card>
                            <Table responsive>
                                <thead>
                                    <tr className="personal-details">
                                        <td className="personal-details"><SubHeading text="Father’s Name"/></td>
                                        <td className="personal-details"><AniText text="Suresh Prajapati"/></td>                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="personal-details">
                                    <td className="personal-details"><SubHeading text="Permanent Address"/></td>
                                    <td className="personal-details"><AniText text="Village – Gangbhew,Post-V B Narayanpur , District Ballia [ U.P.]"/></td>
                                    </tr>
                                    <tr className="personal-details">
                                        <td className="personal-details"><SubHeading text="Mobile Number"/></td>
                                        <td className="personal-details"><AniText text="+91 7570059472"/></td>
                                    </tr>
                                    <tr className="personal-details">
                                        <td className="personal-details"><SubHeading text="Language Known"/></td>
                                        <td className="personal-details"><AniText text="Hindi,English"/></td>
                                    </tr>
                                    <tr className="personal-details">
                                        <td className="personal-details"><SubHeading text="Nationality"/></td>
                                        <td className="personal-details"><AniText text="Indian"/></td>
                                    </tr>
                                </tbody>
                            </Table>
                            </Card>
                        </div>
                    </Card>
                </div>
            </div>
         );
    }
}
 
export default Resume;
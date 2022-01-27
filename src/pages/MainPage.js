import NavbarMainPage from "../componentes/Navbar"
import { Row , Col } from "react-bootstrap" 
import mainPagesection from "../utlis/images/mainPagesection.png"
import { Avatar } from "@mui/material"
import mainSparents from "../utlis/images/mainSparents.png"
import mainSteachers from "../utlis/images/mailnSteachers.png"
import mainSactivities from "../utlis/images/mainSactivities.png"
import mainLocation from "../utlis/images/mainLocation.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRef } from "react"


function MainPage() {
      
const featuresSection = useRef() 
const goToSection = () => window.scrollTo({ top: featuresSection.current.offsetTop, behavior: "smooth" })
    return (
    <body>
    <section className="first-section"> 
    <NavbarMainPage />
    <Row style={{marginTop: 15 , marginRight:30 , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <Col>
        <p className="headOfSection"> Kids Nursery </p>
        <p style={{fontSize:"1.5em" , color:"white" , marginLeft:30 }}> main page description about the website and the faetures inside</p>
        <button className="btn-explore" onClick={goToSection}> Explore </button>
        </Col>

        <Col>
          <img src={mainPagesection} />
          </Col>

    </Row>
    </section>
    <section className="second-section" ref={featuresSection}>
        <h1 className="features"> Features:</h1>
        <Row>
            <Col style={{alignContent:"center"}}>
            <Avatar src={mainSparents} style={{height:300 , width:300 }} />
                  <h3 style={{ fontSize:"2em" , marginTop:30,marginRight:"50px" }}> Parents </h3>
                  <p style={{ color:"white" , fontSize:"1em" , marginTop:30 ,marginRight:"50px" }}> disciption of parents feature and the functionallty</p>
            </Col>
            <Col style={{alignContent:"center"}}>
            <Avatar src={mainSactivities} style={{height:300 , width:300 }} />
                  <h3 style={{ fontSize:"2em" , marginTop:30 ,marginRight:"50px" }}> Activities </h3>
                  <p style={{ color:"white" , fontSize:"1em" , marginTop:30 ,marginRight:"50px" }}> disciption of parents feature and the functionallty</p>
            </Col>
            <Col style={{alignContent:"center"}}>
            <Avatar src={mainSteachers} style={{height:300 , width:300 }} />
                  <h3 style={{ fontSize:"2em" , marginTop:30 ,marginRight:"50px" }}> Teachers </h3>
                  <p style={{ color:"white" , fontSize:"1em" , marginTop:30 ,marginRight:"50px" }}> disciption of parents feature and the functionallty</p>
            </Col>
        </Row>
    </section>
    <section className="third-section">
    <Row style={{paddingTop: 15 , marginRight:30 }}>
    <Col>
          <img src={mainLocation} />
          </Col>
          <Col>
          <h1 style={{ fontSize:"4em" }}> How to get to Us? </h1>
          <p style={{ color:"green" , fontSize:"2em" , marginBottom:30 ,marginTop:30 ,marginLeft:80 }}> Here you can find our location , you <span style={{color:"red"}}> must</span> bring your kids files before you try to come </p>
           <LocationOnIcon /> Location
          </Col>
    </Row>
</section>
   </body> )
}
export default MainPage
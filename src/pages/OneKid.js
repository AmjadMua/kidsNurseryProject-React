import { useContext } from "react";
import { useParams } from "react-router-dom"
import NurseryContext from "../utlis/NuresuryContect";
import onekidpage from "../utlis/images/onekidpage.png"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Row } from "react-bootstrap";
import { Avatar } from "@mui/material";
import NavbarMainPage from "../componentes/Navbar";
import LessonCard from "../componentes/LessonCard";
import ActivitiesCard from "../componentes/ActivitiesCard";
import JoiendACT from "../componentes/JoiendACT";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function OneKid() {
    const kidId = useParams()
    const {parent} = useContext(NurseryContext)

    if(!parent) return <p> loding... </p>
   
    console.log(parent.kids);
    const kid = kidId.kidId
     const thekid = parent.kids.find(onekid => onekid._id == kid)
     console.log(thekid.kidclass.lessons);

    return(<>
   
    <section className="onekidsec">
        <Row>
        <NavbarMainPage />
        </Row>

       <Row>
           <Col md={8}>
           <Card sx={{ minWidth: 600 , minHeight:"500px" , marginTop:"10%" , marginLeft:"3%" , backgroundColor:"#F2FFFEB5" , padding:"15px" }}>
      <CardContent>
    <Row>
        <Col md={4}>
        <Avatar src={thekid.avatar} style={{height:150 , width:150  , backgroundColor:"white" , marginLeft:"10%" }} />
        </Col>
        <Col md={2}>
        <p style={{fontSize:"3em"}}> {thekid.kidName}</p>
        <p> Class: {thekid.kidclass.nameOfClass} </p>
        </Col>
    </Row>
    <Row>
        <p style={{ backgroundColor:"#7EB27F", width:"100px" , marginTop:"50px" }}> Lessons: </p>
        {thekid.kidclass.lessons.map(lesson=>(
            <LessonCard key={lesson._id} lesson={lesson} preformence={thekid.preformence} />
    ))}
    </Row>
    <Row>
        <p style={{ backgroundColor:"#7EB27F", width:"180px" , marginTop:"10px" }}> Joiend Activiteties: </p>
        <Row>
        {thekid.joinedActivities.map(activity=>(
            <JoiendACT activity={activity} />
          
    ))}
      </Row>
    </Row>
    

      </CardContent>
    </Card>
           </Col>
           <Col style={{ height:"500px" , marginTop:"20%" , marginLeft:"1%"}}>
           <img src={onekidpage} height={250} />
           </Col>
       </Row>

    </section>
      </>)
}
export default OneKid
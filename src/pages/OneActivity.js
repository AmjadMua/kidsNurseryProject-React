import { Avatar } from "@mui/material";
import { useContext, useState } from "react";
import { Col , Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"
import NavbarMainPage from "../componentes/Navbar"
import NurseryContext from "../utlis/NuresuryContect";
import AddIcon from '@mui/icons-material/Add';
import Comment from "../componentes/Comment";
import JoinActivityModal from "../componentes/JoinActivityModal";

function OneActivity() {
    const activityId = useParams()
    const {activites , parent , addcomment} = useContext(NurseryContext)
    const [show , setShow] = useState(false)

    if(!activites) return <p> loding... </p>
    if(!parent) return <p> loding...</p>
    const activity = activites.find(oneAct => oneAct._id == activityId.activityId)
  

    return(<> 
    <section className="oneActivityPage">
    <NavbarMainPage />

        <Row style={{margin:"50px"}}>
<Col>
<img src={activity.photos[0]} height="300px"/>
<p style={{color:"white" , fontSize:"20px" , marginTop:"30px"}}> Team Members: </p>
<Row>
{activity.teamMembers.map(kid=> (
    <Avatar src={kid.avatar} style={{height:60 , width:80 , marginBottom:20}} />
))}
</Row>
</Col>
<Col>
<p style={{color:"white" , fontSize:"30px"}}> {activity.activityName} <span> <button onClick={()=> setShow(true)} style={{ color:"white" , backgroundColor:"#fa8722" , border:"none" , borderRadius:"10px" , fontSize:"15px" , marginLeft:"30px"}}> Join.. </button></span> </p> 
<p style={{color:"#fa8722" , fontSize:"14px"}}> {activity.date.split("" , 10)} </p> 
<p style={{color:"white" , fontSize:"20px"}}> {activity.description} </p>

<Row>
    <p style={{color:"#fa8722" , fontSize:"24px" , marginTop:"50px"}}> Comments: </p>
<Form onSubmit={(e) => addcomment(e , activity._id)}>
<input type="text" style={{ marginRight:"20px" , width:"250px"}} name="comment" required />
<button style={{ background:"none" , border:"none" , display:"inline" }} type="submit">  <AddIcon color="warning" /> </button>
</Form>
</Row>
{activity.comments.map(comment=> (
    <Comment comment={comment} key={comment._id} parent={parent} activity={activity} />
))}
</Col>
</Row>
    
    </section>
    <JoinActivityModal show={show} setShow={setShow} parent={parent} activity={activity} />
    </>)
}

export default OneActivity
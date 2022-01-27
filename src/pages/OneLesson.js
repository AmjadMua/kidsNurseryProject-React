import { Avatar } from "@mui/material";
import { useContext, useState } from "react";
import { Col , Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom"
import NavbarMainPage from "../componentes/Navbar"
import NurseryContext from "../utlis/NuresuryContect";
import DeleteIcon from '@mui/icons-material/Delete';
import AddPreformenceModal from "../componentes/AddPreformenceModal";


function OneLessson() {
    const lessonId = useParams()
    const {teacher , deletePreformence} = useContext(NurseryContext)
    const [show , setShow] = useState(false)


    if(!teacher) return <p> loding.. </p>
    const lesson = teacher.classId.lessons.find(onelesson => onelesson._id == lessonId.lessonId)
  

    return(<> 
    <section className="oneLesssonPage">
    <NavbarMainPage />

        <Row style={{margin:"50px"}}>
<Col>
<img src={lesson.photo} height="300px"/>
<Row>
<button onClick={()=> setShow(true)} style={{width:"200px" , marginTop:"40px" , marginLeft:"15%" , backgroundColor:"white" , border:"none" , padding:"8px" , borderRadius:"10px"}}>
     Add prefprmence</button>
</Row>

</Col>
<Col>
<p style={{color:"white" , fontSize:"30px"}}> {lesson.lessonName}  </p> 
<p style={{color:"#fa8722" , fontSize:"12px" , marginLeft:10}}>Lesson State: {lesson.state} </p>
<p style={{color:"white" , fontSize:"20px" , marginTop:"40px"}}> {lesson.description}  </p>

<Row>
<p style={{color:"white" , fontSize:"20px" , marginTop:"10%"}}> Kids preformences into this lessone: </p>
    {teacher.classId.classMembers.map(kid=> (
       <Row> 
           {kid.preformence.map(p=> p.lessonId == lesson._id? (
               <>
 <Col md={2}>
 <Avatar src={kid.avatar} style={{height:60 , width:60 , marginBottom:20}} />
</Col>
<Col md={4}>
<p style={{color:"white" , fontSize:"15px"}}> {kid.kidName}</p>
<meter min="0" max="100" low="30" high="75" optimum="80" value={p.score}></meter> <span style={{color:"white" , marginLeft:"10px"}}> {p.score}%</span>
<button style={{  background:"none" , border:"none" }} onClick={()=>deletePreformence(lesson._id , kid._id , p._id)} > <DeleteIcon /> </button>
</Col>
</>
           ) : (<p style={{color:"white" , marginLeft:"10px"}}> -  </p>)) }
       
        </Row>
    ))}

</Row>

</Col>
</Row>
    
    </section>
    <AddPreformenceModal show={show} setShow={setShow} teacher={teacher} lesson={lesson} />

    </>)
}

export default OneLessson
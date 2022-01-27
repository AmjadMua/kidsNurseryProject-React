import { Avatar } from "@mui/material"
import { useContext, useState } from "react"
import { Row, Tab, Tabs , Col,Card, CardGroup } from "react-bootstrap"
import AddLesson from "../componentes/AddLesson"
import NavbarMainPage from "../componentes/Navbar"
import TeacherLessons from "../componentes/TeacherLessons"
import NurseryContext from "../utlis/NuresuryContect"

function TeacherHome() {

const {teacher} = useContext(NurseryContext)
const [show , setShow] = useState(false)
 if(!teacher) return <p> loding...</p>

 console.log(teacher);
    return (<>
    <header className="teacherHeader">
        <NavbarMainPage />
       <Row style={{padding:70}}>
        <Col md={2}>
            <Row>
            <Avatar src={teacher.avatar} style={{height:170 , width:170 }} />
            </Row>
            <Row>
                {teacher.name}
            </Row>
            <Row>
                {teacher.email}
            </Row>
            
        </Col>
        <Col md={1}>
        <div className="vl"></div>
        </Col>
        <Col md={9}>
        <Row style={{textAlign:"center"}}> <p style={{color:"white" , fontSize:"22px" , fontWeight:"bold"}}> Class : {teacher.classId.nameOfClass} </p>
         <button onClick={() => setShow(true)} style={{ color:"black" , backgroundColor:"white" , border:"1px solid black" , borderRadius:"10px" , fontSize:"15px" } }> New Lesson </button>
        </Row>
        <Row style={{margin:"30px"}}>
        {teacher.classId.lessons.map(lesson=> (
            <TeacherLessons lesson={lesson} key={lesson._id} classId={teacher.classId} />
        ))}
   
        </Row>
        <Row>
        <p style={{color:"white" , fontSize:"20px" , marginTop:"30px"}}> Class Members: </p>
<Row>
{teacher.classId.classMembers.map(kid=> (
    <Avatar src={kid.avatar} style={{height:60 , width:80 , marginBottom:20}} />
))}
</Row>
        </Row>
        
        </Col>
       </Row>
        
    </header>
    <AddLesson show={show} setShow={setShow} classId={teacher.classId} />
   
    </>)
}

export default TeacherHome
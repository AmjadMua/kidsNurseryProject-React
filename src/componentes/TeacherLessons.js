import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import NurseryContext from "../utlis/NuresuryContect";


function TeacherLessons(props) {
    const { lesson , classId } = props
    const {deleteLesson} = useContext(NurseryContext)

    return(<>
    <Col md={4} style={{marginTop:"10px"}}>
   
   <Card className="bg-dark text-white">
            <Card.Img src={lesson.photo} height="150px" style={{ opacity:"0.4" }} />
            <Card.ImgOverlay>
            <Link to={`/lesson/${lesson._id}`} style={{color:"white" , textDecoration:"none"}}>
              <Card.Title>{lesson.lessonName}</Card.Title>
              </Link>
              <Card.Text> Lesson state: <br/>
              {lesson.state}
              </Card.Text>
              <Card.Footer style={{marginLeft:"70%"}}> <button onClick={()=> deleteLesson(classId._id , lesson._id)} style={{ background:"none" , border:"none" , marginLeft:"30%" }} > <DeleteIcon sx={{ color: "red" }} /> </button></Card.Footer>
            </Card.ImgOverlay>
          </Card>
         
   </Col>
    </>)
}
export default TeacherLessons
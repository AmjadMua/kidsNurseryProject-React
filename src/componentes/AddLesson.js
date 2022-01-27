import { Avatar } from "@mui/material"
import { useContext } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import NurseryContext from "../utlis/NuresuryContect"

function AddLesson(props){
 const {show , setShow , classId} = props
const{addLesson} = useContext(NurseryContext)
console.log(classId._id);

    return(<>
    <Modal show={show}>
        <Modal.Header> Add New Lesson: </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e)=> addLesson(e , classId._id)}>
          <Form.Control required type="text" name="lessonName" placeholder="Lesson name" />
          <Form.Control required type="text" name="descriptipn" placeholder="Description" />
          <Form.Control required type="url" name="photo" placeholder="photo" />
          <Form.Control required type="text" name="state" placeholder="Lesson state" />
          <button type="submit" onClick={()=> setShow(false)} style={{ color:"black" , backgroundColor:"white" , border:"1px solid black" , borderRadius:"10px" , fontSize:"15px" } }> Add  </button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={()=> setShow(false)} style={{ color:"black" , backgroundColor:"white" , border:"1px solid black" , borderRadius:"10px" , fontSize:"15px" } }> Close </button>
             </Modal.Footer>
    </Modal>
    </>)
}
export default AddLesson
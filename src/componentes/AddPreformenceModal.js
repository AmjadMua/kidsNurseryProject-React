import { Avatar } from "@mui/material"
import { useContext } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import NurseryContext from "../utlis/NuresuryContect"

function AddPreformenceModal(props){
 const {show , setShow , teacher , lesson} = props
const {addPreformence} = useContext(NurseryContext)

    return(<>
    <Modal show={show}>
        <Modal.Header> add prsformence: </Modal.Header>
        <Modal.Body>
            <Row>
            {teacher.classId.classMembers.map(kid => kid.preformence.find(p=> p.lessonId == lesson._id)? null : (
             <Form style={{border:"1px solid gray" }} onSubmit={(e)=>addPreformence(e , teacher.classId._id , lesson._id , kid._id)}>
                 <Row>
                <Col md={2}> <Avatar src={kid.avatar} style={{height:60 , width:80 , marginBottom:20}} /> </Col>
                <Col><p>{kid.kidName}</p></Col>
                <Col>  <button type="submit" onClick={()=> setShow(false)} style={{ color:"white" , backgroundColor:"#fa8722" , border:"none" , borderRadius:"10px" , fontSize:"15px" , marginLeft:"30px" , marginTop:"10%"}}> Add </button> </Col>
                <Form.Control required type="number" name="preformenceScore" placeholder="Score" />
                <Form.Control required type="text" name="preformenceNote" placeholder="Note" />
               
                </Row>
                </Form>
            ))}
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={()=> setShow(false)} style={{ color:"black" , backgroundColor:"white" , border:"1px solid black" , borderRadius:"10px" , fontSize:"15px" } }> Close </button>
             </Modal.Footer>
    </Modal>
    </>)
}
export default AddPreformenceModal
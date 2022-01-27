import { Avatar } from "@mui/material"
import { useContext } from "react"
import { Col, Form, Modal, Row } from "react-bootstrap"
import NurseryContext from "../utlis/NuresuryContect"

function JoinActivityModal(props){
    const {joinActivity} = useContext(NurseryContext)
    const{show , setShow , parent , activity} = props
console.log(parent.kids);
    return(<>
    <Modal show={show}>
        <Modal.Header> Register kids into the activity: </Modal.Header>
        <Modal.Body>
            <Row>
            {parent.kids.map(kid => activity.teamMembers.find(onekid=> onekid._id == kid._id) ?
             (<p style={{color:"red"}}> Your kid allready rigested into this activity</p>)
             : (<>
                <Col> <Avatar src={kid.avatar} style={{height:60 , width:80 , marginBottom:20}} /> </Col>
                <Col><p>{kid.kidName}</p></Col>
                <Col>  <button type="submit" onClick={()=> joinActivity(activity._id , kid._id)} style={{ color:"white" , backgroundColor:"#fa8722" , border:"none" , borderRadius:"10px" , fontSize:"15px" , marginLeft:"30px"}}> Join Now! </button> </Col>
           </>
            ) )}
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={()=> setShow(false)} style={{ color:"black" , backgroundColor:"white" , border:"1px solid black" , borderRadius:"10px" , fontSize:"15px" } }> Close </button>
             </Modal.Footer>
    </Modal>
    </>)
}
export default JoinActivityModal
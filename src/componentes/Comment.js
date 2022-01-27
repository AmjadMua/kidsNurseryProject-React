import { Component, useContext } from "react";
import { Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import NurseryContext from "../utlis/NuresuryContect";

function Comment(props) {
    const {comment , parent , activity} = props
    const {deleteComment} = useContext(NurseryContext)

    const owner = parent._id == comment.parentId._id
    console.log(owner);
    return (<>
    <Row style={{marginTop:"20px" , backgroundColor:"rgba(192, 152, 93, 0.836)" , maxWidth:"400px" , minHeight:"38px"}}>
 
        <Row>
            <p style={{color:"white" , fontSize:"17px"}}> {comment.parentId.parentFullName} : <span style={{color:"black" , fontSize:"15px"}}> {comment.comment} </span> {owner? (<button style={{  background:"none" , border:"none" , marginLeft:"30%" }} onClick={()=>deleteComment(activity._id , comment._id)}> <DeleteIcon /> </button>) : null }  </p>

        </Row>
    </Row>
    </>)
}
export default Comment
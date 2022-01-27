import { Avatar } from "@mui/material"
import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import {Link} from "react-router-dom"
import NurseryContext from "../utlis/NuresuryContect"

function KidCard(props) {

    const { kid } = props

    return(<>

        <Col style={{backgroundColor:"#7EB27F" , padding:"15px" , borderRadius:"30px" , marginRight:"40px" }} md={4}>
<Link to={`/onekid/${kid._id}`} style={{ textDecoration:"none" }}>
        <Avatar src={kid.avatar} style={{height:150 , width:150  , backgroundColor:"white" , marginLeft:"20%"}} />
        <p style={{color:"black" , fontSize:"1em" , fontFamily:"sans-serif" , backgroundColor:"white" , textAlign:"center" , marginTop:"15px"}}> {kid.kidName} </p>
        </Link>
        </Col>

    </>)
}
export default KidCard
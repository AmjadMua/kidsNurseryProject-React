
import { Avatar} from "@mui/material"
import { useContext } from "react"
import { Row, Tab, Tabs , Col, CardGroup } from "react-bootstrap"
import ActivitiesCard from "../componentes/ActivitiesCard"
import KidCard from "../componentes/KidCard"
import NavbarMainPage from "../componentes/Navbar"
import parentsectionHeader from "../utlis/images/parentsectionHeader.png"
import NurseryContext from "../utlis/NuresuryContect"



function ParentHome() {

  const {parent , activites} = useContext(NurseryContext)
 
  if(!parent) return <p> loding....</p>
    return (<>
    <header className="parentHeader">
        <NavbarMainPage />
       <Row style={{margin:"40px 170px" , display:"flex" , alignItems:"center" , textAlign:"center"}}>
         <Col>
         <Avatar src={parentsectionHeader} style={{height:300 , width:300 }} />
         </Col>
         <Col>
      <p style={{color:"white" , fontSize:"2em" , fontFamily:"sans-serif"}}> Welcome <span style={{color:"#cc9463" , fontWeight:"bold"}}>{parent.parentFullName} </span>! </p>
      <p style={{color:"white" , fontSize:"1em" , fontFamily:"sans-serif"}}> {parent.email} </p>
         </Col>
       </Row>
        
    </header>
    <section className="tabs" >
    <Tabs defaultActiveKey="activities" id="uncontrolled-tab-example" className="mb-2" >
  <Tab eventKey="activities" title="Nursery Activities" >
  <CardGroup>
    {activites.map(activity=> (
       <ActivitiesCard key={activity._id} activity={activity} />
    ))}
          </CardGroup>
 
  </Tab>
  <Tab eventKey="myKids" title="MY Kids">
    <Row style={{margin:"5% 180px" , justifyItems:"center" , alignItems:"center"}} >
    {parent.kids.map(kid => (
      <KidCard key={kid._id} kid={kid} />
    ))}
  </Row>
  </Tab>
</Tabs>
    </section>
    </>)
}

export default ParentHome
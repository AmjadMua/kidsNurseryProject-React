import { Card, Col } from "react-bootstrap"

function JoiendACT(props) {

const {activity} = props
    return(<>
   <Col md={4} style={{margin:"10px"}}>
   <Card className="bg-dark text-white">
            <Card.Img src={activity.photos[0]} height="150px" />
            <Card.ImgOverlay>
              <Card.Title>{activity.activityName}</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <Card.Text>{activity.date.split("",10)}</Card.Text>
            </Card.ImgOverlay>
          </Card>
   </Col>
    </>)
}
export default JoiendACT
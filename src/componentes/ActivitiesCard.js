import { Card, CardGroup } from "react-bootstrap"

function ActivitiesCard(props) {
    const {activity} = props
    if(!activity) return <p> loding...</p>

    const cardImage = activity.photos.find(photo=> photo[0])
    const activiteDate = activity.date.split("",10)

    return (<>
  <Card>
           <Card.Img variant="top" src={cardImage} />

    <Card.Body>
      <Card.Title>{activity.activityName}</Card.Title>
      <Card.Text> {activity.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> {activiteDate} </small>
      <a href={`/${activity._id}`} style={{marginLeft:"62%"}}> More! </a>
    </Card.Footer>
  </Card>

    </>)
}

export default ActivitiesCard
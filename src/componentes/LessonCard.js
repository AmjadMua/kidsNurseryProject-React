import { Card, Row } from "react-bootstrap"

function LessonCard(props){
    const {lesson , preformence} = props
 
    const score = preformence.find(preformenceLesson => preformenceLesson.lessonId._id == lesson._id)


    if(!lesson) return <p> loding..</p>
    return(<>
    <Row style={{marginTop:"5px"}}>
    {lesson? (
        <Card>
        <Card.Header> {lesson.lessonName} </Card.Header>
  <Card.Body><p>{lesson.description}</p></Card.Body>
  {score? (
      <Card.Footer> {score.kidId.kidName}'s Score : {score.score} , {score.note}
      
      </Card.Footer>
  ) : null }
</Card>
    ): (
        <Card>
            <Card.Body>
        <p> There is No lesson </p>
        </Card.Body>
        </Card>
    )}
    </Row>
    
    </>)
}
export default LessonCard
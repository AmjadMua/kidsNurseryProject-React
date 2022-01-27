import { Avatar, Button, Card, CardMedia, Typography , CardContent , CardActions } from "@mui/material"
import { Container, Navbar , Col , Row, Form} from "react-bootstrap"

import teacherLogin from "../utlis/images/teacherLogin.png"
import parentLoginimg from "../utlis/images/parentLoginimg.png"
import { useContext } from "react"
import NurseryContext from "../utlis/NuresuryContect"

function Login() {
    const {loginParent , loginTeacher} = useContext(NurseryContext)

    return(
        
        <section className="loginPage" >
        <Navbar style={{marginBottom:50}} >
  <Container>
    <Navbar.Brand href="/"  style={{color:"white" , fontSize:"2em"}}>Logo</Navbar.Brand>
    <Navbar.Toggle />
  </Container>
        </Navbar>
        <Row style={{marginBottom: 20 , textAlign:"center" , color:"white" , fontSize:"2em"}}>
          <p> Welcome agine! <br />
            Login as a Parent or teacher..</p>
        </Row>

        <Row className="usersOption">
          
        <Col>
            <Card sx={{ maxWidth: 300 , textAlign: "center" , marginLeft:40 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={teacherLogin}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Teacher
        </Typography>
        <Form onSubmit={loginTeacher}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>username</Form.Label>
              <Form.Control required type="text" name="teacherusername" placeholder="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" name="teacherpassword" placeholder="Password" />
            </Form.Group>
            <button className="loginbtn" type="submit">
              Login
            </button>
        
          </Form>
</CardContent>
    </Card>
            </Col>
            <Col>
            <Card sx={{ maxWidth: 300 , textAlign: "center" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={parentLoginimg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Parent
        </Typography>
        <Form onSubmit={loginParent}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>username</Form.Label>
              <Form.Control required type="text" name="parentusername" placeholder="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" name="parentpassword" placeholder="Password" />
            </Form.Group>
            <button className="loginbtn" type="submit">
              Login
            </button>
        
          </Form>
</CardContent>
    </Card>
            </Col>
            
        </Row>
        
         
        </section>
    
    )
}
export default Login
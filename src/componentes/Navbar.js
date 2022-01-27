import { useContext } from "react"
import { Container, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"
import NurseryContext from "../utlis/NuresuryContect"

function NavbarMainPage() {
  const{logoutparent , logoutteacher} = useContext(NurseryContext)
    return(<>
    <Navbar >
  <Container>
    <Navbar.Brand href="/"  style={{color:"white" , fontSize:"2em"}}>Logo</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end" >
      {localStorage.parentToken? (
<>
        <Link to="/parentHome"  className="btn-login" style={{marginRight:"10px", textAlign:"center" ,textDecoration:"none" }} > Profile </Link>
        <button className="btn-login" onClick={logoutparent}> Log out </button>
       </>
      ):
      localStorage.teacherToken? (
        <>
                <Link to="/teacherHome"  className="btn-login" style={{marginRight:"10px", textAlign:"center" ,textDecoration:"none" }} > Profile </Link>
                <button className="btn-login" onClick={logoutteacher}> Log out </button>
               </>
              ):
      ( <>
        <Link to="/login">
        <button className="btn-login"> Login as </button>
        </Link>
        </>
      )}
     
    
      </Navbar.Collapse>
  </Container>
</Navbar>
    </>)
}


export default NavbarMainPage 

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Footer from './componentes/Footer';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import {toast, ToastContainer} from "react-toastify"
import NurseryContext from './utlis/NuresuryContect';
import axios from "axios"
import ParentHome from './pages/ParentHome';
import OneKid from './pages/OneKid';
import OneActivity from './pages/OneActivity';
import TeacherHome from './pages/TeacherHome';
import OneLessson from './pages/OneLesson';

function App() {
  const navigate = useNavigate()
const [parent , setParent] = useState()
const [teacher , setTeacher] = useState()
const [activites , setActivites] = useState()

useEffect(()=>{
  getParent()
  getTeacher()
  getActivities()
}, [])

// --------------------------------- Parent Section --------------------------
// login parent 
const loginParent = async e => {
  e.preventDefault()
try {
const form = e.target
  const parentBody = {
    username: form.elements.parentusername.value ,
    password: form.elements.parentpassword.value
  }
  const response = await axios.post("http://localhost:5000/kidsNursery/parents/login" , parentBody)
  localStorage.parentToken = response.data 
  toast.success("login success")
  getParent()
  navigate("/parentHome")

} catch (error) {
 console.log(error.response.data)
}
}


// parent Profile 
const getParent = async() => {
  try {
    const response = await axios("http://localhost:5000/kidsNursery/parents/profile" ,{
      headers:{
        Authorization: localStorage.parentToken
      }
    })
    setParent(response.data);
  } catch (error) {
    console.log(error)
  }
}

// get activities
const getActivities = async() => {
  try {
    const response = await axios("http://localhost:5000/kidsNursery/parents/kids/activities")
    setActivites(response.data);
    
  } catch (error) {
    console.log(error)
  }
}

// add comment on activity
const addcomment = async(e , activitId) => {
  e.preventDefault()
  try {
    const form = e.target

    const commentBody = {
      comment: form.elements.comment.value
    }
    await axios.post(`http://localhost:5000/kidsNursery/parents/kids/activities/${activitId}/comments` , commentBody , {
      headers: {
        Authorization: localStorage.parentToken
      },
      })
      toast.success("Comment added")
      getActivities()
      form.reset()
  } catch (error) {
    console.log(error)
  }
}

// delete comment
const deleteComment = async(activityId , commentId) => {
  try {
   await axios.delete(`http://localhost:5000/kidsNursery/parents/kids/activities/${activityId}/comments/${commentId}` , {
    headers: {
      Authorization: localStorage.parentToken
    },
    })
    toast.success("comment Deleted!")
    getActivities()
  } catch (error) {
    console.log(error);
  }
}

// register kid into an activity
const joinActivity = async( activityId , kidId ) => {
  try {
    await axios(`http://localhost:5000/kidsNursery/parents/kids/activities/join/${activityId}/${kidId}` , {
      headers: {
        Authorization: localStorage.parentToken
      },
      })
      getParent()
    getActivities()
    toast.success("Joiend successfully!")
    
  } catch (error) {
    console.log(error.data);
  }
}

//parent logout
const logoutparent= () => {
    localStorage.removeItem("parentToken")
    getParent()
    toast.success("logout successfully")
    navigate("/")
 
}

// -------------------------------- Teachers -------------------------------
// login parent 
const loginTeacher = async e => {
  e.preventDefault()
try {
const form = e.target
  const teacherBody = {
    username: form.elements.teacherusername.value ,
    password: form.elements.teacherpassword.value
  }
  const response = await axios.post("http://localhost:5000/kidsNursery/teachers/login" , teacherBody)
  localStorage.teacherToken = response.data 
  toast.success("login success")
  navigate("/teacherHome")

} catch (error) {
 toast.error(error.response.data)
}
}

// teacher Profile 
const getTeacher = async() => {
  try {
    const response = await axios("http://localhost:5000/kidsNursery/teachers/profile" , {
      headers:{
        Authorization: localStorage.teacherToken
      }
    })
    setTeacher(response.data);
  } catch (error) {
    console.log(error.data);
  }
}

// delete preformence
const deletePreformence = async(lessonId, kidId , preformenceId) =>{
  try {
    await axios.delete(`http://localhost:5000/kidsNursery/teachers/${lessonId}/preformences/${kidId}/${preformenceId}`,{
      headers:{
        Authorization: localStorage.teacherToken
      }
    })
    getTeacher()
    toast.success("Preformence removed successfully")
    
  } catch (error) {
    console.log(error.data);
  }
}
// add Preformence 
const addPreformence = async(e , classId , lessonId , kidId) => {
  e.preventDefault()
  try {
    const form = e.target
    const preformenceBody = {
      score: form.elements.preformenceScore.value,
      note: form.elements.preformenceNote.value
    }
    await axios.post(`http://localhost:5000/kidsNursery/teachers/${classId}/${lessonId}/preformences/${kidId}` , preformenceBody , {
      headers:{
        Authorization: localStorage.teacherToken
      }
    })
    getTeacher()
    toast.success("preformence added")
  } catch (error) {
    console.log(error);
  }
}
// add lesson 
const addLesson = async(e , classId) => {
  e.preventDefault()
  try {
    const form = e.target
    const lessonBody ={
      lessonName:form.elements.lessonName.value , 
      description:form.elements.descriptipn.value ,
       photo: form.elements.photo.value , 
       state: form.elements.state.value
    }
    await axios.post(`http://localhost:5000/kidsNursery/teachers/class/${classId}/add-lesson`, lessonBody , {
      headers:{
        Authorization: localStorage.teacherToken
      }
    })
    getTeacher()
    toast.success("lesson added")
  } catch (error) {
    console.log(error.data);
  }
}
// delete lesson
const deleteLesson = async(classId , lessonId) => {
  try {
    await axios.delete(`http://localhost:5000/kidsNursery/teachers/${classId}/${lessonId}` , {
      headers: {
        Authorization: localStorage.teacherToken
      }
    })
    getTeacher()
    toast.success("lesson is removed")
  } catch (error) {
    console.log(error);
  }
}

//teacher logout
const logoutteacher= () => {
  localStorage.removeItem("teacherToken")
  getTeacher()
  toast.success("logout successfully")
  navigate("/")

}
const store = {
  parent,
  teacher,
  activites,
  loginParent,
  loginTeacher,
  addcomment,
  deleteComment,
  addPreformence,
  addLesson,
  deleteLesson,
  deletePreformence,
  joinActivity,
  logoutparent,
  logoutteacher
}
  return (<>
  <NurseryContext.Provider value={store}>
  <ToastContainer />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/parentHome" element={localStorage.parentToken?<ParentHome /> : <Login />} />
      <Route path="/onekid/:kidId" element={localStorage.parentToken? <OneKid /> : <Login />} />
      <Route path="/:activityId" element={localStorage.parentToken? <OneActivity /> : <Login />} />
      <Route path="/teacherHome" element={localStorage.teacherToken?<TeacherHome /> : <Login />} />
      <Route path="/lesson/:lessonId" element={localStorage.teacherToken? <OneLessson /> : <Login />} />
    </Routes>
    <Footer />
  </NurseryContext.Provider>
 
    </>
  );
}

export default App;

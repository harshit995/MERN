import React ,{useState,useEffect} from 'react'

const Home = () => {


  const[userName,setUserName]=useState("");
  const[show,setShow]=useState(false);
 
  const UserHome = async ()=>{
    try {
      const res= await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      })
  
      const data=await res.json();
      console.log(data);
      setUserName(data.name );
      setShow(true);
  
    } catch (error) {
      console.log(error)
     
    }
  }


  
    useEffect(() => {
      UserHome();
    },[])

  return (
    <>
      <div className="home-page">
        <div className=" home-div">
        <h3 className='text-center'>Welcome</h3>
        <h1  className='text-center'>{userName}</h1>
        <h1>{show ? 'Happy to See you back' : 'We are The MERN Developers'}</h1>
        </div>
      </div>
    </>
  )
}

export default Home
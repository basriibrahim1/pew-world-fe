import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../../utility/navbar/navbar'
import Footer from '../../utility/footer/footer'
import IdWorkerAction from "../../storage/actions/worker/idWorkerAction";
import axios from "axios";

const HiringPages = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.idWorker.data);
  const [position, setPosition] = useState("")
  const [hire_description, setHireDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [formHire, setFormHire] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(IdWorkerAction(id));
  }, [id, dispatch]);

  const handleSendHire = async (e) => {
    e.preventDefault();
    setFormHire({
      chat:hire_description,
      hire_description:hire_description,
      position:position
    })
    setSubmitted(true)
  };

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_BASE_URL
    const header = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
    if(submitted){
      const postHire= async () =>{
        try {
          const result = await axios.post(`${url}/hire/${id}`, formHire, header)
          let res = result.data.data
          console.log("Hire sent :" , res);
          setSubmitted(false)
        } catch (error) {
          console.log(error.message);
          setSubmitted(false)
        }
      }
      postHire().then(()=>{
        navigate("/chat");
      })
    }
  },[formHire, id, navigate, submitted])

  return (
    <>
    <div className='shadow p-3 mb-5 bg-white rounded'>
      <Navbar />
    </div>


   
        {/* left */}
        {data.map((item) => {
            return(
            <div className='container d-flex w-100 ' key={item.id}>
              <div className='w-25 d-flex flex-column border border-light shadow-lg align-items-center p-2 py-3 position-relative bg-white rounded ms-5 ' key={item.id}>
                  <img className=' w-50' style={{objectFit:'contain'}} src={item.photo} alt="" />
                  <div className='align-items-start ms-3 mt-4'>
                  <h5 className='fw-bold'>{item.name}</h5>
                      <p className='mt-4' style={{opacity:'0.7'}}>{item.job}</p>
                      <p  style={{opacity:'0.7'}}>{item.location}</p>
                      <p  style={{opacity:'0.7'}}>{item.description}</p>
                      <h5 className='mt-5'>Skill</h5>
                      <div className='row col-12 text-white mt-4 d-flex' >
                          {item.skills.split(', ').map((skill) => (
                                      <p className='col-3 bg-warning mx-2 rounded p-1 text-center d-flex' key={skill.id}>{skill}</p>
                          ))}
                      </div>
                  </div>
              </div>
              <div className='ms-5 w-100'>
              <div className='ms-5'>
                  <h1>{`Hubungi ${item.name}`}</h1>
                  <p style={{opacity:'0.5'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nam, quasi, harum consequatur recusandae tenetur qui nemo dolores officia cum eaque magni! Nam, eveniet quis.</p>
                  <div className='d-flex flex-column mt-5' style={{opacity:'0.5'}} >
                      <label htmlFor="">Untuk Posisi</label>
                      <input id="position" name="position" onChange={(e)=> setPosition(e.target.value)} className='p-3 border-0 shadow-sm border-light mt-2' type="text" placeholder='Fulltime frontend developer' />
                  </div>
                  <div className='d-flex flex-column mt-5' style={{opacity:'0.5'}} >
                      <label htmlFor="">Deskripsi</label>
                      <textarea id="hire_description" name="hire_description" onChange={(e)=> setHireDescription(e.target.value)} className='p-3 border-0 shadow-sm border-light mt-2'rows='10' placeholder='Membuat fitur dan maintenance untuk dashboard admin dan posisi remote' />
                  </div>
                  <button className='btn btn-primary w-100 mt-5 p-3' onClick={handleSendHire}>Hire</button>
              </div>
              </div>
            </div>
            )
        })}
        
        

   

    

    <Footer />
    </>
  )
};

export default HiringPages;

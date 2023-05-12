import React, { useEffect, useState } from 'react'
import Navbar from '../../utility/navbar/navbar'
import { useDispatch, useSelector } from 'react-redux'
import UpdateWorkerAction from '../../storage/actions/worker/updateWorkerAction'
import LoadingScreen from '../../utility/loading/loading'
import IdWorkerAction from '../../storage/actions/worker/idWorkerAction'
import InsertSkills from './addSkills'
import InsertPengalaman from './addPengalaman'
import PayloadWorkerAction from '../../storage/actions/worker/payloadWorkerAction'
import InsertPortofolio from './addPortofolio'
import { AiOutlineEdit } from 'react-icons/ai'

const InsertBiodata = () => {


    const id = localStorage.getItem('id')

    const users = useSelector(state => state.idWorker.data[0])
    const isLoading = useSelector(state => state.idWorker)
    const Loading = useSelector(state => state.updateWorker.isLoading)
    
    const dispatch = useDispatch()

    const [biodata, setBiodata] = useState({ 
        name: '' , 
        job: '' , 
        city: '' , 
        province: '' , 
        description: ''
    })


    const [photo, setPhoto] = useState('')
    const [image, setImage] = useState('')

    const handleBiodata = (e) => {
        setBiodata({
            ...biodata,
            [e.target.name] : e.target.value
        })
    };


    const handlePhoto = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
        setPhoto(e.target.files[0])
    }


    const submitPhoto = async (e) => {
        e.preventDefault()

        const photoForm = new FormData()
        photoForm.append("employee_photo", photo)


        await dispatch(UpdateWorkerAction(photoForm))
        dispatch(IdWorkerAction(id))
    }


    const submitForm = async (e) => {
        e.preventDefault()
        const editForm = new FormData()
        editForm.append('name', biodata.name)
        editForm.append('employee_job', biodata.job)
        editForm.append('city_name', biodata.city)
        editForm.append('province_name', biodata.province)
        editForm.append('employee_description', biodata.description)

        await dispatch(UpdateWorkerAction(editForm))


        dispatch(PayloadWorkerAction())
        dispatch(IdWorkerAction(id))
    
    }


    useEffect(() => {
        dispatch(IdWorkerAction(id))
    },[dispatch, id])

  return (
    <>

    <Navbar />

    <div className="container-fluid position-absolute" style={{ backgroundColor: "#5E50A1", top: "120px", height: "50vh" }}></div>
       
    <div className='container d-flex '>
            <form className='w-25 text-center mt-5 vh-50' onSubmit={submitPhoto}>
                <div className='shadow-lg border-0 border-white p-3 position-relative bg-white mt-5'>
                    <img style={{width:'200px', height:'150px', objectFit:'contain', borderRadius:'100%'}}  src={!photo ? users.photo : image} alt="" />
                    <div className='mt-3'>
                        
                        <label htmlFor="file-input" onClick={() => document.getElementById('file-input')}>
                            <div className='d-flex text-center align-items-center'>
                            <h5 className='text-center mb-2'><AiOutlineEdit /></h5>  
                             <h5 className='ms-2'>Edit</h5> 
                            </div>
                             </label>
                        <input id="file-input" name="file-input" type="file" style={{ display: 'none' }} onChange={handlePhoto} autoFocus/>
                    </div>
                    <div className='text-start ms-4 mt-4'>
                        <h4>{users.name}</h4>
                        <p>{users.job}</p>
                        <p style={{opacity:'0.5'}}>{users.city}, {users.province}</p>
                        <p style={{opacity:'0.5'}}>{users.description}</p>
                    </div>
                </div>
                <div className='d-flex flex-column '>
                    <button className='mt-5 btn btn-primary'>Simpan</button>
                    <button className='mt-3 border-0 btn btn-secondary'>Batal</button>
                </div>
            </form>

            {isLoading.isLoading && <LoadingScreen />}
            {Loading && <LoadingScreen />  }

            <div className='w-75 mt-5  ms-5 '>
                    <div className='shadow p-2 position-relative bg-white mt-5'>
                        <h5 className='border-bottom border-dark p-4'>Data diri</h5>
                        <form onSubmit={submitForm}>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="name">Nama lengkap</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="name" type="text" value={biodata.name}  onChange={handleBiodata}  placeholder='Masukan nama lengkap' />
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="job">Job Desk</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="job" type="text" value={biodata.job} onChange={handleBiodata} placeholder='Masukan job desk' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="city">Domisili</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="city" type="text" value={biodata.city} onChange={handleBiodata} placeholder='Masukan domisili' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="province">Tempat Kerja</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="province" type="text" value={biodata.province} onChange={handleBiodata} placeholder='Masukan tempat kerja' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="description">Deskripsi singkat</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="description" type="text" value={biodata.description} onChange={handleBiodata} placeholder='Masukan deskripsi singkat' required/>
                        </div>
                        <div className='w-100 mt-4 justify-content-end align-items-end d-flex mb-3'>
                            <button  type='submit' className='btn btn-primary me-4'>Submit</button>
                        </div>
                        </form>

                    </div>
                        <InsertSkills />
                        <InsertPengalaman />
                        <InsertPortofolio />
                </div>
            </div>

    

            
      
        

               

    </>
  )
}

export default InsertBiodata
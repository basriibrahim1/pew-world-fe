import React, { useEffect, useState } from 'react'
import Navbar from '../../utility/navbar/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineEdit } from 'react-icons/ai'
import UpdatePerusahaanAction from '../../storage/actions/perusahaan/updatePerusahaanAction'
import IdPerusahaanAction from '../../storage/actions/perusahaan/idPerusahaanAction'
import Footer from '../../utility/footer/footer'

const InsertBiodata = () => {


    const id = localStorage.getItem('id')

    const company = useSelector(state => state.idPerusahaan.data[0])
    
    const dispatch = useDispatch()

    const [perusahaan, setPerusahaan] = useState({ 
      name: '' , 
      email: '' , 
      phone: '' , 
      company_name: '',
      company_field: '',
      company_info: '',
      company_email: '',
      info: '',
      province_name: '',
    })


    const [photo, setPhoto] = useState('')
    const [image, setImage] = useState('')

    const handleChange = (e) => {
        setPerusahaan({
            ...perusahaan,
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
        photoForm.append("company_photo", photo)

        await dispatch(UpdatePerusahaanAction(photoForm))
        dispatch(IdPerusahaanAction(id))
    }


    const {name, email, phone, company_name, company_field, company_info, company_email, info, province_name, city_name} = perusahaan

    const submitForm = async (e) => {
        e.preventDefault()
        const editForm = new FormData()
        editForm.append('name', name)
        editForm.append('email', email )
        editForm.append('phone', phone)
        editForm.append('company_name', company_name)
        editForm.append('company_field', company_field)
        editForm.append('company_info', company_info)
        editForm.append('company_info', company_email)
        editForm.append('info', info)
        editForm.append('province_name', province_name)
        editForm.append('city_name', city_name)

        await dispatch(UpdatePerusahaanAction(editForm))


        dispatch(IdPerusahaanAction(id))
    }


    useEffect(() => {
        dispatch(IdPerusahaanAction(id))
    },[dispatch, id])

  return (
    <>

    <Navbar />

    <div className="container-fluid position-absolute" style={{ backgroundColor: "#5E50A1", top: "120px", height: "50vh" }}></div>
       
    <div className='container d-flex '>
            <form className='w-25 text-center mt-5 vh-50' onSubmit={submitPhoto}>
                <div className='shadow-lg border-0 border-white p-3 position-relative bg-white mt-5'>
                    <img style={{width:'200px', height:'150px', objectFit:'contain', borderRadius:'100%'}}  src={!photo ? company?.photo : image} alt="" />
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
                        <h4>{company?.name}</h4>
                        <h4>{company?.company_name}</h4>
                        <p>{company?.info}</p>
                        <p style={{opacity:'0.5'}}>{company?.city}, {company?.province}</p>
                    </div>
                </div>
                <div className='d-flex flex-column '>
                    <button className='mt-5 btn btn-primary'>Simpan</button>
                    <button className='mt-3 border-0 btn btn-secondary'>Batal</button>
                </div>
            </form>

            {/* {isLoading.isLoading && <LoadingScreen />}
            {Loading && <LoadingScreen />  } */}


            {/* const {name, email, phone, company_name, company_field, company_info, position, province_name, city_name} = perusahaan */}


            <div className='w-75 mt-5  ms-5 '>
                    <div className='shadow p-2 position-relative bg-white mt-5'>
                        <h5 className='border-bottom border-dark p-4'>Data diri</h5>
                        <form onSubmit={submitForm}>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="name">Nama</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="name" type="text" value={name}  onChange={handleChange}  placeholder='Masukan nama Perusahaan' />
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="company_name">Nama Perusahaan</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="company_name" type="text" value={company_name}  onChange={handleChange}  placeholder='Masukan nama Perusahaan' />
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="info">Position</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="info" type="text" value={info} onChange={handleChange} placeholder='Masukan Bidang perusahaan : ex Financial' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="province_name">Provinsi</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="province_name" type="text" value={province_name} onChange={handleChange} placeholder='Masukan Provinsi' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="city_name">Kota</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="city_name" type="text" value={city_name} onChange={handleChange} placeholder='Masukan Kota' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="company_field">Deskripsi singkat</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="company_field" type="text" value={company_field} onChange={handleChange} placeholder='Masukan deskripsi singkat' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="email">Email</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="email" type="text" value={email} onChange={handleChange} placeholder='Masukan email' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="company_email">Email Perusahaan</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="company_email" type="text" value={company_email} onChange={handleChange} placeholder='Masukan Email Perusahaan' required/>
                        </div>
                        <div className='d-flex flex-column mx-4 mt-4'>
                            <label style={{opacity:'0.5'}} htmlFor="phone">No Telepon</label>
                            <input className='p-2 rounded border-1 mt-1' style={{opacity:'0.5'}} name="phone" type="text" value={phone} onChange={handleChange} placeholder='Masukan nomor telepon' required/>
                        </div>
                        <div className='w-100 mt-4 justify-content-end align-items-end d-flex mb-3'>
                            <button  type='submit' className='btn btn-primary me-4'>Submit</button>
                        </div>
                        </form>

                    </div>
                </div>
            </div>

    

            
      
        <Footer />

               

    </>
  )
}

export default InsertBiodata
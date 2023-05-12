import React, { useEffect, useState } from 'react'
import { MdOutlineImageNotSupported } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import InsertPortoAction from '../../storage/actions/portofolio/addPortoAction'
import DeletePortoAction from '../../storage/actions/portofolio/deletePortoAction'
import GetPortoAction from '../../storage/actions/portofolio/getPortoAction'
import IdPortoAction from '../../storage/actions/portofolio/idPortoAction'
import UpdatePortoAction from '../../storage/actions/portofolio/updatePortoAction'

const InsertPortofolio = () => {

    const porto = useSelector(state => state.getPorto.data)
    const idPorto = useSelector(state => state.idPorto.data)



    const dispatch = useDispatch()

    const [addPorto, setAddPorto] = useState({
        porto_title: '',
        porto_link: '',
        porto_type: '',
    })


    const [photo, setPhoto] = useState('')
    const [image, setImage] = useState('')

    const handlePhoto = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
        setPhoto(e.target.files[0])
    }

    const handleInsert = (e) => {
        setAddPorto({
            ...addPorto,
            [e.target.name] : e.target.value
        })
    }

    const postForm = async (e) => {

        e.preventDefault()

        const formData = new FormData()
        formData.append('porto_title', addPorto.porto_title)
        formData.append('porto_link', addPorto.porto_link)
        formData.append('porto_type', addPorto.porto_type)
        formData.append('porto_photo', photo)

        await dispatch(InsertPortoAction(formData))
        dispatch(GetPortoAction())
    }

    useEffect(() => {
        dispatch(GetPortoAction())
    },[dispatch])
   


    const [isEditing, setIsEditing] = useState(false);

    const [editPorto, setEditPorto] = useState({
        porto_title: '',
        porto_link: '',
        porto_photo: '',
        porto_type: ''
    })

    const [portoId, setPortoId] = useState(null);

    const handleEdit = (e) => {
        setEditPorto({
            ...editPorto,
            [e.target.name] : e.target.value
        })
    };


    const handleSetIsEdit = (id) => {
        setIsEditing(true);
        setPortoId(id);
        dispatch(IdPortoAction(id))
    };

    const handleCancel = () => {
        setIsEditing(false)
    }


    const postEdit = async (e) => {
        e.preventDefault()


        const editForm = new FormData()
        editForm.append('porto_title', editPorto.porto_title)
        editForm.append('porto_link', editPorto.porto_link)
        editForm.append('porto_photo', photo)
        editForm.append('porto_type', editPorto.porto_type)


        await dispatch(UpdatePortoAction(portoId, editForm))

        dispatch(GetPortoAction())
        setIsEditing(false)
    }


    const handleDelete = async (id) => {
       await dispatch(DeletePortoAction(id))
       dispatch(GetPortoAction())
    }

  return (
    <>
      <div className='shadow mt-5 pb-5'>
        <h5 className='border-bottom border-bottom border-dark p-4'>Portofolio</h5>

                {isEditing ?
                
                (idPorto.map(item => (
                            <form onSubmit={postEdit} key={item.id} className='mt-5'>
                                <div className='d-flex w-100 align-items-center border-bottom border-dark py-5' >
                                    <div className='w-25 text-center'>       
                                        <img className='ms-5 text-center align-items-center justify-content-center d-flex' style={{width:'150px', height:'100px', objectFit:'contain'}} src={!photo ? item.porto_photo : image} alt="" />
                                    </div>
                                    <div className='d-flex flex-column ms-5 w-50'>
                                        <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPorto.porto_title} onChange={handleEdit} name='porto_title' placeholder={item.porto_title}/>
                                        <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPorto.porto_link} onChange={handleEdit} name='porto_link' placeholder={item.porto_link}/>
                                        <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPorto.porto_type} onChange={handleEdit}  name='porto_type' placeholder={item.porto_type} /> 
                                        <input className='mt-2' type="file" onChange={handlePhoto}/>
                                    </div>
                                    <div className='d-inline-block w-25 me-3'>
                                        <div className='d-flex justify-content-end'>
                                            <button className='btn btn-primary me-3' type='submit'>Simpan</button>
                                            <button className='btn btn-warning' onClick={handleCancel}>Batal</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        ))
                )
   
                : 
                
                
                (porto &&
                    porto.map(item => ( 
                        
                        <div className='d-flex w-100 align-items-center border-bottom border-dark' key={item.id}>
                            {!item.porto_photo ? <h1 className='text-center w-25'> <MdOutlineImageNotSupported /></h1> :
                                <img className='ms-5 text-center align-items-center justify-content-center d-flex' style={{width:'100px', height:'100px'}} src={item.porto_photo} alt="" />  }
                                <div className='d-flex flex-column ms-5 w-50'>
                                    <h5>{item.porto_title}</h5>
                                    <p>{item.porto_link}</p>
                                    <p>{item.porto_type}</p>
                                </div>
                                    <div className='d-inline-block w-25 '>
                                        <div className='d-flex justify-content-center'>
                                        <button className='btn btn-primary me-3' onClick={() => handleSetIsEdit(item.id)}>Edit</button>
                                        <button className='btn btn-warning' onClick={() => handleDelete(item.id)} >Delete</button>
                                        </div>
                                    </div>
                            </div>

                            
                        ))
                )
            }
    
      
        <form onSubmit={postForm}>
        
            <div className='d-flex flex-column w-100 px-5 mt-5'>
                <label htmlFor="porto_title" style={{opacity:0.5}}>Nama Aplikasi</label>
                <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" onChange={handleInsert} value={addPorto.porto_title} name='porto_title' placeholder='Masukan nama aplikasi'/>
            </div>
            <div className=' d-flex w-100 px-5 mt-3'>
                <div className='d-flex flex-column w-100'>
                    <label htmlFor="porto_link" style={{opacity:0.5}}>Link Repository</label>
                    <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" onChange={handleInsert} value={addPorto.porto_link} name='porto_link' placeholder='Masukan link repository'/>
                </div>
            </div>
               
            <div className='d-flex flex-column w-100 px-5 mt-3'>
                <label htmlFor="porto_type" style={{opacity:0.5}}>Type portofolio</label>
                <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" onChange={handleInsert} value={addPorto.porto_type} name='porto_type' placeholder='Masukan Type'/>
            </div>
            
            <div>
            <div className='d-flex flex-column w-100 px-5 mt-3' >
                <label htmlFor="porto_photo" style={{opacity:0.5}}>Masukan gambar</label>
                <div className='text-center mt-3' style={{borderStyle:'dotted', opacity:'0.5'}}>
                    <img src={!photo ? image : photo} alt="" />
                    <input type="file" onChange={handlePhoto}/>
                </div>
            </div>
            </div>

                
            <div className='px-5 mt-5'>
                <button type='submit' className='w-100 btn btn-primary'>Simpan</button>
            </div>
        </form>
    
        </div>
    </>
  )
}

export default InsertPortofolio
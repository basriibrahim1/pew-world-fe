import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InsertPengalamanAction from '../../storage/actions/pengalaman/addPengalamanAction'
import {MdOutlineImageNotSupported} from 'react-icons/md'
import GetPengalamanAction from '../../storage/actions/pengalaman/getPengalamanAction'
import IdPengalamanAction from '../../storage/actions/pengalaman/idPengalamanAction'
import UpdatePengalamanAction from '../../storage/actions/pengalaman/updatePengalamanAction'
import DeletePengalamanAction from '../../storage/actions/pengalaman/deletePengalamanAction'

const InsertPengalaman = () => {


    const experience = useSelector(state => state.getPengalaman.data)
    const experienceId = useSelector(state => state.idPengalaman.data)

    const dispatch = useDispatch()

    const [addExp, setAddExp] = useState({
        position: '',
        company_name: '',
        experience_description: '',
        work_start_date: '',
        work_end_date: ''
    })

    const handleInsert = (e) => {
        setAddExp({
            ...addExp,
            [e.target.name] : e.target.value
        })
    }

    const postForm = async (e) => {

        e.preventDefault()
        let data = {
            position: addExp.position,
            company_name: addExp.company_name,
            experience_description: addExp.experience_description,
            work_start_date: addExp.work_start_date,
            work_end_date: addExp.work_end_date
        }

        await dispatch(InsertPengalamanAction(data))
        dispatch(GetPengalamanAction())
    }

    useEffect(() => {
        dispatch(GetPengalamanAction())
    },[dispatch])
   


    const [isEditing, setIsEditing] = useState(false);

    const [editPengalaman, setEditPengalaman] = useState({
        position: '',
        company_name: '',
        experience_description: '',
        work_start_date: '',
        work_end_date: ''
    })

    const [pengalamanId, setPengalamanId] = useState(null);

    const handleEdit = (e) => {
        setEditPengalaman({
            ...editPengalaman,
            [e.target.name] : e.target.value
        })
    };


    const handleSetIsEdit = (id) => {
        setIsEditing(true);
        setPengalamanId(id);
        dispatch(IdPengalamanAction(id))
    };

    const handleCancel = () => {
        setIsEditing(false)
    }


    const postEdit = async (e) => {
        e.preventDefault()

        let data = {
            position: editPengalaman.position,
            company_name: editPengalaman.company_name,
            experience_description: editPengalaman.experience_description,
            work_start_date: editPengalaman.work_start_date,
            work_end_date: editPengalaman.work_end_date
        }

        await dispatch(UpdatePengalamanAction(pengalamanId, data))

        dispatch(GetPengalamanAction())
        setIsEditing(false)
    }


    const handleDelete = async (id) => {
       await dispatch(DeletePengalamanAction(id))
       dispatch(GetPengalamanAction())
    }



  return (
    <>


        <div className='shadow mt-5 pb-5'>
                <h5 className='border-bottom border-bottom border-dark p-4'>Pengalaman Kerja</h5>


                {isEditing ?
                
                (experienceId.map(item => (
                            <form onSubmit={postEdit}>
                                <div className='d-flex w-100 align-items-center border-bottom border-dark py-5' key={item.id}>
                                <div className='w-25 text-center'>
                                    {!item.photo ? <h1 className='ms-5'><MdOutlineImageNotSupported /></h1>  : 
                                    <img className='ms-5 text-center align-items-center justify-content-center d-flex' style={{width:'100px', height:'100px'}} src={item.photo} alt="" />}
                                </div>
                                <div className='d-flex flex-column ms-5 w-50'>
                                    <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPengalaman.position} onChange={handleEdit} name='position' placeholder={item.position}/>
                                    <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPengalaman.company_name} onChange={handleEdit} name='company_name' placeholder={item.company_name}/>
                                    <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPengalaman.work_start_date} onChange={handleEdit} name='work_start_date' placeholder={item.work_start_date} /> 
                                    <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPengalaman.work_end_date} onChange={handleEdit} name='work_end_date' placeholder={item.work_end_date}/>
                                    <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={editPengalaman.experience_description} onChange={handleEdit} name='experience_description' placeholder={item.experience_description}/>
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
                
                
                (experience &&
                    experience.map(item => (
                        <div className='d-flex w-100 align-items-center border-bottom border-dark' key={item.id}>
                            {!item.photo ? <h1 className='ms-5'><MdOutlineImageNotSupported /></h1>  : 
                                <img className='ms-5 text-center align-items-center justify-content-center d-flex' style={{width:'100px', height:'100px'}} src={item.photo} alt="" />}
                                <div className='d-flex flex-column ms-5 w-50'>
                                    <h5>{item.position}</h5>
                                    <p>{item.company_name}</p>
                                    <p>{item.work_start_date}- {item.work_end_date}</p>
                                    <p>{item.experience_description}</p>
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
                    <label htmlFor="position" style={{opacity:0.5}}>Posisi</label>
                    <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" value={addExp.position} onChange={handleInsert} name='position' placeholder='Web Developer'/>
                </div>
                <div className=' d-flex w-100 px-5 mt-5'>
                    <div className='d-flex flex-column w-50'>
                        <label htmlFor="company_name" style={{opacity:0.5}}>Nama perusahaan</label>
                        <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" value={addExp.company_name} onChange={handleInsert} name='company_name' placeholder='Nama Perusahaan'/>
                    </div>
                    <div className='d-flex flex-column w-25 ms-2'>
                        <label htmlFor="work_start_date" style={{opacity:0.5}}>Dari bulan/tahun</label>
                        <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text"  value={addExp.work_start_date} onChange={handleInsert} name='work_start_date' placeholder='*Januari 19'/>
                    </div>
                    <div className='d-flex flex-column w-25 ms-2'>
                        <label htmlFor="work_end_date" style={{opacity:0.5}}>Sampai bulan/tahun</label>
                        <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" value={addExp.work_end_date} onChange={handleInsert} name='work_end_date' placeholder='* Februari 20'/>
                    </div>
                </div>
                <div className='d-flex flex-column w-100 px-5 mt-4'>
                    <div className='border-bottom border-light border-2 pb-5 d-flex flex-column'>
                    <label htmlFor="experience_description" style={{opacity:0.5}}>Deskripsi singkat</label>
                    <textarea className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} value={addExp.experience_description} onChange={handleInsert} rows="4" name='experience_description' placeholder='Web Developer'/>
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

export default InsertPengalaman
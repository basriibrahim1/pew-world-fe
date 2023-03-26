import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import InsertSkillAction from '../../storage/actions/skill/addSkillAction'
import DeleteSkillAction from '../../storage/actions/skill/deleteSkillAction'
import GetSkillAction from '../../storage/actions/skill/getSkillAction'
import UpdateSkillAction from '../../storage/actions/skill/updateSkillAction'
import IdWorkerAction from '../../storage/actions/worker/idWorkerAction'
// import LoadingScreen from '../../utility/loading/loading'

const InsertSkills = () => {

    // const isLoading = useSelector(state => state.idWorker)
    // const loading = useSelector(state => state.updateSkill.isLoading)
    // const skill = useSelector(state => state.getSkill.data)

    const dispatch = useDispatch()
    const id = localStorage.getItem('id')

    const [editSkill, setEditSkill] = useState(false);
    const [skill, setSkill] = useState("html, css, javascript");


    const [insertSkill, setInsertSkill] = useState('')

    const handleInsert = (e) => {
        setInsertSkill(e.target.value)
       
    }

    const handleEdit = (e) => {
        setSkill(e.target.value);
      };

    const postSubmit = async (e) => {
        e.preventDefault()
    
            let data = {
                insertSkill
            }
            dispatch(InsertSkillAction(data))
            dispatch(IdWorkerAction(id))
            setInsertSkill('')
      
    }

    const handleDelete = () => {
        dispatch(DeleteSkillAction())
    }

    dispatch(UpdateSkillAction())
    dispatch(GetSkillAction())
    


  return (
    <>
        <div className='shadow p-2 mt-5'>
            {/* {isLoading && <LoadingScreen /> }
            {loading && <LoadingScreen /> } */}
            <form onSubmit={postSubmit}>
                <h5 className='border-bottom border-dark p-4'>Skills</h5>
                <div className='w-100 justify-content-between mt-5 d-flex'>
                     <input type="text" className='w-75 p-2 ms-3' value={insertSkill} onChange={handleInsert} />
                     <button className='btn btn-warning me-5'>Simpan</button>             
                </div>
            </form>
            <div className='d-flex mt-5 ms-3'>
            {editSkill ? (
                <div className='d-flex w-100'>
                    <input className='w-75 border me-5 p-2' type="text" value={skill} onChange={handleEdit} />
                    <button className='me-3 btn btn-warning px-2' onClick={() => setEditSkill(false)}>Simpan</button>
                    <button className='btn btn-primary' onClick={() => setEditSkill(false)}>Batal</button>
                </div>
                ) : (
                <div className='d-flex w-100'>
                    <h5 className='w-75 border me-5 p-2'>{skill}</h5>
                    <button className='me-3 btn btn-warning px-4' onClick={() => setEditSkill(true)}>Edit</button>
                    <button className='btn btn-primary' onClick={() => handleDelete()}>Delete</button>
                </div>
                )}
            </div>
        </div>
    </>
  )
}

export default InsertSkills

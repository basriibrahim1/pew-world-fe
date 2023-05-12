import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InsertSkillAction from '../../storage/actions/skill/addSkillAction'
import DeleteSkillAction from '../../storage/actions/skill/deleteSkillAction'
import GetSkillAction from '../../storage/actions/skill/getSkillAction'
import IdSkillAction from '../../storage/actions/skill/idSkillAction'
import UpdateSkillAction from '../../storage/actions/skill/updateSkillAction'


const InsertSkills = () => {


    const dispatch = useDispatch()
    const skills = useSelector(state => state.getSkill.data)
    const idSkill = useSelector(state => state.idSkill.data)

    
    const [insertSkill, setInsertSkill] = useState('')


    const handleInsert = (e) => {
        setInsertSkill(e.target.value)  
    }


    const [isEditing, setIsEditing] = useState(false);

    const [editSkill, setEditSkill] = useState('')

    const [skillId, setSkillId] = useState(null);


    const handleEdit = (e) => {
        setEditSkill(e.target.value);
    };


    const handleSetIsEdit = (id) => {
        setIsEditing(true);
        setSkillId(id);
        dispatch(IdSkillAction(id));
    };


    const postSubmit = async (e) => {
        e.preventDefault()

        const data = {
            skills: insertSkill
        }
    
        await dispatch(InsertSkillAction(data))
        dispatch(GetSkillAction())
        setInsertSkill('')
    }

    const postEdit = async (e) => {
        e.preventDefault()

        let data = {
            skills: editSkill
        }

        await dispatch(UpdateSkillAction(skillId, data))

        dispatch(GetSkillAction())
        setIsEditing(false)
    }



    const handleDelete = async (id) => {
        await dispatch(DeleteSkillAction(id))
        dispatch(GetSkillAction())
    }


    useEffect(() => {
        dispatch(GetSkillAction())
    },[dispatch])

    


  return (
    <>
      <div className='shadow p-2 mt-5 pb-5'>
    {skills[0] ? <h5 className='border-bottom border-dark p-4'>Skills</h5>
        : <form onSubmit={postSubmit}>
          <h5 className='border-bottom border-dark p-4'>Skills</h5>
          <div className='w-100 justify-content-between mt-5 d-flex'>
            <input type='text' className='w-75 p-2 ms-3' value={insertSkill} onChange={handleInsert} />
            <button className='btn btn-warning me-5'>Simpan</button>
          </div>
        </form> 
    }
        

        {isEditing ? (
            
                <div>
                    {idSkill.map(item => (
                            <form key={item.id} className='d-flex mt-4 ms-3 w-100 mb-4' onSubmit={postEdit}>
                                <input className='w-75 border me-5 p-2' type='text' value={editSkill} placeholder={item.skills} onChange={handleEdit} />
                                <button type='submit' className='me-3 btn btn-warning px-2'>Simpan</button>
                                <button className='btn btn-primary' onClick={() => setIsEditing(false)}>Batal</button>
                            </form>
                    ))}
                </div>
            
        ) :  
            (            
                skills.map(item => (
                    <div className='d-flex w-100 mt-4' key={item.id}>
                        <h5 className='w-75 border me-5 p-2 ms-3'>{item.skills}</h5>
                        <button className='me-3 btn btn-warning px-4' onClick={() => handleSetIsEdit(item.id)}> Edit </button>
                        <button className='btn btn-primary' onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))
            )
        }
      

        
        
      </div>
    </>
  )
}

export default InsertSkills
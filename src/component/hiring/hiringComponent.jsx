import React from 'react'
import Navbar from '../../utility/navbar/navbar'
import Footer from '../../utility/footer/footer'

const HiringComponent = (props) => {

    const {data} = props

  return (
    <>
    <div className='shadow p-3 mb-5 bg-white rounded'>
      <Navbar />
    </div>


    <div className='container d-flex justify-content-between'>
        {/* left */}
        {data.map((item) => {
            return(
            <div className='w-25 d-flex flex-column border border-light shadow-lg align-items-center p-2 py-3 position-relative bg-white rounded ms-5 ' key={item.id}>
                <img className=' w-50' style={{objectFit:'contain'}} src={item.photo} alt="" />
                <div className='align-items-start ms-3 mt-4'>
                <h5 className='fw-bold'>{item.name}</h5>
                    <p className='mt-4' style={{opacity:'0.7'}}>{item.job}</p>
                    <p  style={{opacity:'0.7'}}>{item.location}</p>
                    <p  style={{opacity:'0.7'}}>{item.description}</p>
                    <h5 className='mt-5'>Skill</h5>
                    {item.skills.map((skill) => (
                        <div className='row col-12 text-white mt-4' >
                            <p className='col-3 bg-warning mx-2 rounded p-1 text-center' key={skill.id}>{skill}</p>
                        </div>
                    ))}
                </div>
                {/* Right */}
                <div className='ms-5 w-100'>
                    <div className='ms-5'>
                        <h1>{`Hubungi ${item.name}`}</h1>
                        <p style={{opacity:'0.5'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nam, quasi, harum consequatur recusandae tenetur qui nemo dolores officia cum eaque magni! Nam, eveniet quis.</p>
                        <div className='d-flex flex-column mt-5' style={{opacity:'0.5'}} >
                            <label htmlFor="">Untuk Posisi</label>
                            <input className='p-3 border-0 shadow-sm border-light mt-2' type="text" placeholder='Fulltime frontend developer' />
                        </div>
                        <div className='d-flex flex-column mt-5' style={{opacity:'0.5'}} >
                            <label htmlFor="">Deskripsi</label>
                            <textarea className='p-3 border-0 shadow-sm border-light mt-2'rows='10' placeholder='Membuat fitur dan maintenance untuk dashboard admin dan posisi remote' />
                        </div>
                        <button className='btn btn-primary w-100 mt-5 p-3'>Hire</button>
                    </div>
                </div>
                {/* end right */}
            </div>

            
            )
        })}
        
        

    </div>

    

    <Footer />
    </>
  )
}

export default HiringComponent
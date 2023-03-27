import React from 'react'
import upload from '../../assets/icons upload.png'
import size from '../../assets/icon size img.png'
import imgType from '../../assets/image type.png'

const InsertPortofolio = () => {
  return (
    <>
    


        <form className='shadow mt-5 pb-5'>
        <h5 className='border-bottom border-bottom border-dark p-4'>Portofolio</h5>
            <div className='d-flex flex-column w-100 px-5 mt-5'>
                <label htmlFor="porto_title" style={{opacity:0.5}}>Nama Aplikasi</label>
                <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" name='porto_title' placeholder='Masukan nama aplikasi'/>
            </div>
            <div className=' d-flex w-100 px-5 mt-3'>
                <div className='d-flex flex-column w-100'>
                    <label htmlFor="porto_link" style={{opacity:0.5}}>Link Repository</label>
                    <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" name='porto_link' placeholder='Masukan link repository'/>
                </div>
            </div>
               
            <div className='d-flex flex-column w-100 px-5 mt-3'>
                <label htmlFor="experience_description" style={{opacity:0.5}}>Type portofolio</label>
                <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" name='porto_link' placeholder='Masukan Type'/>
            </div>
            
            <div>
            <div className='d-flex flex-column w-100 px-5 mt-3 '>
                <label htmlFor="experience_description" style={{opacity:0.5}}>Masukan gambar</label>
                    <label className='text-center mt-3 p-5' style={{borderStyle:'dotted', opacity:'0.5'}} onClick={() => document.getElementById('file-input')}>
                        <img src={upload} alt="" />
                        <p>Drag & drop untuk upload gambar aplikasi mobile</p>
                        <p>atau cari untuk mengupload file dari direktorimu</p>
                        <div className='d-flex text-center w-100 border-dotted' >
                            <div className='d-flex w-50 text-start justify-content-center align-items-center'>
                                <img style={{width:'50px', height:'50px'}} src={imgType} alt="" />
                                <p className='w-25 ms-2'>High-Res Image PNG, JPG, or GIF</p>
                            </div>
                            <div className='d-flex w-50 text-start justify-content-center align-items-center'>
                                <img style={{width:'50px', height:'50px'}} src={size} alt="" />
                                <p className='w-25 ms-3 align-items-center'> <span className='d-flex'>Size</span>  1080 x 1920 or 600 x 800</p>
                            </div>
                        </div>
                    </label>  
                <input id="file-input" name="file-input" type="file" style={{ display: 'none' }} autoFocus/>
            </div>
            {/*  */}
            </div>

                
            <div className='px-5 mt-5'>
                <button type='submit' className='w-100 btn btn-primary'>Simpan</button>
            </div>
        </form>
    
    
    </>
  )
}

export default InsertPortofolio
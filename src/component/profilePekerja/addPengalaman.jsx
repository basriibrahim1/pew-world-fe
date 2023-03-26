import React from 'react'

const InsertPengalaman = () => {
  return (
    <>
        <div className='shadow mt-5'>
                <h5 className='border-bottom border-bottom border-dark p-4'>Pengalaman Kerja</h5>
                <div className='d-flex flex-column w-100 px-5 mt-5'>
                    <label htmlFor="posisi" style={{opacity:0.5}}>Posisi</label>
                    <input className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} type="text" name='posisi' placeholder='Web Developer'/>
                </div>
                <div className=' d-flex w-100 px-5 mt-5'>
                    <div className='d-flex flex-column w-50'>
                        <label htmlFor="perusahaan" style={{opacity:0.5}}>Nama perusahaan</label>
                        <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" name='perusahaan' placeholder='Nama Perusahaan'/>
                    </div>
                    <div className='d-flex flex-column w-25 ms-2'>
                        <label htmlFor="dari" style={{opacity:0.5}}>Dari bulan/tahun</label>
                        <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" name='dari' placeholder='*Januari 19'/>
                    </div>
                    <div className='d-flex flex-column w-25 ms-2'>
                        <label htmlFor="sampai" style={{opacity:0.5}}>Sampai bulan/tahun</label>
                        <input className='p-2 rounded border-1 mt-2 ' style={{opacity:'0.5'}} type="text" name='sampai' placeholder='* Februari 20'/>
                    </div>
                </div>
                <div className='d-flex flex-column w-100 px-5 mt-4'>
                    <div className='border-bottom border-light border-2 pb-5 d-flex flex-column'>
                    <label htmlFor="posisi" style={{opacity:0.5}}>Deskripsi singkat</label>
                    <textarea className='p-2 rounded border-1 mt-2' style={{opacity:'0.5'}} rows="4" name='posisi' placeholder='Web Developer'/>
                    </div>
                </div>
                
                <div className='px-5 mt-5'>
                <button className='w-100 btn btn-primary'>Simpan</button>
                </div>

        </div>
    
    </>
  )
}

export default InsertPengalaman
// import React, { useState } from 'react';
// import {useDropzone} from 'react-dropzone';
// import upload from '../../assets/icons upload.png'
// import size from '../../assets/icon size img.png'
// import imgType from '../../assets/image type.png'

// function DropzoneImage(props) {
//     const handleDrop = (acceptedFiles) => {
//         props.onChange(acceptedFiles);
//     };


//     const { getRootProps, getInputProps } = useDropzone({
//         noKeyboard: true,
//         onDrop: handleDrop,
//       });
//     const [files, setFiles] = useState([]);

        
  
//     return (
//       <section className="container">
//         <div {...getRootProps({className: 'dropzone'})}>
//           <input {...getInputProps()} />
//           <div className='text-center mt-3 p-5' >
//                         <img src={upload} alt="" />
//                         <p>Drag & drop untuk upload gambar aplikasi mobile</p>
//                         <p>atau cari untuk mengupload file dari direktorimu</p>
//                         <div className='d-flex text-center w-100 border-dotted' >
//                             <div className='d-flex w-50 text-start justify-content-center align-items-center'>
//                                 <img style={{width:'50px', height:'50px'}} src={imgType} alt="" />
//                                 <p className='w-25 ms-2'>High-Res Image PNG, JPG, or GIF</p>
//                             </div>
//                             <div className='d-flex w-50 text-start justify-content-center align-items-center'>
//                         <img style={{width:'50px', height:'50px'}} src={size} alt="" />
//                         <p className='w-25 ms-3 align-items-center'> <span className='d-flex'>Size</span>  1080 x 1920 or 600 x 800</p>
//                     </div>
//                 </div>
//             </div>  
//         </div>
//         <aside>
//         {files.map(file => (
//             <li key={file.name}>
//               <div>
//                 <img src={file.preview} style={{ width: '200px' }} alt={file.name} />
//               </div>
//               <div>
//                 <span>{file.name}</span>
//                 <button onClick={() => setFiles(files.filter(f => f !== file))}>Remove</button>
//               </div>
//             </li>
//           ))}
//         </aside>
//       </section>
//     );
// }

// export default DropzoneImage
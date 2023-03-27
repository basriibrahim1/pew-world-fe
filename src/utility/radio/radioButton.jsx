// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';

// function RadioButton() {
//   const [button1Pressed, setButton1Pressed] = useState(false);
//   const [button2Pressed, setButton2Pressed] = useState(false);
//   const [button1Valid, setButton1Valid] = useState(true);

//   const handleButton1Click = () => {
//     setButton1Pressed(true);
//     setButton2Pressed(false);
//     setButton1Valid(true);
//   };

//   const handleButton2Click = () => {
//     setButton1Pressed(false);
//     setButton2Pressed(true);
//     setButton1Valid(false);
//   };

//   return (
//     <Form>
//       <div className="mb-3 d-flex mt-3">
//         <Form.Check type="radio" id="check-api-1">
//           <Form.Check.Input type="radio" onClick={handleButton1Click} isValid={button1Valid} />
//           <Form.Check.Label>{`Custom api 1`}</Form.Check.Label>
//         </Form.Check>
//         <Form.Check className='ms-3' type="radio" id="check-api-2">
//           <Form.Check.Input type="radio" onClick={handleButton2Click} />
//           <Form.Check.Label>{`Custom api 2`}</Form.Check.Label>
//         </Form.Check>
//       </div>
//     </Form>
//   );
// }

// export default RadioButton;

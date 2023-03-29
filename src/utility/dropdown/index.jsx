import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropDown = (props) => {

  const {handleClick} = props

  const [title, setTitle] = useState("Kategori");


  const handleSelect = (eventKey) => {
    switch (eventKey) {
      case "name":
        setTitle("Sortir berdasarkan Nama");
        break;
      default:
        setTitle("Kategori");
        break;
    }
  };

  return (
    <>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="p-3" id="dropdown-button-light-example1" variant="light">
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item eventKey="name" active onClick={() => handleClick()}>Sortir berdasarkan Nama</Dropdown.Item>
      
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropDown;

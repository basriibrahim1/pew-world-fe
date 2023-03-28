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
      case "skill":
        setTitle("Sortir berdasarkan Skill");
        break;
      case "location":
        setTitle("Sortir berdasarkan Location");
        break;
      case "freelance":
        setTitle("Sortir berdasarkan Freelance");
        break;
      case "fulltime":
        setTitle("Sortir berdasarkan Fulltime");
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
          <Dropdown.Item eventKey="skill">Sortir berdasarkan Skill</Dropdown.Item>
          <Dropdown.Item eventKey="location">Sortir berdasarkan Location</Dropdown.Item>
          <Dropdown.Item eventKey="freelance">Sortir berdasarkan Freelance</Dropdown.Item>
          <Dropdown.Item eventKey="fulltime">Sortir berdasarkan Fulltime</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropDown;

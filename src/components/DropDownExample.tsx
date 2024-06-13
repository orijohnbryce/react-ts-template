import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {

    const [lang, setLang] = useState("עברית")

    function handleClick(lang:string) {
        setLang(lang)
    }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {lang}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{handleClick("English")}}>english </Dropdown.Item>
        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
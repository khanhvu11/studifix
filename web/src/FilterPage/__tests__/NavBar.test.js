import React from 'react';
import { render, screen, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import NavBar from '../NavBar/NavBar';
 
test('renders Navbar', () => {
  const fakeObject = {
      "age": {
        "title": {
            "DE": "Alter",
            "EN": "",
            "FR": ""
        },
        "description": {
            "DE": "Wie alt bist du?",
            "EN": "",
            "FR": ""
        },
        "descriptionDetail": {
            "DE": "Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen.",
            "EN": "",
            "FR": ""
        },
        "_id": "60871f254b30ac5ac82cba1b",
        "values": "integer",
        "mandatory": false,
        "multiselect": false
    },
    "collegeGrade": {
        "title": {
            "DE": "Abi / FH Note",
            "EN": "",
            "FR": ""
        },
        "description": {
            "DE": "Gib deine Abitur / Fachhoschulreife Note an",
            "EN": "",
            "FR": ""
        },
        "descriptionDetail": {
            "DE": "Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen.",
            "EN": "",
            "FR": ""
        },
        "_id": "60871f254b30ac5ac82cba1b",
        "values": "double",
        "mandatory": false,
        "multiselect": false
    }

}

    const func = jest.fn()

    const { getAllByRole } = render(<NavBar cls = {'name'} func={func} lang={'DE'} obj={fakeObject}/>);

    const listItems = getAllByRole('listitem')

    expect(listItems).toHaveLength(2)
    
    expect(screen.getByText(/Alter/)).toBeInTheDocument();
    expect(screen.getByText("Abi / FH Note")).toBeInTheDocument();

});
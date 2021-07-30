import React from 'react';
import { render, screen, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Filter from '../Filter/Filter';
 
test('renders Filter input', () => {
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
    const labels = jest.fn()

    const { container } = render(<Filter labels = {labels} cls = {'name'} func={func} lang={'DE'} obj={fakeObject}/>);
    
    expect(screen.getByText(/Wie alt bist du/)).toBeInTheDocument();
    expect(screen.getByText("Gib deine Abitur / Fachhoschulreife Note an")).toBeInTheDocument();

    const input = container.querySelector('input');
    expect(input).toBeInTheDocument()
});

test('dropdown does not exist', () => {
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
      const labels = jest.fn()
  
      const { container} = render(<Filter labels = {labels} cls = {'name'} func={func} lang={'DE'} obj={fakeObject}/>);
  
      const dropdown = container.querySelector('select');
      expect(dropdown).not.toBeInTheDocument()
  
  });

  test('Option Buttons do not exist', () => {
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
      const labels = jest.fn()
  
      const { container} = render(<Filter labels = {labels} cls = {'name'} func={func} lang={'DE'} obj={fakeObject}/>);
  
      const optionBtn = container.querySelector('.choice');
      expect(optionBtn).toBeNull()
  
  });

  test('dropdown does not exist', () => {
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
      const labels = jest.fn()
  
      const { container} = render(<Filter labels = {labels} cls = {'name'} func={func} lang={'DE'} obj={fakeObject}/>);
  
      const dropdown = container.querySelector('select');
      expect(dropdown).not.toBeInTheDocument()
  
  });

  test('Option Buttons exist', () => {
    const fakeObject = {
        "reference": {
            "title": {
                "DE": "Referenzen",
                "EN": "",
                "FR": ""
            },
            "description": {
                "DE": "Gib an, ob du über Referenzen verfügst",
                "EN": "",
                "FR": ""
            },
            "descriptionDetail": {
                "DE": "Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen. Hier stehen superwichtige Detailinformationen.",
                "EN": "",
                "FR": ""
            },
            "values": [
                {
                    "title": {
                        "DE": "Arbeitgeber",
                        "EN": "",
                        "FR": ""
                    },
                    "description": {
                        "DE": "",
                        "EN": "",
                        "FR": ""
                    },
                    "_id": "607c49dfc59a9135d08e7c2b"
                },
                {
                    "title": {
                        "DE": "Lehrer",
                        "EN": "",
                        "FR": ""
                    },
                    "description": {
                        "DE": "",
                        "EN": "",
                        "FR": ""
                    },
                    "_id": "607c49dfc59a9135d08e7c2c"
                },
                {
                    "title": {
                        "DE": "Professor",
                        "EN": "",
                        "FR": ""
                    },
                    "description": {
                        "DE": "",
                        "EN": "",
                        "FR": ""
                    },
                    "_id": "607c49dfc59a9135d08e7c2d"
                },
                {
                    "title": {
                        "DE": "Schulleiter",
                        "EN": "",
                        "FR": ""
                    },
                    "description": {
                        "DE": "",
                        "EN": "",
                        "FR": ""
                    },
                    "_id": "607c49dfc59a9135d08e7c2e"
                },
                {
                    "title": {
                        "DE": "Trainer",
                        "EN": "",
                        "FR": ""
                    },
                    "description": {
                        "DE": "",
                        "EN": "",
                        "FR": ""
                    },
                    "_id": "607c49dfc59a9135d08e7c2f"
                },
                {
                    "title": {
                        "DE": "Sonstige",
                        "EN": "",
                        "FR": ""
                    },
                    "description": {
                        "DE": "",
                        "EN": "",
                        "FR": ""
                    },
                    "_id": "607c49dfc59a9135d08e7c30"
                }
            ],
            "_id": "60871f254b30ac5ac82cba1b",
            "mandatory": false,
            "multiselect": true,
            "dependence": "occupation"
        },
        "course": {
            "values": []
        },
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
      }
  }
  
      const func = jest.fn()
      const labels = jest.fn()
  
      const { container} = render(<Filter labels = {labels} cls = {'name'} func={func} lang={'DE'} obj={fakeObject}/>);
  
      const optionBtn = container.querySelector('.choice');
      expect(optionBtn).toBeInTheDocument()
  

      expect(screen.getByText("Arbeitgeber")).toBeInTheDocument();
      expect(screen.getByText("Lehrer")).toBeInTheDocument();
      expect(screen.getByText("Professor")).toBeInTheDocument();
      expect(screen.getByText("Schulleiter")).toBeInTheDocument();
      expect(screen.getByText("Trainer")).toBeInTheDocument();
      expect(screen.getByText("Sonstige")).toBeInTheDocument();
      expect(screen.queryByText("Student")).toBeNull();
  });
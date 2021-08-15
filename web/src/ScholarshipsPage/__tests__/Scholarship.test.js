import React from 'react';
import { render, screen, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Scholarship from '../Scholarships/Scholarship';
 
test('renders Scholarship', () => {

  const user_selection = jest.fn()

  const fakeScholarship = {
    "imgURL": {
      "value": "https://firebasestorage.googleapis.com/v0/b/studifix-mock-api.appspot.com/o/New-Work.jpg?alt=media&token=75f9b1d3-517a-4ec6-a741-6af351570381"
    },
    "advancement": {
      "value": {
          "title": {
              "DE": "8100 €",
              "EN": "",
              "FR": ""
          },
          "description": {
              "DE": "",
              "EN": "",
              "FR": ""
          }
      },
      "localization": {
          "title": {
              "DE": "Unterstützung",
              "EN": "",
              "FR": ""
          },
          "description": {
              "DE": "",
              "EN": "",
              "FR": ""
          }
      }
  },
  "advancementDetail": {
      "value": {
          "title": {
              "DE": "8100 €",
              "EN": "",
              "FR": ""
          },
          "description": {
              "DE": "",
              "EN": "",
              "FR": ""
          }
      },
      "localization": {
          "title": {
              "DE": "Unterstützung - Details",
              "EN": "",
              "FR": ""
          },
          "description": {
              "DE": "",
              "EN": "",
              "FR": ""
          }
      }
  },
  "advancementTime": {
      "value": {
          "title": {
              "DE": "2 Jahre",
              "EN": "",
              "FR": ""
          },
          "description": {
              "DE": "",
              "EN": "",
              "FR": ""
          }
      },
      "localization": {
          "title": {
              "DE": "Unterstützungszeitraum",
              "EN": "",
              "FR": ""
          },
          "description": {
              "DE": "",
              "EN": "",
              "FR": ""
          }
      }
  },
  "_id": "60897fb394e4f33434126ba2"

  }

  const {container, queryByText} = render(<Scholarship scholarship={fakeScholarship} usr_selection={user_selection} />);
  expect(container.querySelector("img").src).toBe("https://firebasestorage.googleapis.com/v0/b/studifix-mock-api.appspot.com/o/New-Work.jpg?alt=media&token=75f9b1d3-517a-4ec6-a741-6af351570381")

  expect(screen.queryByText("8100 €")).toHaveClass("scholarship__card__description")
  expect(screen.queryByText("2 Jahre")).toHaveClass("scholarship__card__description")
});

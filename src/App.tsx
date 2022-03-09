import React,{createFactory} from 'react';
import logo from './logo.svg';
import './App.css';
import { FormEditor } from './FormEditor';
import FormRender from './FormRender';

const formData = {
  "id": "766d8012-cb3c-4a54-b43f-fa874e526ea1",
  "stages": {
      "66177409-a449-4e0c-9f00-bcd0272f6f1b": {
          "children": [
              "3e59348d-2c14-4ae0-a6fd-37e78f760f5d",
              "4ec9346d-1ccb-4c9b-8169-a35f69d0aac7",
              "dd58bda9-988f-4331-960f-2907f3432ae4",
              "dd07e9be-58d3-4dce-bcaf-6975711bc07b"
          ],
          "id": "66177409-a449-4e0c-9f00-bcd0272f6f1b"
      }
  },
  "rows": {
      "3e59348d-2c14-4ae0-a6fd-37e78f760f5d": {
          "config": {
              "fieldset": false,
              "legend": "",
              "inputGroup": false
          },
          "children": [
              "e8806034-dfdb-4a95-9f84-c210f4dd9eba"
          ],
          "className": [
              "formeo-row"
          ],
          "id": "3e59348d-2c14-4ae0-a6fd-37e78f760f5d"
      },
      "4ec9346d-1ccb-4c9b-8169-a35f69d0aac7": {
          "config": {
              "fieldset": false,
              "legend": "",
              "inputGroup": false
          },
          "children": [
              "6fa24ba2-962b-4d66-a52b-119844c97e63"
          ],
          "className": [
              "formeo-row"
          ],
          "id": "4ec9346d-1ccb-4c9b-8169-a35f69d0aac7"
      },
      "dd58bda9-988f-4331-960f-2907f3432ae4": {
          "config": {
              "fieldset": false,
              "legend": "",
              "inputGroup": false
          },
          "children": [
              "95ace177-2126-4a09-aed2-ea2de7872ff0"
          ],
          "className": [
              "formeo-row"
          ],
          "id": "dd58bda9-988f-4331-960f-2907f3432ae4"
      },
      "dd07e9be-58d3-4dce-bcaf-6975711bc07b": {
          "config": {
              "fieldset": false,
              "legend": "",
              "inputGroup": false
          },
          "children": [
              "0256ec4c-c367-4f03-b95f-39b4b1a25525"
          ],
          "className": [
              "formeo-row"
          ],
          "id": "dd07e9be-58d3-4dce-bcaf-6975711bc07b"
      }
  },
  "columns": {
      "e8806034-dfdb-4a95-9f84-c210f4dd9eba": {
          "config": {
              "width": "100%"
          },
          "children": [
              "4e52ce33-9f44-49bc-bddc-184077b0e5ae"
          ],
          "className": "formeo-column",
          "id": "e8806034-dfdb-4a95-9f84-c210f4dd9eba"
      },
      "6fa24ba2-962b-4d66-a52b-119844c97e63": {
          "config": {
              "width": "100%"
          },
          "children": [
              "ec6e143b-6f8b-4d1c-bb42-cd660c9c20ee"
          ],
          "className": "formeo-column",
          "id": "6fa24ba2-962b-4d66-a52b-119844c97e63"
      },
      "95ace177-2126-4a09-aed2-ea2de7872ff0": {
          "config": {
              "width": "100%"
          },
          "children": [
              "d0b2cc2c-4833-4d6c-a9b5-4c2bfb31d721"
          ],
          "className": "formeo-column",
          "id": "95ace177-2126-4a09-aed2-ea2de7872ff0"
      },
      "0256ec4c-c367-4f03-b95f-39b4b1a25525": {
          "config": {
              "width": "100%"
          },
          "children": [
              "70d0bd5e-d48d-42bf-a7df-da4946daca1a"
          ],
          "className": "formeo-column",
          "id": "0256ec4c-c367-4f03-b95f-39b4b1a25525"
      }
  },
  "fields": {
      "4e52ce33-9f44-49bc-bddc-184077b0e5ae": {
          "conditions": [
              {
                  "if": [
                      {
                          "source": "",
                          "sourceProperty": "value",
                          "comparison": "equals",
                          "target": "",
                          "targetProperty": "value"
                      }
                  ],
                  "then": [
                      {
                          "target": "",
                          "targetProperty": "value",
                          "assignment": "equals",
                          "value": ""
                      }
                  ]
              }
          ],
          "tag": "select",
          "config": {
              "label": "SKU",
              "disabledAttrs": [
                  "type"
              ]
          },
          "meta": {
              "group": "common",
              "id": "sku",
              "icon": "text-input"
          },
          "id": "4e52ce33-9f44-49bc-bddc-184077b0e5ae"
      },
      "ec6e143b-6f8b-4d1c-bb42-cd660c9c20ee": {
          "conditions": [
              {
                  "if": [
                      {
                          "source": "",
                          "sourceProperty": "value",
                          "comparison": "equals",
                          "target": "",
                          "targetProperty": "value"
                      }
                  ],
                  "then": [
                      {
                          "target": "",
                          "targetProperty": "value",
                          "assignment": "equals",
                          "value": ""
                      }
                  ]
              }
          ],
          "tag": "input",
          "attrs": {
              "type": "date",
              "required": false,
              "className": ""
          },
          "config": {
              "label": "Date"
          },
          "meta": {
              "group": "common",
              "icon": "calendar",
              "id": "date-input"
          },
          "id": "ec6e143b-6f8b-4d1c-bb42-cd660c9c20ee"
      },
      "d0b2cc2c-4833-4d6c-a9b5-4c2bfb31d721": {
          "conditions": [
              {
                  "if": [
                      {
                          "source": "",
                          "sourceProperty": "value",
                          "comparison": "equals",
                          "target": "",
                          "targetProperty": "value"
                      }
                  ],
                  "then": [
                      {
                          "target": "",
                          "targetProperty": "value",
                          "assignment": "equals",
                          "value": ""
                      }
                  ]
              }
          ],
          "tag": "input",
          "attrs": {
              "type": "number",
              "required": false,
              "className": ""
          },
          "config": {
              "label": "Number"
          },
          "meta": {
              "group": "common",
              "icon": "hash",
              "id": "number"
          },
          "id": "d0b2cc2c-4833-4d6c-a9b5-4c2bfb31d721"
      },
      "70d0bd5e-d48d-42bf-a7df-da4946daca1a": {
          "conditions": [
              {
                  "if": [
                      {
                          "source": "",
                          "sourceProperty": "value",
                          "comparison": "equals",
                          "target": "",
                          "targetProperty": "value"
                      }
                  ],
                  "then": [
                      {
                          "target": "",
                          "targetProperty": "value",
                          "assignment": "equals",
                          "value": ""
                      }
                  ]
              }
          ],
          "tag": "input",
          "attrs": {
              "required": false,
              "type": "text",
              "className": ""
          },
          "config": {
              "label": "Text Input"
          },
          "meta": {
              "group": "common",
              "icon": "text-input",
              "id": "text-input"
          },
          "id": "70d0bd5e-d48d-42bf-a7df-da4946daca1a"
      }
  }
}

function App() {
  return (
    <div className='App'>
      <FormRender formData={formData} />
      {/* <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p> */}
      {/* <FormEditor /> */}
    </div>
  );
}

export default App;

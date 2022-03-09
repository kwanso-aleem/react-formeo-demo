import React, { createRef, useEffect } from "react";
import { FormeoEditor,  } from "formeo";
import "formeo/dist/formeo.min.css";



export const FormEditor = () => {
  const editorRef = createRef();

  const controlOptions = {
    // groups: [
    //   {
    //     id: "mygroup",
    //     label: "My Amazing Group!",
    //     elementOrder: ["myelement"]
    //   }
    // ],
    // groupOrder: ["common", "layout", "html"]
    elements: [
      {
        tag: "select", // HTML tag used to render the element
        config: {
          label: "SKU",
          disabledAttrs: ["type"] // Attributes hidden from the user
          // lockedAttrs: [] // Attributes that cannot be deleted
        },
        meta: {
          group: "common",
          id: "sku",
          icon: "text-input" // Icon name in icon set
        }
        // attrs: {
        //   // actual attributes on the HTML element, and their default values
        //   // type: "text", // type field is important if tag==input
        //   name: "sku"
        // },
        // options: [
        //   // Used for element types like radio buttons
        //   { label: "Option 1", value: "opt1", selected: true },
        //   { label: "Option 1", value: "opt1", selected: false }
        // ]
      }
    ],
    elementOrder: {
      // Must be set in conjunction or it may not appear in the group
      // common: ["email" /* ...rest of the elements */]
    },
    disable: {
      groups: ["html", "layout"]
    }
  };

  useEffect(() => {
    new FormeoEditor({
      editorContainer: editorRef.current,
      svgSprite:
        "https://draggable.github.io/formeo/assets/img/formeo-sprite.svg",
      controls: controlOptions,
      elements: {
        tag: "input_test", // HTML tag used to render the element
        config: {
          label: "Email Sample",
          disabledAttrs: ["type"], // Attributes hidden from the user
          lockedAttrs: [] // Attributes that cannot be deleted
        },
        meta: {
          group: "common",
          id: "email",
          icon: "email" // Icon name in icon set
        },
        attrs: {
          // actual attributes on the HTML element, and their default values
          type: "email", // type field is important if tag==input
          name: "email"
        },
        options: [
          // Used for element types like radio buttons
          // {label: 'Option 1', value: 'opt1', selected: true}
        ]
      },
     
      events: {
        onSave: (event,)=>{
         const data = event.formData
        
          console.log('json', data)
        
          debugger
          
        }
      },
     
      // controls: {
      //   groups: [
      //     {
      //       id: "mygroup",
      //       label: "My Amazing Group!",
      //       elementOrder: ["myelement", "myelement2"]
      //     }
      //   ],
      //   groupOrder: ["mygroup", "common", "html", "layout"],
      //   elements: [
      //     {
      //       tag: "input",
      //       config: {
      //         label: "Custom Example",
      //         disabledAttrs: ["type"]
      //       },
      //       meta: {
      //         group: "mygroup",
      //         id: "myelement"
      //       },
      //       attrs: {
      //         type: "email",
      //         name: "email"
      //       }
      //     },
      //     {
      //       tag: "input",
      //       config: {
      //         label: "Custom Example",
      //         disabledAttrs: ["type"]
      //       },
      //       meta: {
      //         group: "mygroup",
      //         id: "myelement2"
      //       },
      //       attrs: {
      //         type: "email",
      //         name: "email"
      //       }
      //     }
      //   ]
      // }
    });
  }, [editorRef]);

  return <div ref={editorRef} />;
};





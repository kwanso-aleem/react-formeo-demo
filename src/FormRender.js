import React, { createRef, useEffect,useMemo } from 'react';

import { FormeoRenderer } from 'formeo';


const getFormRender =(ref)=>{
  return new FormeoRenderer({
    renderContainer: ref.current,
    // formeoLoaded: true,
    allowEdit: true,
    sessionStorage: true,
    events: {
      onUpdate: (event)=>{
       const data = event.formData
      
        console.log('json', data)
      
        debugger
        
      }
    },
  });
}


export const FormRenderer = ({ formData }) => {
 
   
  const rendererRef = createRef();

const renderer =  useMemo(() => getFormRender(rendererRef) , [rendererRef])
 

  useEffect(() => {
    JSON.stringify(formData) && renderer.render(formData);
  }, [formData]);

  const handleUpdate = ({ detail: { formData } }) => {
    debugger
}

  


  //form submit handler 


  const handleSubmit=(e)=>{
    e.preventDefault()
    renderer.onUpdate()
    debugger
    console.log('form editor render',rendererRef.current.onUpdate())
  }


  //render

  return (
    <div style={{margin: 20}}>
      <form onSubmit={handleSubmit} >
      <div ref={rendererRef} />
      <button type='submit' >submit</button>
      </form>
    </div>
  );
};

export default FormRenderer;

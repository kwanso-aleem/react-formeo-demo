import React, { createRef, useEffect } from 'react';

import { FormeoRenderer } from 'formeo';

export const FormRenderer = ({ formData }) => {
   
  const rendererRef = createRef();

  useEffect(() => {
    const renderer = new FormeoRenderer({
      renderContainer: rendererRef.current,
      formeoLoaded: true,
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
  
    document.addEventListener('formeo-render', handleUpdate, false)
    JSON.stringify(formData) && renderer.render(formData);
  }, [rendererRef]);

  const handleUpdate = ({ detail: { formData } }) => {
    debugger
}

  


  //form submit handler 


  const handleSubmit=(e)=>{
    e.preventDefault()
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

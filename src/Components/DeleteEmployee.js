import React,  {useState, useEffect , useRef } from 'react';
import { useNavigate } from "react-router-dom";


const DeleteEmployee = () => {
    var ob = useNavigate();
    function NoMethod()
    {   
        ob('/HrHome')
    }
    
    function DeleteRecord()
    {
        const qp = new URLSearchParams(window.location.search)
        var id= qp.get("c")
    fetch('https://localhost:7011/api/delete?id='+id, {
        method: 'DELETE'
       })
       .then((response) => {
        ob('/HrHome/EmployeeData')
        console.log(response);
       })
       .catch((error) => {
         console.error(error);
       });
    
      }
    return (
        <div style={{color:'white'}}>
                
        <h1>Are you sure you want to delete this contact?</h1>
        <div style={{marginLeft:"300px", padding:"50px"}}>
        <input type="button" value="Yes" className='btn btn-info' onClick={DeleteRecord}/> 
        <input type="button" value="No"  className='btn btn-info' onClick={NoMethod}/> 
        </div>
        
                </div>
    );
};

export default DeleteEmployee;
import React,{useEffect, useState} from "react";
import axios from 'axios';

import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,

  Button
} from "@material-ui/core";
const changeMouse=(e)=> {
  e.target.style.cursor = 'pointer';
 }

export default function TableComponent() {
  const [employeelist,setEmployee]=useState([]);
  const fetchedData=useEffect(()=>{
    axios.get('employee.json')
    .then(res=>{console.log(res.data)
    setEmployee(res.data)})
    .catch((err)=>console.log(err))
  },[])
  
  const [rows,setRows]=useState([

  ])

const deleteRow=()=>{
  console.log('deletebutton');
}
 
  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
         <TableCell>NAME</TableCell>
         <TableCell>EMAIL</TableCell>
         <TableCell>STREET</TableCell>
         <TableCell>PAYMENT</TableCell>
         <TableCell>DATE</TableCell>
         <TableCell>UPDATE</TableCell>
         <TableCell>DELETE</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
    {employeelist.map(emp=>(
             <TableRow key={emp.id}>
             <TableCell className="pl-3 fw-normal">{emp.name}</TableCell>
             <TableCell>{emp.email}</TableCell>
             <TableCell>{emp.road}</TableCell>
             <TableCell>{emp.payment}</TableCell>
             <TableCell>{emp.date}</TableCell>
             <TableCell  onMouseOver={changeMouse} ><Button  size='small' style={{background:'#4caf50',color:"white",fontSize:"10px"}}>EDIT</Button></TableCell>
             <TableCell onMouseOver={changeMouse}><Button onClick={deleteRow}    size='small' style={{background:'#ef5350',color:"white",fontSize:"10px"}}>DELETE</Button></TableCell>
           </TableRow>
    ))}
   
 

  
 
      </TableBody>
    </Table>
  );
}

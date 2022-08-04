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
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get('employee.json')
    .then(res=>{console.log(res.data)
    setEmployee(res.data)})
    .catch((err)=>console.log(err))
  },[])


  const handleDelete = (postIndex) => {
    setPosts((prevPosts) =>
      prevPosts.filter((_, index) => index !== postIndex)
    );
  };
  // const [dataArray, setDataArray] = useState([fetchedData]);
  // const removeSite = async (id) => {
  //   setDataArray((data) => data.filter((dataEach) => dataEach.id !== id));
  // };


// const removeData=(contactId)=>{
//   const newContacts=[...fetchedData];
//   const index=fetchedData.findIndex((contact)=>{contact.id===contactId;})
//   newContacts.splice(index,1)
//   setContact(newContacts);
// }


// const removeData = (id) => {
//   let url = `employee.json/${id}`

//   axios.delete(url).then(res => {
//       const del = employees.filter(employee => id !== employee.id)
//       setEmployees(del)
//       console.log('res', res)
//   })
// }

// fetch('employee.json', {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(null)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
// })





 
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
             <TableRow   key={emp.id}>
             <TableCell className="pl-3 fw-normal">{emp.name}</TableCell>
             <TableCell>{emp.email}</TableCell>
             <TableCell>{emp.road}</TableCell>
             <TableCell>{emp.payment}</TableCell>
             <TableCell>{emp.date}</TableCell>
             <TableCell  onMouseOver={changeMouse} ><Button  size='small' style={{background:'#4caf50',color:"white",fontSize:"10px"}}>EDIT</Button></TableCell>
             <TableCell onMouseOver={changeMouse}><Button   size='small' style={{background:'#ef5350',color:"white",fontSize:"10px"}}>DELETE</Button></TableCell>
           </TableRow>
    ))}
   
 

  
 
      </TableBody>
    </Table>
  );
}

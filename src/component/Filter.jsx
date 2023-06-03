import React, { useState } from 'react'
import { data } from '../data'
export default function FilterPage() {
  const [ search,setSearch ] = useState("")
  const [ page1,setPage1 ] = useState(0)
  const [ page2,setPage2 ] = useState(10)
  const buttons = []
  for(let i = 0 ; i < Math.ceil(data.length/10) ; i++){
    buttons.push(i)
  }

  return (
    <div className='p-2'>
          <center className='p-2'>
            <input type="text" className='form-control my-2' placeholder='Search By Name' onChange={(e)=>setSearch(e.target.value)}/>
          </center>
      <div class="table-responsive">
        <table class="table table-striped table-hover	table-borderless align-middle">
          <thead class="table-dark">
            <tr>
              <th>Id</th> 
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            </thead>
            <tbody class="table-group-divider">
              {data&& data.filter((item)=>{
                return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
              }).slice(page1,page2).map((items)=>(
              <tr class="table-danger" key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
              </tr>
              ))}
            </tbody>
        </table>
      </div>
        <center>
          <div className='btn-group' style={{overflowX:"scroll",maxWidth:"90vw"}}>
            {buttons.map((item)=>(
              <button className='btn btn-outline-danger' onClick={()=>{
                setPage1(item*10)
                setPage2(item*10+10)
              }}>{item}</button>
            ))}
          </div>
        </center>
      
    </div>
  )
}

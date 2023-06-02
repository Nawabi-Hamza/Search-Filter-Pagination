import React,{ useEffect,useState } from 'react'
import { data } from "../data.js"

export default function FiltterPage() {
  // console.log(data)
  const [ search,setSearch ] = useState("")
  // console.log(search)
  // console.log(data)
  // if(data){
  //   data.filter((item)=>{
  //     if(!search == "" && item.name.toLowerCase( ).includes(search.toLowerCase())){
  //       console.log(item) 
  //     }
  //   })
  // }
  const [ page1,setPage1 ] = useState(0)
  const [ page2,setPage2 ] = useState(10)
  // if(data){
  //   console.log(data.slice(0,10))
  // }
  console.log(Math.ceil(data.length/10))

  let button = []
    for(let i = 0 ; i <= Math.ceil(data.length/10) ; i++){
      button.push(i)
    }
  return (
    <div className='p-5'>
      <div className="table-responsive">
        <input className='form-control my-2' onChange={(e)=>setSearch(e.target.value)} placeholder='search your name' />
        <table className="table table-warning table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data && data.filter((item)=>{
               return search.toLowerCase() === "" ? item:item.name.toLocaleLowerCase().includes(search.toLowerCase())
            }).slice(page1,page2).map((items)=>(
            <tr key={items.id} className="">
              <td scope="row">{items.id}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
            </tr>
            ))}
          </tbody>
          
          
        </table>
      </div>
        <div className="btn-group mt-2" style={{overflowX:"scroll",maxWidth:"60vw"}}>
              {button.map((item)=>(
                <button className='btn btn-primary' style={item == 0?{display:"none"} : null} onClick={()=>{
                  setPage1(item*10-10)
                  setPage2(item*10)
                }}>{item}</button>
              ))}
            </div>
      
    </div>
  )
}

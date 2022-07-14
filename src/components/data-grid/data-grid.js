import React, { useEffect, useState } from "react"



export function DataGrid() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const [post, setPost] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(x => x.json())
      .then(response => {
        setItems(response)
        setLoading(false)
    }).catch(e => {
      console.log(e)
      setLoading(false)
    })
  }

  const renderBody = () => {
    return (
      <React.Fragment>
        {items.map((item, i) => {
          return (
            <tr key={i}>
              <th scope="row" >{item.id}</th>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          )
        })}
      </React.Fragment>
    )
  }

  const renderTable = () => {
    return (
    <>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Başlık</th>
            <th scope="col">Postlar</th>
          </tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
    </>
    )
  }


  return (
    <>
      {renderTable()}
    
    </>
  )
}
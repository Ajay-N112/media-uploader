import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHistory, getAllHistory } from '../services/allapis';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function History() {

  const [histories, setHistories] = useState([])


  const getHistories = async () => {
    const { data } = await getAllHistory()
    setHistories(data);
    getHistories()
  }

  const removehistory = async (id) => {
    const result = await deleteHistory(id)
    if (result.status >= 200 && result.status < 300) {

      getAllHistory()
    }
  }


  useEffect(() => {
    getHistories()
  }, [])
  console.log(histories);
  return (

    <div>
      <Link to={'/home'}>
        <Button variant="primary">Go back</Button>{' '}

      </Link>
      <h1 className='text-center'>Watch History</h1>

      {histories.length > 0 ? (
        <Table className='w-75 container' striped bordered hover variant="dark">
          <thead className='text-center fs-5 '>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              histories.map((i, index) =>
                <tr className='text-center fs-5'>
                  <td>{index + 1}</td>
                  <td>{i?.date}</td>
                  <td>{i?.video_title}</td>
                  <td>{i?.url}</td>
                  <td className='text-center'>
                    <Trash2 onClick={()=>{removehistory(i.id)}} size={70} className='btn text-white'></Trash2>
                  </td>
                </tr>
              )



            }


          </tbody>
        </Table>) : <h1 className='text-center text-danger'>No Watch Histories</h1>

      }

    </div>




  )
}

export default History
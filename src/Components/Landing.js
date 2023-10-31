import React from 'react'
import './Landing.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, link } from 'react-router-dom';



function Landing() {
  return (
    <>
      <div style={{ position: 'relative', width: "100vw", height: "100vh" }}>
        <img src="https://i.postimg.cc/T2pC2QYs/1-8-5-D3n-WQWYnb21u-Az2y-MTQ.gif" style={{ width: "70%", display: "block", margin: "auto" }} alt="" />


        <div className='right'>
          <Link to={'./home'}>
            <Button variant="primary">get started</Button>{' '}

          </Link>
        </div>
      </div>

      <div className='cards d-block d-md-flex ,'>

        <Card style={{ width: '18rem', margin: "auto", marginTop: "10px" }}>
          <Card.Img variant="top" src="https://i.postimg.cc/k5LQHvN6/youtube.gif" style={{ height: '400px' }} />
          <Card.Body>
            <Card.Title>YouTube</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">click here</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: "auto", marginTop: "10px" }}>
          <Card.Img variant="top" src="https://i.postimg.cc/6qBxdRmg/mxplayer.gif" style={{ height: '400px' }} />
          <Card.Body>
            <Card.Title>Mx Player</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Click here </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: "auto", marginTop: "10px" }}>
          <Card.Img variant="top" src="https://i.postimg.cc/HLQpXpLJ/10aed99a89bcd8ca74b6283d30db4a52.gif0" style={{ height: '400px' }} />
          <Card.Body>
            <Card.Title>VideoMate</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Click here</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Landing
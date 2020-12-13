import React from 'react'
import Header from '../components/Header'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Cards from '../components/Cards'

const Home = (props) => {

    return (
        <div>
            <Jumbotron>
        <h1>School Phone</h1>
        <p>
          A one-stop platform for teacher-parent communication needs.
        </p>
      </Jumbotron>
      <Header/>
      <Cards/>

        </div>
    )
}

export default Home;
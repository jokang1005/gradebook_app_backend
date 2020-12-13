import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


const Cards = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/k61CHRec39kjctz16dNT_6YefFb8ypxGYYZKSQxNdUacBKDbWpTwUaSDrdod4KTD6Ywz-YsNTux4mON3mNpCsU2B" />
                <Card.Body>
                <Card.Title>Look up a Student by Name</Card.Title>
                <Card.Text>
                    Click here to look up student info
                </Card.Text>
                <Link to="/student_profile"><Button variant="primary">Click here</Button></Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/png;base64,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" />
                <Card.Body>
                <Card.Title>Look up Students by Grade</Card.Title>
                <Card.Text>
                    Click here to look up student by grade
                </Card.Text>
                <Link to="/student_grades"><Button variant="primary">Click here</Button></Link>
                </Card.Body>
            </Card>


        </>
    )
}

export default Cards
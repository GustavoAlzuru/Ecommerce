import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PlainNav from "../Components/Navigation/PlainNav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";

function SignUp(){
    const styles= {
        container: {
            width: '50%',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            top: '150px'
        },
        title: {
            textAlign: 'left'
        },
        card: {
          width: '46rem',
          padding: '45px 20px'
        } 
    }
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
      console.log(data)
    } 

    return(
        <>
           <PlainNav/>
            <div style={styles.container}>
              <h3 style={styles.title}>Fill out</h3>
              <Card style={styles.card}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" {...register('name')}/>
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" {...register('Lastname')}/>
                      </Form.Group>
                    </Col>
                  </Row>  

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" {...register('email')}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" {...register('password')}/>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </div>
        </>
    )
}
export default SignUp
import NavNotFound from "../Components/NavNotFound"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignUp(){
    const styles= {
        container: {
            width: '50%',
            margin: '5rem auto'
        },
        title: {
            textAlign: 'left'
        }
    }
    return(
        <>
            <NavNotFound/>
            <div style={styles.container}>
                <h3 style={styles.title}>Fill out</h3>
                <Card style={{ width: '18rem' }}><Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></Card>
            </div>
        </>
    )
}
export default SignUp
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import PlainNav from '../Components/Navigation/PlainNav';

function Login(){
    const styles= {
        card: {
            width: '26rem',
            position: 'absolute',
            left: '50%',
            top: '150px',
            zIndex: '10',
            transform: 'translate(-50%)',
            padding: '40px'
        },
        title: {
            textAlign: 'start',
            marginBottom: '20px'
        }
    } 
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return(
        <>
            <PlainNav/>
            <Card style={styles.card}>
                <h3 style={styles.title}>Hello! Please sign in</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3"    controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  placeholder="Enter email" {...register('email')}/>
                </Form.Group>

                <Form.Group className="mb-3"        controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password')}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                <Link to={'/Signup'}>Create your account</Link>
            </Card>
        </>
    )
}
export default Login
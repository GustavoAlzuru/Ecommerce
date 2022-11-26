import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PlainNav from "../Components/Navigation/PlainNav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm} from "react-hook-form";
import firebase from '../Config/firebase'
import AlertCustom from '../Components/AlertCustom';
import { useState } from 'react';
import { registerMessage } from '../Utils/errorsMsgs';
import { useNavigate } from 'react-router-dom';

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
    const [alert, setAlert] = useState({variant:'success',text:''})
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async data => {
      try{
          const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
          if(responseUser.user.uid){
              const document = await firebase.firestore().collection("usuario")
              .add({
                  name:data.name,
                  lastname:data.lastname,
                  userId: responseUser.user.uid
              })
              setShowAlert(true)
              if(document){
                setAlert({variant:'success', text:'Succesfull'})
                navigate("/Login")
              }
          }
      }catch(e){
          console.log(e)
          setShowAlert(true)
          setAlert({variant:'danger',text: registerMessage[e.code] || 'Something went wrong'})
      }
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
                      <Form.Control type="text" placeholder="Enter name" {...register('name', { required: true})}/>
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" {...register('lastname', { required: true})}/>
                      </Form.Group>
                    </Col>
                  </Row>  

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" {...register('email', { required: true})}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" {...register('password', { required: true, minLength: 3})}/>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                  {showAlert && <AlertCustom {...alert}/>}
              </Card>
            </div>
        </>
    )
}
export default SignUp
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import PlainNav from '../Components/Navigation/PlainNav';
import firebase from '../Config/firebase';
import AlertCustom from '../Components/AlertCustom';
import { useContext, useState } from 'react';
import { loginMessage } from '../Utils/errorsMsgs';
import { AuthContext } from '../Context/AuthContext';

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
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [showAlert, setShowAlert] = useState(false)
    const [alert, setAlert] = useState({variant: '', text: ''})
    const context = useContext(AuthContext)
    const onSubmit = async data => {
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log(responseUser.user.uid)
            if(responseUser.user.uid){
                const userDocument = await firebase.firestore().collection("usuario")
                .where("userId", "==", responseUser.user.uid)
                .get()

                const user = userDocument.docs[0].data()
                console.log(user)
                context.handlerLogin(user)
                navigate('/')
            }
        }catch(e){
            console.log(e)
            setShowAlert(true)
            setAlert({variant:'danger', text: loginMessage[e.code] || "Something went wrong"})
        }
    }

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
                {showAlert && <AlertCustom {...alert}/>}
            </Card>
        </>
    )
}
export default Login
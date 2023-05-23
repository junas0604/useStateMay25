/*import{useState, useEffect} from 'react'
import  Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactUs(){
    const fields=[
        {label:'Email Address', type:'text',placeholder: 'Input Email'},
        {label:'Password', type: 'password',placeholder: 'Password'}
    ]
        const[emailAddress,setEmailAddress] = useState('Junas Nazarito');
        const[password,setPassword] = useState('Enter your password');

    return(

        <form>
                {fields.map((field)=>{
                    return(
                        <Form.Group className='mb-3' controlID='formBasicEmail'>
                                <Form.Label>{field.label}</Form.Label>
                                <Form.control type={field.type} placeholder={field.placeholder}
                                onChange={(e)=>
                                {
                                    if(field.label==='Email Address')
                                        setEmailAddress(e.target.value)
                                    if(field.label==='Password')
                                        setPassword(e.target.value)
                                }
                                }/>
                        </Form.Group>
                    )
                })}
                <Button variant="primary" type="type">
                Submit
                </Button>
                <br/>
                <h2>Hi {emailAddress}</h2>
                <h2>Your Madapaking Password is {password}</h2>

        </form>

);
}
export default ContactUs;*/
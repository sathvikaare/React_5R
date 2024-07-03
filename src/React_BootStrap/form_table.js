import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormReact() {
    const [username,setUserName]=useState("");

    const [password,setPassword]=useState("");

    // const usenameHandler=(event)=>{

    //     const userEnteredUserName=event.target.value;
    //     console.log(userEnteredUserName);
    // }

    const usenameHandler=(event)=>{
        const userEnteredUserName=event.target.value;
         setUserName(userEnteredUserName);
    }

    const passwordHandler=(event)=>{
        const userEnteredPassword=event.target.value;
        setPassword(userEnteredPassword);}

    const handleSubmit = (event) => {
        event.preventDefault();
   
      };

   
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={passwordHandler} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormReact;
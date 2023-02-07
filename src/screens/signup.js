import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { Button, Container, Typography } from "@mui/material";
import Input from '../component/input';
import { useNavigate } from "react-router-dom";

function Signup() {
    const navi = useNavigate();

    return <Box style={{ backgroundColor: 'cadetblue', margin: 0, width: '100%', height: '100%', padding: '51px' }}>
        <Container>
            <Box className="bg-light rounded shadow mx-auto" style={{ width: '400px', height: '500px' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: '6px' }}>Sign Up</Typography>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>First Name:</Typography>
                    <Input />
                </Box>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Last Name:</Typography>
                    <Input />
                </Box>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Username:</Typography>
                    <Input />
                </Box>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Password:</Typography>
                    <Input />
                </Box>
                <Box>
                    <Button variant='contained' onClick={() => {
                    navi("/home");
                  }} style={{ width: '80%', padding: 5, marginTop: '15px', marginLeft: '40px', textAlign: 'center' }}>Sign Up</Button>
                </Box>

            </Box>
        </Container>
    </Box>
}

export default Signup;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { Container, Typography } from "@mui/material";


function Home() {
    return <Box>
        <Container>
            <Typography variant='h3' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px' }}>Home</Typography>
            
        </Container>
    </Box>
}

export default Home;
import {useState} from 'react'
import {AppBar, Box, Button,Drawer,Stack,Toolbar, styled} from '@mui/material';
import img from "../images/uniceverlogo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';



const StyledToolbar = styled(Toolbar)({
    background:"#e6e6fa",
    height:"30px",
})

const Header = () => {
const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleClick = () => {
    navigate('/');
  };

    const [mobileOpen, setMobileOpen] = useState(false);
    //handle menu click
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen)
    }
  return (
    <AppBar position='sticky' variant='navbar'>
      <StyledToolbar>
        <Box flexGrow={1}>
            <img onClick={handleClick} src={img} alt="myimage" style={{ width: '80px', height: '80px' }}/>
        </Box>
        <Box style={{mr:2}} sx={{display:{xs:"none", sm:"block"}}}>
            <Button variant="outlined" 
            onClick={handleLoginClick}
            style={{ width: '100px', height: '30px', marginRight:"10px", color:"white", backgroundColor:"red" }}>Login</Button>
            <Button variant="contained" 
            onClick={handleRegisterClick}
            style={{ width: '250px', height: '30px' ,background:"green" }}>Register Organization </Button>
        </Box>
        <MenuIcon  
        style={{ color: 'black', fontSize:"30px" }} 
        sx={{display:{xs:"block",sm:"none"}}} 
        onClick={handleDrawerToggle}
        />
      </StyledToolbar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}>
           <Stack onClick={handleDrawerToggle}  direction="column"
            justifyContent="center"
            alignItems="center"
            paddingTop={"200px"}
            sx={{ display: { xs: 'block', sm: 'none', width:"300px", height:"700px",backgroundColor:"black", alignItems:"center",justifyContent:'center'} }}
            spacing={2}>
            <Button variant="outlined" 
            onClick={handleLoginClick}
            style={{marginLeft:"100px", width: '100px', height: '30px', marginRight:"10px", color:"white" , background:"red"}}>Login</Button>
            <Button variant="contained" 
            onClick={handleRegisterClick}
            style={{marginLeft:"22px", width: '250px', height: '30px' ,background:"green" }}>Register Organization </Button>
        </Stack>
        </Drawer>
      </Box>
    </AppBar>
  )
}

export default Header
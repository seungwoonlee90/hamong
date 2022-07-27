import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hamong
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='main-bg'>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <img src="https://www.artic.edu/iiif/2/bd14da50-0f0c-95c1-6ec0-03730a37cad7/full/400,/0/default.jpg" alt="item" />
          <h5>상품명</h5>
        </Grid>
        <Grid item md={4}>
          <img src="https://www.artic.edu/iiif/2/7fd966c4-d227-80a2-eb9f-4dff61fde36f/full/400,/0/default.jpg" alt="item" />
          <h5>상품명</h5>
        </Grid>
        <Grid item md={4}>
          <img src="https://www.artic.edu/iiif/2/05d63e68-8d33-9b6e-050c-6f0ed81272c5/full/400,/0/default.jpg" alt="item" />
          <h5>상품명</h5>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default App;

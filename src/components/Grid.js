import Grid from '@mui/material/Grid';

function GridInfo(props) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className='grid-item'>
          <img src={props.shoes.img} alt="item" />
          <h5>{props.shoes.title}</h5>
          <p>{props.shoes.price}</p>
        </Grid>
      </Grid>
    )
}

export default GridInfo;
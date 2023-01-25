import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Intel({ title, rating, url, image, genres, des }) {


    return (
        <Container maxWidth="sm">
            <Box fixed>
                <Grid container spacing={2}>
                    <Grid item xs >
                        <Typography align="left" color="secondary" variant="h5" gutterBottom>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography align="left" variant="h6" gutterBottom>
                            {rating}
                        </Typography>
                    </Grid>
                </Grid>
                <img src={image} alt={title} />
                <div>{url}</div>
                <ul>
                    {genres.map((g) => (<li key={g}>{g}</li>))}
                </ul>
                <p>{des}</p>
            </Box>
        </Container>
    );
}

export default Intel
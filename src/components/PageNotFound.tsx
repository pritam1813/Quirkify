import { Box, Typography } from '@mui/material';
import DogImage from '../assets/images/Dog Ate-big.png';
import ThemeColors from '../assets/theme';

export default function PageNotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ThemeColors.pink,
        height: '100%',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3">404 Error</Typography>
      <img
        src={DogImage}
        alt="Dog Eating Paper"
        style={{ maxWidth: 500, maxHeight: 500 }}
      />
      <Typography sx={{ mt: 2 }} variant="h2">
        OOPs !! A Dog Ate this Page !
      </Typography>
      <Typography paragraph sx={{ mt: 2 }}>
        Your dog is cute but honestly a menace. Where are my shoes? Where is my
        graduation certificate? <br /> Where is the chocolate cake I baked for
        my Aunt’s birthday? And why did you take <br /> your dog to the vet on
        that same Thursday?!
      </Typography>
    </Box>
  );
}

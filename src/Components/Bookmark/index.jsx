import { Stack, Typography, IconButton, Box } from '@mui/material';
import { ArrowBack as BackIcon} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const updateBookmark = b => {
  <Box key={b} component={Link} to={`search/${b}`} sx={{
      backgroundColor:'white',
      color:'#000',
      borderRadius: 2,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
      p: 2,
      fontWeight: 700,
      display: 'block',
      textDecoration: 'none',
    }}>
      {b}
    </Box>
}


const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      <Stack direction={'row'} alignItems={'center'} sx={{mb: 3}}>
        <IconButton LinkComponent={Link} to="/Bookmark" sx={{color: '#000'}}>
          <BackIcon />
        </IconButton>
        <Typography variant='h6'>
          Bookmarks
        </Typography>
      </Stack>
      {Object.keys(bookmarks).map(b => 
        updateBookmark(b)
      )
      }
    </>
)
}



export default Bookmarks;
import { useEffect, useState, Fragment } from "react";
import { Stack, Box, IconButton, Typography, Divider, CircularProgress, Button } from "@mui/material";
import { ArrowBack as ArrowIcon, Bookmark as IconBookmarked, BookmarkBorder as IconBookmark, PlayArrow as PlayIcon } from "@mui/icons-material";
import { useParams, useNavigate, useActionData, Navigate } from "react-router-dom";
import theme from "../../theme";
import axios from "axios";

const Definition  = () => {
  const { word } = useParams();
  const navigate = useNavigate();
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exist, setExist] = useState(true);
 // console.log(definitions);
  

  useEffect(() => {
    const fetchDefinition = async () => {
      try{
        const resp = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        setDefinitions(resp.data);
        setLoading(false);
      } catch{
        setExist(false);
      }
    }

    fetchDefinition();
  }, []);
    
  if(!exist) return <Box sx={{...theme.mixins.setAllCenter}}>
  <Typography variant="subtitle1">Word not found !</Typography>
  <Button sx={{
    mt:2,
    background: theme => theme.palette.blue,
    borderRadius: 2,
    color: '#fff',}} onClick={() => navigate(-1)}>Go back !</Button>
  </Box>
  if(loading) return <Box sx={{...theme.mixins.setAllCenter}}><CircularProgress/></Box>
    return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <IconButton onClick={() => navigate(-1)} sx={{color: '#000'}}>
          <ArrowIcon />
        </IconButton>
        <IconButton sx={{color: '#000'}}>       
          <IconBookmark/>
        </IconButton>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{
        mt: 3,
        mb: 3,
        px: 3,
        py: 5,
        background: theme => theme.palette.blue,
        borderRadius: 2,
        color: '#fff',
      }}>
        <Typography variant="h5" sx={{textTransform:'capitalize'}}>{word}</Typography>
        <IconButton sx={{
          background: theme => theme.palette.pink,
          color: '#fff',
        }}>
          <PlayIcon />
        </IconButton>
      </Stack>
        {definitions.map((def, idx) => 
          <Fragment key={idx}>
          <Divider sx={{my:3}} />
          {def.meanings.map(meaning =>
            <Box key={meaning.partOfSpeech} sx={{
              background: '#fff',
              mt: 3,
              p: 2,
              borderRadius: 2,
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
            }}>
              <Typography variant="subtitle1" textTransform="capitalize" color="primary">{meaning.partOfSpeech}</Typography>
              {meaning.definitions.map((definition, idx) =>
                <Typography key={definition.definition} sx={{my:1}}>
                {meaning.definitions.length > 1 && `${idx + 1}. `}{definition.definition}
                </Typography>
              )}
             
             </Box>
          )}
          </Fragment>
        )}
    </>
    )
  }
  
  export default Definition
  
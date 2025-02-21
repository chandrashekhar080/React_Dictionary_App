import { useEffect, useState, Fragment } from "react";
import { Stack, Box, IconButton, Typography, Divider } from "@mui/material";
import { ArrowBack as ArrowIcon, Bookmark as IconBookmarked, BookmarkBorder as IconBookmark, PlayArrow as PlayIcon } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Definition  = () => {
  const { word } = useParams();
  const navigate = useNavigate();
  const [definitions, setDefinitions] = useState([]);
  console.log(definitions);
  

  useEffect(() => {
    const fetchDefinition = async () => {
    const resp = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    setDefinitions(resp.data);
    }

    fetchDefinition();
  }, []);

    return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowIcon />
        </IconButton>
        <IconButton>
          <IconBookmark/>
        </IconButton>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" AlignItems='center' sx={{
        mt: 3,
        mb: 3,
        px: 3,
        py: 5,
        background: 'linear-gradient(90.08deg,rgb(20, 15, 149) 14%,rgb(11, 5, 66) 95.83%)',
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
          <Divider />
          {def.meanings.map(meaning =>
            <Box key={meaning.partOfSpeech} sx={{
              background: '#fff',
              mt: 3,
              p: 2,
              borderRadius: 2,
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
            }}>
              <Typography variant="subtitle1">{meaning.partOfSpeech}</Typography>
              {meaning.definitions.map((definition, idx) =>
                <Typography key={definition.definition}>
                {definitions.length > 1 && `${idx + 1}. `}{definition.definition}
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
  
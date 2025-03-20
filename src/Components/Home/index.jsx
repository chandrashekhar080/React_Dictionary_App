import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Typography, FilledInput, IconButton } from "@mui/material";
import { Search, Bookmark } from "@mui/icons-material";
import theme from "../../theme";

const Home = () => {
  const [word, setWord] = useState("");
  console.log(word);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Form submitted!");
    const trimword = word.trim().toLowerCase();
    if (!trimword || trimword.split(" ").length > 1) return;
    navigate(`/search/${trimword}`);
  };
  return (
    <Box sx={{ ...theme.mixins.setAllCenter }}>
      <img src="/assets/book.png" alt="Book" />
      <Typography color="primary" sx={{ mt: 3, mb: 1, variant:"h4"}}>
        Dictionary
      </Typography>
      <Typography
        color="Graytext"
        sx={{
          mb: 1,
        }}>
        Find meanings and save for quick reference...
      </Typography>
      <Box sx={{ width: "360px" }}>
        <form onSubmit={handleSubmit}>
          <FilledInput
            value={word}
            onChange={(event) => setWord(event.target.value)}
            disableUnderline
            placeholder="Search Word..."
            sx={{
              backgroundColor: "#ffff",
              borderRadius: 2,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
              "& .MuiFilledInput-input": {
                p: 2,
              },
            }}
            startAdornment={<Search color="disabled" />}
            fullWidth
          />
        </form>
      </Box>
      {/* //<Link to='/Bookmark'>  */}

      <IconButton
        to="/Bookmark"
        component={Link}
        sx={{
          color: "#fff",
          borderRadius: 2,
          p: 2,
          my: 3,
          background: (theme) => theme.palette.pink,
          boxShadow: "0px 10px 10px rgba(182, 66, 87, 0.2)",
        }}
      >
        <Bookmark/>
      </IconButton>
      {/* </Link>  */}
    </Box>
  );
};

export default Home;

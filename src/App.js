import { useState, useEffect } from "react";

import theme from "./theme";
//
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid2 from "@mui/material/Grid";

//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Bookmark from "./Components/Bookmark";
import Definition from "./Components/Definition";

const App = () => {
  const [bookmarks, setBookmark] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || {}
  );
  // console.log(bookmarks);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (word, definitions) =>
    setBookmark((oldBookmarks) => ({ ...oldBookmarks, [word]: definitions }));
  const removeBookmark = (word) =>
    setBookmark((oldBookmarks) => {
      const temp = { ...oldBookmarks };
      delete temp[word];
      return temp;
    });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid2 container>
          <Grid2 item xs={12} sx={{ p: 2 }}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/Bookmark" element={<Bookmark />}></Route>
              <Route
                path="/search/:word"
                element={
                  <Definition
                    bookmarks={bookmarks}
                    addBookmark={addBookmark}
                    removeBookmark={removeBookmark}
                  />
                }
              ></Route>
            </Routes>
          </Grid2>
        </Grid2>
      </ThemeProvider>
    </Router>
  );
};

export default App;

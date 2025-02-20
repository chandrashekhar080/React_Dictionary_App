import theme from './theme'
//
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Bokmark from "./Components/Bookmark";
import Definition from './Components/Definition';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/Bookmark" element={ <Bokmark />}>
        </Route>
        <Route path='/search/:word' element={ <Definition />}>
        </Route>
      </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
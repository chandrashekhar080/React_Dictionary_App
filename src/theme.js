import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F1F3F4",
    },
    primary: {
      main: "#14194C",
    },
    pink: "linear-gradient(138.72deg,rgb(186, 50, 80) 0%,rgb(202, 13, 45) 95.83%)",
    blue: 'linear-gradient(90.08deg,rgb(20, 15, 149) 14%,rgb(11, 5, 66) 95.83%)'
  },
  typography: {
    fontFamily: "Mulish ,sans-serif",
    h4: {
      fontWeight: "800",
    },
    h5: {
      fontWeight: "800",
    },
    h6: {
      fontWeight: "800",
    },
    subtitle1: {
      fontWeight: "800",
    },
  },
  mixins: {
    setAllCenter: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
  },
});

export default theme;

// import { createTheme } from "@mui/material/styles";

// THIS WAY IS USED FOR REACT V.17 AND MUI V.4
// export default createTheme({
//    palette: {
//        background:{
//         default :'#F1F3F4',
//        },
//     },
// })

// THIS IS THE WAY FOR COMPONENNTS
//   components: {
//     MuiStat: {
//       background: {
//         default: '@F1F3F4',
//       },
//     },
//   },

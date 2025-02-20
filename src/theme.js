import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
               background:{
                default :'#F1F3F4',
               },
               primary:{
                main:'#14194C',
               }
            },
    typography: {
        fontFamily:'Mulish ,sans-serif',
        h4:{
            fontWeight: '800',
        }
    }
});

export default theme




































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

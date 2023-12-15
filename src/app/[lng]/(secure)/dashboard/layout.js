import { Box } from '@mui/material'

export default Layout

function Layout({ children }) {
  return <Box>{children}</Box>
}

// const SxStyle = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '90vh',
//   },
// }

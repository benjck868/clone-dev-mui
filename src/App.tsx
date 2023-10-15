import { Box, Stack} from "@mui/material"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Box>
      <Navbar />      
      <Stack direction={"row"} spacing={{xs:0,sm:0,md:1}} justifyContent={"space-evenly"}>
        <Sidebar />
        <Feed />
        <Rightbar/>
      </Stack>
    </Box>
  )
}

export default App

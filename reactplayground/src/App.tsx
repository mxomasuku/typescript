import { Box } from '@chakra-ui/react';
import Header from './Components/Header';
import AddHousePageMain from './Components/AddHouse/AddHousePageMain';

const App = () => {
  return (
<Box px={8}>
  <Header/>
 <AddHousePageMain/>
</Box>
  );
}

export default App;

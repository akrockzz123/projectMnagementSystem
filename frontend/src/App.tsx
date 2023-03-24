import './App.css';
import { useDispatch } from 'react-redux';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import { Container } from '@mui/material';
import { Route,Routes} from 'react-router-dom';
import ListAllUsersScreen from './screen/ListAllUsersScreen';
import AddUserScreen from './screen/AddUserScreen';
import ShowProjectOfUser from './screen/ShowNotAssignedProjectOfUser';
import AddProjectScreen from './screen/AddProjectScreen';
import NavigateScreen from './screen/NavigateScreen';
import AssignedCoursesScreen from './screen/AssignedCoursesScreen';

function App() {

 const dispatch = useDispatch()

  

  return (
    <div>

      <Container>
       <Routes>
        <Route path = '/' element = {<HomeScreen/>} />

        <Route path = '/search/:keyword' element = {<ListAllUsersScreen/>} />

        
        <Route path = '/login' element = {<LoginScreen/>} />

        <Route path = '/users' element = {<ListAllUsersScreen/>} />

        <Route path = '/users/:id' element = {<ShowProjectOfUser/>} />
        <Route path = '/users/add' element = {<AddUserScreen/>} />

        <Route path = '/project/add' element = {<AddProjectScreen/>} />

        <Route path = '/user/login' element = {<LoginScreen/>} />
        <Route path = '/navigate' element = {<NavigateScreen/>} />

        <Route path = '/user/project/:id' element = {<AssignedCoursesScreen/>} />

       
       
       </Routes>
       </Container>
    </div>
    
  );
}

export default App;



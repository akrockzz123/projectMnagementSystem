import * as React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userinfoRequest } from '../state/action-creators';
import { useAppSelector } from '../Types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListAllUsersScreen from './ListAllUsersScreen';
import AddProjectScreen from './AddProjectScreen';
import AddUserScreen from './AddUserScreen';
import { userActionType } from '../state/action-types';
import UserCoursAssignedScreen from './UserAssignedCoursesScreen';
import NavBarComponent from '../component/NavBarComponent';

import { createContext } from 'react';


interface IAppProps {

   
   
}

// Name        string `json:"name"`
// 	Assignee_id string `json:"assignee_id"`
// 	Status      string `json:"status"`

const NavigateScreen: React.FunctionComponent<IAppProps> = (props) => {

    const navigate = useNavigate()

    const [userid,setUserid] = useState(0)

    const UserContext = createContext('');

   
    const {loadinguserinfo,successuserinfo,usersData} = useAppSelector((state:any) => {
        console.log(state);
        return state.userReducer;
    })

    const [val,setVal] = useState(0)


    console.log("value",val)
      console.log(loadinguserinfo,successuserinfo,usersData,usersData,"heyyy")


        if(successuserinfo)
        {
            localStorage.setItem('role',usersData.role)
        }
    
    const LogoutHandler = () => {

        console.log("logouthandler")
        localStorage.removeItem('userdata')
        localStorage.removeItem('role')

        dispatch({type : userActionType.USER_INFO_RESET})
        
        navigate('/login')
    }  
    
    const func = (data : any) => {

        if(data == 'aniket')
        {
            setUserid(0)
        }
        else
        {
            const vb = JSON.parse(data)
            setUserid(vb)
            setVal(1)
        }
        
    }

    const AssignProject = () => {
        setVal(4)
    }

    const showusers = () => {
        
        setVal(1)
    }

    const addUser  = () => {
        setVal(2)
    }

    const addProject = () => {
        setVal(3)
    }

    useEffect(() => {


        if(!localStorage.getItem('userdata'))
        {
            navigate('/login')
        }
    },[])

   

    const dispatch = useDispatch()

    useEffect(() => {

        const datas : any = localStorage.getItem('userdata')

        const vals = JSON.parse(datas)

        const userid = vals.userId

        dispatch(userinfoRequest(userid))

        //localStorage.setItem('role',usersData.role)

    },[])

    // console.log(val)
   
    const values : any = localStorage.getItem('userdata')

    const role : any = localStorage.getItem('role')
    // const usernames = JSON.parse(values)

    const Values = {
        
        showusers,
        addUser,
        addProject,
        AssignProject,
        LogoutHandler,
        role
    }

    // username : string,
    // showUsers : any,
    // addUser : any,
    // addProject : any,
    // AssignProject : any,
    // LogoutHandler : any,
    // role : string

    return(
        <div style = {{marginTop : '45px'}}>
       

      <Container>
       <NavBarComponent username = {usersData.userName} addUser = {addUser} addProject = {addProject} AssignProject = {AssignProject} LogoutHandler = {LogoutHandler} role = {role} showusers = {showusers} style = {{position : 'fixed'}} func = {func} />
      </Container>

   
      <div>
       
         {val === 1 && userid != 0 && <ListAllUsersScreen addUser = {addUser} addProject = {addProject} AssignProject = {AssignProject} LogoutHandler = {LogoutHandler} role = {role} showusers = {showusers} userid = {userid}/> }
         {val === 1 && userid == 0 && <ListAllUsersScreen addUser = {addUser} addProject = {addProject} AssignProject = {AssignProject} LogoutHandler = {LogoutHandler} role = {role} showusers = {showusers} userid = {0} /> }
         {val === 2 && <AddUserScreen/> }
         {val === 3 && <AddProjectScreen/>}
         {val === 4 && <UserCoursAssignedScreen/>}
        
      </div>
        </div>
    );
};

export default NavigateScreen

import { REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, Url } from "../constant.js/PatientConstant";
import axios from 'axios'

export const patientRegister=(name,phone,dob,gender,email,role)=>async(dispatch)=>{
    dispatch({type:REGISTER_USER_REQUEST});   
    try{
      const {data} = await axios.post(`http://localhost:5000/api/v1/users/register`,{name,phone,dob,gender,email,role})
      dispatch({type:REGISTER_USER_SUCCESS,payload:data});
     
    }catch(error){
        console.log(error.response.data.error,'error')
      const message =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.response;
       dispatch({ type: REGISTER_USER_FAIL, payload: message });
    }
}
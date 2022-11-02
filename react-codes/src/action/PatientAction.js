import { ENROLMENT_PATIENT_FAIL, ENROLMENT_PATIENT_REQUEST, ENROLMENT_PATIENT_SUCCESS, GET_ALL_PATIENT_FAIL, GET_ALL_PATIENT_REQUEST, GET_ALL_PATIENT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, Url } from "../constant.js/PatientConstant";
import axios from 'axios'

export const patientRegister=(name,phone,dob,gender,email,role)=>async(dispatch)=>{
    dispatch({type:REGISTER_USER_REQUEST});   
    try{
      const {data} = await axios.post(`${Url}/users/register`,{name,phone,dob,gender,email,role})
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

export const patientEnrollment=(start_date,end_date,bill_amount,bill_paid,payment_mode,external_transaction_no,data_form_attached_by,response_text,appointmentdate,morning_dose,afternoon_dose,evening_dose,comments)=>async(dispatch)=>{
  dispatch({type:ENROLMENT_PATIENT_REQUEST});   
  try{
    const {data} = await axios.post(`${Url}/patients/register/63275260e2e03a04964c6157/63275291e2e03a04964c6158/6327532be2e03a04964c6159`,{start_date,end_date,bill_amount,bill_paid,payment_mode,external_transaction_no,data_form_attached_by,response_text,appointmentdate,morning_dose,afternoon_dose,evening_dose,comments})
    dispatch({type:ENROLMENT_PATIENT_SUCCESS,payload:data});
   
  }catch(error){
      console.log(error.response.data.error,'error')
    const message =
    error.response && error.response.data.error
      ? error.response.data.error
      : error.response;
     dispatch({ type: ENROLMENT_PATIENT_FAIL, payload: message });
  }
}

export const listPatients = () => async (dispatch,getState) => {
  dispatch({ type: GET_ALL_PATIENT_REQUEST });
  try {    
    const { data } = await axios.get(`${Url}/patients/all`)      
    dispatch({ type: GET_ALL_PATIENT_SUCCESS, payload: data }); 

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: GET_ALL_PATIENT_FAIL, payload: message });

  }
};
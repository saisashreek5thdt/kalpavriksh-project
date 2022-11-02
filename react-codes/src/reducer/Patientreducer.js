import { ENROLMENT_PATIENT_FAIL, ENROLMENT_PATIENT_REQUEST, ENROLMENT_PATIENT_RESET, ENROLMENT_PATIENT_SUCCESS, GET_ALL_PATIENT_FAIL, GET_ALL_PATIENT_REQUEST, GET_ALL_PATIENT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constant.js/PatientConstant";

export const registerPatientreducer = (state = {}, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return { loading: true };
      case REGISTER_USER_SUCCESS:
        return { loading: false, patient: action.payload };
      case REGISTER_USER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const enrollmentPatientReducer = (state = {}, action) => {
    switch (action.type) {
      case ENROLMENT_PATIENT_REQUEST:
        return { loading: true };
      case ENROLMENT_PATIENT_SUCCESS:
        return { loading: false, enrolment: action.payload };
      case ENROLMENT_PATIENT_FAIL:
        return { loading: false, error: action.payload };
        case ENROLMENT_PATIENT_RESET:
          return {}
      default:
        return state;
    }
  }

  export const patientListReducer = (state = { loading:true,patients:[] }, action) => {
    switch (action.type) {
      case GET_ALL_PATIENT_REQUEST:
        return { loading: true };
      case GET_ALL_PATIENT_SUCCESS:
        return { loading: false, patients: action.payload };
    
      case GET_ALL_PATIENT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
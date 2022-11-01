import { REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constant.js/PatientConstant";

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
import { GOOGLE_SIGNIN_FAIL, GOOGLE_SIGNIN_REQUEST, GOOGLE_SIGNIN_SUCCESS } from "../constant.js/DoctorConstant";

export const googleSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case GOOGLE_SIGNIN_REQUEST:
        return { loading: true };
      case GOOGLE_SIGNIN_SUCCESS:
        return { loading: false, user: action.payload };
      case GOOGLE_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
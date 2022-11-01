import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import Navbar from "../../../user/shared/Navbar";
import { useForm } from "../../../hooks/form-hooks";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from '../../../Components/LoadingBox'
import MessageBox from '../../../Components/MessageBox'

import { patientRegister } from "../../../action/PatientAction";

const CreatePatient = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  const registerPatient=useSelector(state=>state.registerPatient)
  const {loading,error,patient}=registerPatient
  const role='doctor'

 const dispatch=useDispatch()
  let navigate = useNavigate();

  const nextStep = () => {
  };

  const patientFormHandler=(e)=>{
     e.preventDefault()
     console.log(name,email,dob,gender,phone,'heyy');
     dispatch(patientRegister(name,phone,dob,gender,email,role))
    // navigate("/userrole/:roleid/dashboard/doctor/enrol/healthinfo/");

  }

  return (
    <>
      <div className="dashboard__Container">
        
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <Stepper
                steps={[
                  { label: "CreatePatient" },
                  { label: "PatientHealthInfo" },
                  { label: "PatientPersonalInfo" },
                ]}
                activeStep={0}
              />
              <div>
                <div className="dashboard__Grid-Box">
                  <div className="dashboard__Grid-Cols">
                    <form action="#" method="POST" onSubmit={patientFormHandler}>
                      <div className="form__Box-Shadow">
                        <div className="form__Box-Space">
                          <div className="form__Grid--Cols-2">
                            <div className="form__Cols--Span-2">
                              <label className="form__Label-Heading">
                                Photo
                              </label>
                              <div className="form__Flex-ImgBox">
                                <span className="form__Flex-SpanBox">
                                  <svg
                                    className="form__Flex-Svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                                <button
                                  type="button"
                                  className="form__Flex-Btn"
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="form__Grid--Cols-6">
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="phone"
                                className="form__Label-Heading"
                              >
                                Patient Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                id="patient_phone"
                                autoComplete="given-name"
                                className="form__Input"
                                // onInput={inputHandler}
                                onChange={(e)=>setPhone(e.target.value)}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="full-name"
                                className="form__Label-Heading"
                              >
                                Patient Full Name
                              </label>
                              <input
                                type="text"
                                name="full-name"
                                id="patient_fullName"
                                autoComplete="given-name"
                                className="form__Input"
                                // onInput={inputHandler}
                                onChange={(e)=>setName(e.target.value)}
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="email"
                                className="form__Label-Heading"
                              >
                                Patient Email
                              </label>
                              <input
                                type="email"
                                name="mail"
                                id="patient_email"
                                autoComplete="given-name"
                                // onInput={inputHandler}
                                onChange={(e)=>setEmail(e.target.value)}
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="dob"
                                className="form__Label-Heading"
                              >
                                Patient D.O.B
                              </label>
                              <input
                                type="date"
                                name="dob"
                                id="patient_dob"
                                autoComplete="given-name"
                                // onInput={inputHandler}
                                onChange={(e)=>setDob(e.target.value)}
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="gender"
                                className="form__Label-Heading"
                              >
                                Patient Gender
                              </label>
                              <select
                                id="patient_gender"
                                name="gender"
                                autoComplete="gender-name"
                                className="form__Select"
                                // onInput={inputHandler}
                                onChange={(e)=>setGender(e.target.value)}
                              >
                                <option >Select Patient Gender</option>
                                <option value='0'>Male</option>
                                <option value='1'>Fe-Male</option>
                                <option value='2'>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        {loading && <LoadingBox></LoadingBox>}
                          {error && <MessageBox variant='danger'>{error}</MessageBox>}
                        <div className="form__Btn-Bg">
                          <button
                            onClick={nextStep}
                            type="submit"
                            className="form__Btn-Submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default CreatePatient;

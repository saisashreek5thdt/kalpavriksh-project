import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stepper } from 'react-form-stepper';
import Navbar from "../../../user/shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { patientEnrollment } from "../../../action/PatientAction";
import { useEffect } from "react";
import { ENROLMENT_PATIENT_RESET } from "../../../constant.js/PatientConstant";

const PatientPersonalInfo = () => {
  const location = useLocation()
  const dispatch=useDispatch()
  const [amount, setAmount] = useState('')
  const [paymentMode, setPaymentMode] = useState('')
  const enrollmentPatient=useSelector(state=>state.enrollmentPatient)
  const {loading,error,enrolment}=enrollmentPatient

  const {healthPlan,startingDate}= location.state
  console.log(healthPlan,startingDate,'HEY')

    let navigate = useNavigate();

    const submitHandler = (e) => {
      e.preventDefault()
      const endDate="21-04-2022"
      const billPaid='false'
      const externalTransactionNumber=1234
      const dataFromAttachBy=123456
      const responseText='success'
      const appointmentDate=startingDate
      const morningDose='1'
      const afternoonDose='1'
      const eveningDose='1'
      const comments='working fine'
      dispatch(patientEnrollment(startingDate,endDate,amount,billPaid,paymentMode,externalTransactionNumber,dataFromAttachBy,responseText,appointmentDate,morningDose,afternoonDose,eveningDose,comments))

      };
      useEffect(()=>{
        if(enrolment && enrolment.response === true){
          alert(enrolment.message)
          dispatch({type:ENROLMENT_PATIENT_RESET})
          navigate('/userrole/:roleid/dashboard/doctor/');

        }
      },[enrolment])
   

  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <Stepper steps={[{ label: 'CreatePatient' }, { label: 'PatientHealthInfo' }, { label: 'PatientPersonalInfo' }]} activeStep={4} />
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form action="#" method="POST" onSubmit={submitHandler}>
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="amount"
                              className="form__Label-Heading"
                            >
                              Amount To Be Paid
                            </label>
                            <input
                              type="text"
                              name="amount"
                              id="amount"
                              onChange={(e)=>setAmount(e.target.value)}
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="payment-mode"
                              className="form__Label-Heading"
                            >
                              Payment Mode
                            </label>
                            <select
                            onChange={(e)=>setPaymentMode(e.target.value)}
                              id="payment-mode"
                              name="payment-mode"
                              autoComplete="payment-mode-name"
                              className="form__Select"
                            >
                              <option>Select Payment Mode</option>
                              <option>Cash</option>
                              <option>Card</option>
                              <option>Online</option>
                            </select>
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="payment-date"
                              className="form__Label-Heading"
                            >
                              Payment Date
                            </label>
                            <input
                              type="date"
                              name="payment-date"
                              id="payment-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="ref-id"
                              className="form__Label-Heading"
                            >
                              Ref. Id
                            </label>
                            <input
                              type="text"
                              name="ref-id"
                              id="ref-id"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="next-date"
                              className="form__Label-Heading"
                            >
                              Next Payment Date
                            </label>
                            <input
                              type="date"
                              name="next-date"
                              id="next-date"
                              autoComplete="given-name"
                              className="form__Input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form__Btn-Bg">
                        <div className="text-right">
                          <button
                            // onClick={nextStep}
                            type="submit"
                            className="form__Btn-Submit"
                          >
                            Finish
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}

export default PatientPersonalInfo
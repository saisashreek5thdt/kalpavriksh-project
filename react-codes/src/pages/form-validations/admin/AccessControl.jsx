import React from "react";
import { FiEdit } from "react-icons/fi";

const AccessControl = () => {
  return (
    <>
      <div className="card__Container--Start">
        <div className="card__Block">
          <h5 className="card__Heading">
            Add Employee
            <span className="card__Heading--Span card__Bg--Green">
              New
            </span>
          </h5>
          <p className="card__Info">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="card__Btn card__Bg--Green card__Btn--Bg-Green"
            data-bs-toggle="modal"
            data-bs-target="#createEmployee"
          >
            Create
          </button>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="createEmployee"
        tabindex="-1"
        aria-labelledby="createEmployeeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="modal__Heading"
                id="createEmployeeLabel"
              >
                Employee Creation
              </h5>
              <button
                type="button"
                className="modal__Btn--Close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal__Body">
              <div className="form__Grid--Rows-none">
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="employee-name"
                    className="form__Label-Heading"
                  >
                    Enter Employee Name
                  </label>
                  <input
                    type="text"
                    name="employee-name"
                    id="employee-name"
                    autoComplete="given-name"
                    className="form__Input"
                  />
                </div>
                <div className="form__Cols--Span-6">
                  <label htmlFor="role" className="form__Label-Heading">
                    Select Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    autoComplete="role-name"
                    className="form__Select"
                  >
                    <option>Select Role</option>
                    <option>Role 1</option>
                    <option>Role 2</option>
                    <option>Role 3</option>
                    <option>Role 4</option>
                  </select>
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="employee-email"
                    className="form__Label-Heading"
                  >
                    Enter Employee Email
                  </label>
                  <input
                    type="email"
                    name="employee-email"
                    id="employee-email"
                    autoComplete="given-name"
                    className="form__Input"
                  />
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="employee-phone"
                    className="form__Label-Heading"
                  >
                    Enter Employee Phone Number
                  </label>
                  <input
                    type="tel"
                    name="employee-phone"
                    id="employee-phone"
                    autoComplete="given-name"
                    className="form__Input"
                  />
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="employee-regno"
                    className="form__Label-Heading"
                  >
                    Enter Employee Registration No. (Optional)
                  </label>
                  <input
                    type="text"
                    name="employee-regno"
                    id="employee-regno"
                    autoComplete="given-name"
                    className="form__Input"
                  />
                </div>
                <div className="form__Cols--Span-6">
                  <label
                    htmlFor="appointment-date"
                    className="form__Label-Heading"
                  >
                    Select Employee Photo
                  </label>
                  <input
                    type="file"
                    name="appointment-date"
                    id="appointment-date"
                    autoComplete="given-name"
                    className="form__Input"
                  />
                </div>
              </div>
            </div>
            <div className="modal__Footer">
              <button
                type="button"
                className="modal__Btn--Red"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="modal__Btn--Teal"
              >
                Create &amp; Save Employee
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">
                Sl No.
              </th>
              <th className="table__Head--Text">
                Employee Name
              </th>
              <th className="table__Head--Text">
                Role
              </th>
              <th className="table__Head--Text">
                Created Date
              </th>
              <th className="table__Head--Text">
                Access
              </th>
              <th className="table__Head--Text">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
                1
              </td>
              <td className="table__Body--Row_Data">
                Dr. Rajiv Singla
              </td>
              <td className="table__Body--Row_Data">
                Senior Doctor
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>De-Active</option>
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" data-bs-toggle="modal" data-bs-target="#createEmployee" />
              </td>
            </tr>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
                2
              </td>
              <td className="table__Body--Row_Data">
                Dr. Suha
              </td>
              <td className="table__Body--Row_Data">
                Dietician
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>De-Active</option>
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" data-bs-toggle="modal" data-bs-target="#createEmployee" />
              </td>
            </tr>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
                3
              </td>
              <td className="table__Body--Row_Data">
                Dr. D.S.N Rao
              </td>
              <td className="table__Body--Row_Data">
                Senior Doctor
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                  <option>Select Status</option>
                  <option>Active</option>
                  <option>De-Active</option>
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" data-bs-toggle="modal" data-bs-target="#createEmployee" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AccessControl;

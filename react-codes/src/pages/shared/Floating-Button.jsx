import { Link } from "react-router-dom";
import { FiFilePlus } from "react-icons/fi";

const FloatingButton = () => {
  return (
    <div className="fab__Fix-Container">
      <div className="">
        <div className="dropup relative">
          <button
            className="dropdown-toggle px-6 py-5 rounded-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded rounded-full shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg active:text-white"
            type="button"
            id="dropdownMenuButton1u"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FiFilePlus className="fab__Btn-Icon" />
          </button>
          <ul
            className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
            aria-labelledby="dropdownMenuButton1u"
          >
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/doctor/enrol/patient/"
              >
                Create Patient
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/doctor/create/form/"
              >
                Create Form
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                to="/userrole/:roleid/dashboard/doctor/create/dietchart/"
              >
                Upload Diet Chart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;
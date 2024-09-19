import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { patientView } from "../../data/data";

const PatientView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const opdPerPage = 20;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = patientView.filter(
    (item) =>
      item.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.patientId.toString().includes(searchTerm.toString())
  );

  const totalPages = Math.ceil(filteredData.length / opdPerPage);
  const start = (currentPage - 1) * opdPerPage;
  const end = start + opdPerPage;
  const opdToDisplay = filteredData.slice(start, end);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className={"w-full overflow-x-auto"}>
        <div className="mb-4">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="placeholder:text-secondary-color border-b border-gray-200 w-fit font-Assistant outline-none"
          />
        </div>
        <table className={"w-full table-auto text-secondary-color"}>
          <thead className=" font-Urbanist uppercase border-b text-left text-sm align-top">
            <tr>
              <th scope="col" className="p-2">
                Name
              </th>
              <th scope="col" className="p-2">
                Patient ID
              </th>
              <th scope="col" className="p-2">
                Guardian Name
              </th>
              <th scope="col" className="p-2">
                Gender
              </th>
              <th scope="col" className="p-2">
                Phone
              </th>
              <th scope="col" className="p-2">
                Consultant
              </th>
              <th scope="col" className="p-2">
                Last Visit
              </th>
              <th scope="col" className="p-2">
                Is Antenatal
              </th>
              <th scope="col" className="p-2 text-end">
                Total Recheckup
              </th>
            </tr>
          </thead>
          <tbody className="font-Assistant text-base align-top">
            {opdToDisplay.length > 0 ? (
              opdToDisplay.map((request) => (
                <tr key={request.id}>
                  <td className={"px-2 py-2 border-b"}>
                    {request.patientName}
                  </td>
                  <td className={"px-2 py-2 border-b"}>{request.patientId}</td>
                  <td className={"px-2 py-2 border-b"}>
                    {request.guardianName}
                  </td>
                  <td className={"px-2 py-2 border-b"}>{request.gender}</td>
                  <td className={"px-2 py-2 border-b"}>{request.phone}</td>
                  <td className={"px-2 py-2 border-b"}>{request.consultant}</td>
                  <td className={"px-2 py-2 border-b"}>
                    {request.lastVisit.toLocaleDateString()}
                  </td>
                  <td className={"px-2 py-2 border-b"}>{request.antenatal}</td>
                  <td className={"px-2 py-2 border-b text-end"}>
                    {request.totalRecheckup}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  Data not available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {filteredData.length > 0 && (
        <div className="flex items-center justify-end gap-2 mt-4">
          <p className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </p>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <Icon icon={"uil:angle-left"} width={20} />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <Icon icon={"uil:angle-right"} width={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default PatientView;

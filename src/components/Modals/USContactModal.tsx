import React from "react";

const USContactModal = ({ allCountriesData }) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            US Contact
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        {/*<------------- Content -------------->*/}
        <div className="modal-body">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Country Name</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {allCountriesData
                .filter((country) => country.country.name === "United States")
                .map((filteredCountry, index) => (
                  <tr key={index}>
                    <td>{filteredCountry.id}</td>
                    <td>{filteredCountry?.country?.name}</td>
                    <td>{filteredCountry?.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/*<------------- Footer -------------->*/}
        <div className="modal-footer">
          <button
            type="button"
            data-bs-dismiss="modal"
            style={{
              border: "1px solid #46139f",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "7px",
              paddingBottom: "7px",
              borderRadius: "7px",
              background: "#46139f",
              color: "#fff",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default USContactModal;

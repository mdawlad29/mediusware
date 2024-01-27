import React, { useEffect, useState } from "react";
import AllContactModal from "./Modals/AllContactModal";
import USContactModal from "./Modals/USContactModal";

const Problem2 = () => {
  const [allCountriesData, setAllCountriesData] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5 text">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#allContact"
            >
              All Contacts
            </button>

            <button
              type="button"
              className="btn btn-lg btn-outline-warning"
              data-bs-toggle="modal"
              data-bs-target="#usContacts"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>

      {/*<-------------- Modal Button of All Contact ------------>*/}
      <div
        className="modal fade"
        id="allContact"
        tabIndex="-1"
        aria-hidden="true"
      >
        <AllContactModal allCountriesData={allCountriesData} />
      </div>

      <div
        className="modal fade"
        id="usContacts"
        tabIndex="-2"
        aria-hidden="true"
      >
        <USContactModal allCountriesData={allCountriesData} />
      </div>
    </>
  );
};

export default Problem2;

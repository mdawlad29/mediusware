import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [showTabs, setShowTabs] = useState("button-a");
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = (val) => {
    console.log(val);
    setShowTabs(val);
  };

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
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        // aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/*<------------- Button Section ---------------->*/}
            <div className="modal-header">
              <button
                onClick={() => handleClick("button-a")}
                type="button"
                style={{
                  border: "1px solid #46139f",
                  padding: "6px",
                  borderRadius: "7px",
                  color: "#46139f",
                }}
              >
                Modal Button A
              </button>

              <button
                onClick={() => handleClick("button-b")}
                type="button"
                style={{
                  border: "1px solid #ff7f50",
                  padding: "6px",
                  borderRadius: "7px",
                  color: "#ff7f50",
                  marginLeft: "10px",
                }}
              >
                Modal Button B
              </button>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country name"
                style={{
                  width: "100%",
                  border: "1px solid blue",
                  borderRadius: "7px",
                  padding: "6px",
                  marginTop: "10px",
                }}
              />
            </div>

            {/*<------------- Show of Data Table ---------------->*/}
            <div className="modal-body">
              {checked ? (
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCountriesData?.map((country, index) => {
                      return (
                        <tr key={index}>
                          <td>{country.id}</td>
                          <td>{country?.phone}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <>
                  {showTabs === "button-a" && (
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
                          .filter((country) => {
                            return (
                              country.country.name
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              country.phone.includes(search)
                            );
                          })
                          .map((filteredCountry, index) => (
                            <tr key={index}>
                              <td>{filteredCountry.id}</td>
                              <td>{filteredCountry?.country?.name}</td>
                              <td>{filteredCountry?.phone}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  )}

                  {showTabs === "button-b" && (
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
                          .filter(
                            (country) =>
                              country.country.name === "United States"
                          )
                          .map((filteredCountry, index) => (
                            <tr key={index}>
                              <td>{filteredCountry.id}</td>
                              <td>{filteredCountry?.country?.name}</td>
                              <td>{filteredCountry?.phone}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  )}
                </>
              )}
            </div>

            {/*<------------- Footer Section ---------------->*/}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  onClick={() => setChecked(!checked)}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="checked"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  placeholder="Search country name"
                />
                <label htmlFor="vehicle1">Checked Label A</label>
              </div>

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
        </div>
      </div>

      {/*<-------------- Modal Button of US Contact ------------>*/}

      <div class="modal fade" id="usContacts" tabIndex="-2" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                US Contact
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/*<------------- Content -------------->*/}
            <div class="modal-body">
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
                    .filter(
                      (country) => country.country.name === "United States"
                    )
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
            <div class="modal-footer">
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
      </div>
    </>
  );
};

export default Problem2;

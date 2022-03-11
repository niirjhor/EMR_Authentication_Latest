import React from "react";

const MedicalRep = () => {
  return (
    <div className="bg-dark text-white">
      <div class="container ">
        <div class="d-flex justify-content-between pt-5">
          <div class="addDoctor d-flex flex-column col-md-5">
            <div>
              <h5 class="text-center">Add Doctor</h5>
            </div>
            <div>
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    value=""
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustom04" class="form-label">
                    Speciality
                  </label>
                  <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>Allergy and immunology</option>
                    <option>Anesthesiology</option>
                    <option>Dermatology</option>
                    <option>Emergency Medical</option>
                    <option>Surgery</option>
                    <option>Urology</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid Speciality.
                  </div>
                </div>

                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">
                    Profile
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div class="invalid-feedback">Please choose a profile.</div>
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustom03" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid Email Address.
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">
                    Phone Number
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                      +880
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div class="invalid-feedback">Please choose a number.</div>
                  </div>
                </div>

                <div class="col-12">
                  {/*   */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Submit Form
                  </button>

                  {/* Modal  */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header bg-dark text-primary">
                          <h5 class="modal-title" id="exampleModalLabel">
                            {" "}
                            Status:Transaction mined and execution succeed
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body bg-dark text-white">
                          transaction hash:
                          0xa1352b672289a03105db81720d3d917b86a3bc1058d29141cb{" "}
                          <br />
                          from:0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 <br />
                          to
                          MedicalRecord.addDoctor(address,string,string,string)
                          0xd9145CCE52D386f254917e481eB44e9943F3 <br />
                          gas: 80000000 gas <br />
                          transaction cost: 80000000 gas <br />
                          execution cost: 673008 gas <br />
                          hash :0xa1352b672289a03105db81720d3d917b86a3bc1058d291{" "}
                          <br />
                          Updated at: 11-03-22T18:33:57.050Z
                          <br />
                          Created at: 11-03-22T18:33:57.050Z
                          <br />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="addDoctor d-flex flex-column col-md-5">
            <div>
              <h5 class="text-center">Add Patient</h5>
            </div>
            <div>
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-12">
                  <label for="validationCustom01" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">
                    ID
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div class="invalid-feedback">Please choose a ID.</div>
                  </div>
                </div>
                <div>
                  <label for="formFileMultiple" class="form-label">
                    Patient Medical History
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationCustom03" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid Email Address.
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">
                    Phone Number
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                      +880
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div class="invalid-feedback">Please choose a number.</div>
                  </div>
                </div>

                <div class="col-12">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Submit Form
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header bg-dark text-primary">
                          <h5 class="modal-title" id="exampleModalLabel">
                            {" "}
                            Status true Transaction mined and execution succeed
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body bg-dark text-white">
                          transaction hash:
                          0xa1352b672289a03105db81720d3d917b86a3bc1058d29141c
                          from: 0x6B38Da6a701c568545dCfcB03FcB875f56beddC4 to
                          MedicalRecord.addPatient(address,string,string,string)
                          0xd9145CCE52D386f254917e481eB44e9943F39138 gas:
                          80000000 gas transaction cost: 80000000 gas execution
                          cost: 663010 gas hash:
                          0xb2352b672289a03105db81720d3d917b86a3bc1058d29141cb373
                          Updated at: 11-03-22T17:23:57.050Z Created at:
                          11-03-22T17:23:57.050Z
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 ">
        <div class="d-flex flex-wrap row g-5">
          <div class="d-flex flex-column justify-content-center col-md-6">
            <h5 class="text-center">Add Record</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Paitent Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-md-12 my-3">
              <label for="formFileMultiple" class="form-label">
                Patient Medical History
              </label>
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            <div class="col-12 d-flex justify-content-between">
              <button class="col-6 btn btn-secondary" type="submit">
                <a class="text-white" href="/medicalrecords">
                  View Patients Medical Data
                </a>
              </button>
              <div class="col-8">
                {/*   */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Submit Form
                </button>

                {/* Modal  */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header bg-dark text-primary">
                        <h5 class="modal-title" id="exampleModalLabel">
                          {" "}
                          Status:Transaction mined and execution succeed
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body bg-dark text-white">
                        transaction hash:
                        0xa1352b672289a03105db81720d3d917b86a3bc1058d29141cb{" "}
                        <br />
                        from:0xB66Da6a701c568545dCfcB03FcB875f56beddC4 <br />
                        to MedicalRecord.addRecord(address,string,string,string)
                        0xd7145CCE52D386f254917e481eB44e9943F3 <br />
                        gas: 80000000 gas <br />
                        transaction cost: 80000000 gas <br />
                        execution cost: 663004 gas <br />
                        hash :0xb2352b672289a03105db81720d3d917b86a3bc1058d291{" "}
                        <br />
                        Updated at: 11-03-22T18:33:57.050Z
                        <br />
                        Created at: 11-03-22T18:33:57.050Z
                        <br />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-check form-switch pt-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked
              />
              <label
                class="form-check-label fw-bold"
                for="flexSwitchCheckChecked"
              >
                Publish to IPFS
              </label>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center col-md-6">
            <h5 class="text-center">Request Doctor</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Doctor Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Paitent Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
          <div class="d-flex flex-column  justify-content-center align-items-center  col-md-12 ">
            <h5>Verify Record</h5>
            <div class="col-md-6 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patients's Signature
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-6 my-3">
              <label for="formFileMultiple" class="form-label">
                Patient Record
              </label>
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            <div class="col-6">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center col-md-6">
            <h5>Address of Doctor</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Doctor Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Doctor Address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-12 ">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center col-md-6">
            <h5>Address of Patient</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
          <div class="d-flex flex-column  justify-content-center align-items-center  col-md-12">
            <h2 class="fw-bold my-5">Doctor in Patient</h2>
            <h5>Doctor Profile</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Doctor Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Doctor Title
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-md-12 my-3">
              <label for="formFileMultiple" class="form-label">
                Doctor's History
              </label>
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>

          <div class="d-flex flex-column align-items-center col-md-4">
            <h5>Get Doctor</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Request
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Doctor Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center col-md-4">
            <h5>Get Patient</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Signature
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Date of Appointment
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center col-md-4">
            <h5>Get Record</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Signature
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Recognised Url
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
          <div class="d-flex flex-column  justify-content-center align-items-center  col-md-12">
            <h2 class="fw-bold my-5">Patient in Doctor</h2>
            <h5>Patient Profile</h5>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Doctor's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Phone Number
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Patient's Last Appointment Date
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Patient's Name"
              />
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRep;

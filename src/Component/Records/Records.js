import React from 'react';

const Records = () => {
    
    return (
        <div className="container">
       <h2 class="text-center mb-5">HEALTH UNIT AND PHYSICIAN INFORMATION</h2>
        <div class="d-flex justify-content-around
        ">
            <div class="form-floating mb-3 col-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Health Unit ID: <span>H-121431</span></label>
            </div>
            <div class="form-floating mb-3 col-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Date <span>13/08/2021</span></label>
            </div>

            <div class="form-floating mb-3 col-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Physician Name: <span>Dr.Abdus Salam</span></label>
            </div>
            <div class="form-floating mb-3 col-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Physician ID: <span>12643778</span></label>
            </div>

        </div>
    
        <div>
            <h2 class="text-center mb-5">PATIENT DEMOGRAPHY INFORMATION:</h2>
            <h3>Patient Information:</h3>
            <div class="d-flex ">
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Name: : <span>Nirjhor Ifathaj</span></label>
                </div>
                <div class="form-floating col-3 ">
                    <input type="date" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Date of Birth</label>
                </div>
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Home Address : <span>3/3,Dhap</span></label>
                </div>
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">City : <span>Rangpur</span></label>
                </div>

            </div>
            <div class="d-flex ">
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Occupation : <span>System Engineer</span></label>
                </div>
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Education : <span>Msc in EEE</span></label>
                </div>

                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Landline Phones : <span>16575</span></label>
                </div>
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Cell Phone : <span>01710200309</span></label>
                </div>

            </div>
            <div class="d-flex justify-content-between">
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Marital state: <span>Married</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Language : <span>English</span></label>
                </div>

                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Race : <span>South Asian</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Ethnicity : <span>Indo-Aryan</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Religion : <span>Islam</span></label>
                </div>

            </div>
            <h3 class="mt-5">Basic Health Information and Vital signs of patient:</h3>
            <div class="d-flex justify-content-between">
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Blood type: <span>O+ve</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Rh Factor: <span>Negative</span></label>
                </div>

                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Pulse: <span>100</span></label>
                </div>
                <div class="form-floating mb-3 col-1">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Temp:<span>98C</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">BP: <span>140/70</span></label>
                </div>
                <div class="form-floating mb-3 col-1">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Height:<span>6ft</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Weight: <span>88Kg</span></label>
                </div>

            </div>
            <div class="d-flex justify-content-between">
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Diabatic Patient: <span>No</span></label>
                </div>



                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Cardiac State:<span>Normal</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Covid State: <span>Negative</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Creatinine: <span>1.1</span></label>
                </div>
                <div class="form-floating mb-3 col-1">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">SGPT:<span>21</span></label>
                </div>
                <div class="form-floating mb-3 col-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Eye: <span>No probl</span></label>
                </div>

            </div>
            <h3 class="mt-5">Emergency Contact:</h3>
            <div class="d-flex justify-content-between">
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Name: <span>Noushin</span></label>
                </div>
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Phone Number: <span>01798349741</span></label>
                </div>

                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Relationship: <span>Wife</span></label>
                </div>


            </div>
            <h3 class="mt-5">Spouse Information:</h3>
            <div class="d-flex ">
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Name: <span>Noushin</span></label>
                </div>
                <div class="form-floating col-3 ">
                    <input type="date" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Date of Birth</label>
                </div>
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Phone Number: <span>01798349741</span></label>
                </div>
                <div class="form-floating mb-3 col-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Occupation : <span>Production Manager</span></label>
                </div>

            </div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images-for-book/kidney-1.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Kidney Image</h5>
                            <p>Kidney Picture of Md. Kaim Iftahaj Nirjhor</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images-for-book/lungs-1.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Lungs Images</h5>
                            <p>Lungs Image of Md. Kaim Iftahaj Nirjhor</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images-for-book/Corona.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Corona Lungs State</h5>
                            <p>Corona State of Md Kaim Iftahaj Nirjhor.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
        
        
        <div>
        <button type="button" class="btn btn-primary m-5" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Send this record to Medical Representative
                            </button>

                            {/* Modal  */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header bg-dark text-primary">
                                            <h5 class="modal-title" id="exampleModalLabel"> Status: Records transfer succeed</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body bg-dark text-white">
                                          
                                          Patient Information shared with Medical Representative with Data masking <br/>
                                          <a href="/medicalrecords">View Masked Record</a>
                                          
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                            </div>
        </div>
        </div>
    );
};

export default Records;
import { Button, Modal } from 'bootstrap';
import React from 'react';

const Register = () => {
    return (
        <div>
            <div class="container">

                <h1 class="text-center">Verification Form</h1>
                <form class="row g-2">
                    

                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Public Key</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>


                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">NID Number</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>

                    <div class="col-12">
                        <div class="form-check text-start mt-2  mb-2">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                I agree to the terms & conditions
                            </label>
                        </div>
                    </div>
                    <div class="col-12 text-center g-1">
                        <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                            data-bs-whatever="@mdo">Register As Doctor</button>


                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModal1Label">Authentication Process</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <h2 class="fw-bold">Enter the confirmation code</h2>
                                            <p class="text-muted">Enter the confirmation code sent to n****r@gmail.com and
                                                follow the steps to
                                                complete the process</p>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Enter the code:</label>
                                                <input type="text" class="form-control" id="recipient-name" />
                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-dark">
                                            <a class="nav-link text-white" href="/doctor">Verify</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                            data-bs-whatever="@mdo">Register As Patient</button>


                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModal2Label">Authentication Process</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <h2 class="fw-bold">Enter the confirmation code</h2>
                                            <p class="text-muted">Enter the confirmation code sent to n**ro*jh@gmail.com and
                                                follow the steps to
                                                complete the process</p>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Enter the code:</label>
                                                <input type="text" class="form-control" id="recipient-name" />
                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-dark">
                                            <a class="nav-link text-white" href="/patient">Verify</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                            data-bs-whatever="@mdo">Register As Medical Representative</button>


                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModal3Label"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModal3Label">Authentication Process</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <h2 class="fw-bold">Enter the confirmation code</h2>
                                            <p class="text-muted">Enter the confirmation code sent to n**ro*jh@gmail.com and
                                                follow the steps to
                                                complete the process</p>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Enter the code:</label>
                                                <input type="text" class="form-control" id="recipient-name" />
                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-dark">
                                            <a class="nav-link text-white" href="/medicalrep">Verify</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


        

            </div>

        </div>
    );
};

export default Register;
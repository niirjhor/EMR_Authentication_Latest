import React from 'react';
import './Doctor.css';

const Doctor = () => {
    return (
        <div className="container">
            <div className="container">
        <div className=" container panel panel-default">
            <div className="panel-heading">
                <h3 className=" bg-primary text-white">Doctors' Personal Information</h3>
            </div>
            <div className="container panel-body">
                <div className="ms-5 row">
                    <div className="col-sm-offset-1 col-sm-10 text-justify">
                        <table className="table">
                            <tr>
                                <th>Name:</th>
                                <td id="name" className="text-start">Prof. Dr. Abdul Kalam Azad</td>
                            </tr>
                            <tr>
                                <th>Age:</th>
                                <td id="age">42</td>
                            </tr>
                            <tr>
                                <th>Specialist:</th>
                                <td id="age">M.B.B.S(S.U), P.G.T(Diabetes)</td>
                            </tr>
                            <tr>
                                <th>Position:</th>
                                <td id="age">Medical Director</td>
                            </tr>
                            <tr>
                                <th>Details of Expertise:</th>
                                <td id="age">Abdul Salam has an international reputation for his scientific contribution
                                    in the fields of treatment of type 1 and type 2 diabetes as well as in the
                                    development of an artifical pancreas.</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td id="age">Abdus.salam@emr-chain.com</td>
                            </tr>
                        </table>
                        <div className="form-group"> 
                            <div className="text-center">
                                <button type="submit" className="btn btn-info btn-lg">Update details</button>
                            </div>
                        </div> 
                        
                    </div>
                </div>

            </div>
        </div>
        </div>
       <div className="container">
       <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="text-center bg-primary">Accessible EMRs</h3>
            </div>
            <div className="panel-body">
                <div className="row notice">
                    <div className="alert ms-5 alert-danger col-sm-8 col-sm-offset-2">
                        <strong>Notice!</strong> Could not access records. Access might have been revoked. Contact admin
                        or patient.
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-offset-1 ms-5 col-sm-10">
                        <table id="viewPatient" className="table table-hover">
                            <tr>
                                <th>Patient</th>
                                <th className="publicKeyPatient">Public Key</th>
                                <th>Action</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

       </div>
        </div>
    );
};

export default Doctor;
import React from 'react';
import { Button } from 'react-bootstrap';
import './Patient.css'


const Patient = () => {
    return (
        <div>
            <div class="panel panel-default justify-content-center ">
            <div class="panel-heading container justify-content-center ">
                <h3 class="text-center">Patients Personal Information</h3>
            </div>
            <div class="panel-body container">
                <div class="row ">
                    <div class="col-sm-offset-1 col-sm-12">
                        <table class="table">
                            <tr>
                                <th>Name:</th>
                                <td id="name">Md. Kaim Iftahaj Nirjhor</td>
                            </tr>
                            <tr>
                                <th>Age:</th>
                                <td id="age">29</td>
                            </tr>
                            <tr>
                                <th>Address:</th>
                                <td id="age">272/07,West Agergaon,Dhaka-1207</td>
                            </tr>
                            <tr>
                                <th>Contact No:</th>
                                <td id="age">+8801720660147</td>
                            </tr>
                            <tr>
                                <th>Public Key:</th>
                                <td id="age">sndfnsnvjsndnvsnvlknskvn76</td>
                            </tr>
                        </table>

                        <div class="text-center">
                            <h5>Your records are stored here: http://localhost:8080/ipfs/<span id="recordsHash"></span>
                            </h5>
                            <button type="submit" class="btn btn-info btn-lg" onclick="showRecords(this)"><a
                                    class="text-dark" href="/records">View medical
                                    records</a></button>
                            

                        </div>
                        <pre id="records">

                            </pre>

                    </div>
                </div>

            </div>
        </div>
        <div className="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="text-center">Share your Medical Record</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="alert alert-info col-sm-8 col-sm-offset-2">
                        <strong>Info!</strong> The doctor already has access to your records. Revoke access or wait for
                        time duration to end to continue.
                    </div>
                </div>


                <form class="form-horizontal" action="/action_page.php">
                    <div class="form-group">
                        <label for="permitDoctorList" class="control-label col-sm-2">Doctor:</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="permitDoctorList">
                                <option selected disabled>-- Please Select --</option>
                                <option>Prof. Abul Kalam Azad</option>
                                <option>Prof. Harun Ur Rashid</option>
                                <option>Prof. Hosne Ara Begum</option>
                                <option>Prof. Mollik Uddin</option>
                                <option>Prof. Noushin Sworna</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sel2" class="control-label col-sm-2">Time duration:</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="sel2">
                                <option selected disabled>-- Please Select --</option>
                                <option>One time access</option>
                                <option>Three time access</option>
                                <option>Ten time access</option>
                                <option>Six hours from first access</option>
                                <option>Twelve hours from first access</option>
                                <option>One day from first access</option>
                                <option>One week from first access</option>
                                <option>One month from first access</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div class="text-center">
                    <button onclick="giveAccess()" class="btn btn-primary btn-lg">Submit</button>
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="text-center">Current EMR access holders</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="alert alert-danger col-sm-8 col-sm-offset-2">
                        <strong>Notice!</strong> The access could not be revoked. Please retry or contact admin.
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-offset-1 col-sm-10">
                        <table id="accessDoc" class="table table-hover">
                            <tr>
                                <th>Doctor</th>
                                <th class="publicKeyDoctor">Public Key</th>
                                <th>Revoke access</th>
                            </tr>
                            
    <tr>
      <th scope="row">Prof. Abul Kalam Azad</th>
      <td>Pu44422FFFsss...</td>
      <td> <button className='bg-primary'>Revoke Access</button> </td>
      
    </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        <div class="panel panel-default" id="insuranceInfo">
            <div class="panel-heading">
                <h3 class="text-center">Insurance provider</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                        <div class="alert alert-danger col-sm-8 col-sm-offset-2">
                            <strong>Notice!</strong> The access could not be revoked. Please retry or contact admin.
                        </div>
                    </div> 
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <h4>Your Insurance provider is <strong id="insuranceProvider"></strong> and you are getting
                            insurance for the
                            following ailments:</h4>
                        <ul id="ailmentsCovered">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default" id="buyInsurance">
            <div class="panel-heading">
                <h3 class="text-center">Do you want to buy an Insurance policy?</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                        <div class="alert alert-danger col-sm-8 col-sm-offset-2">
                            <strong>Notice!</strong> The access could not be revoked. Please retry or contact admin.
                        </div>
                    </div> 
                <form class="form-horizontal" action="/action_page.php">
                    <div class="form-group">
                        <label for="permitDoctorList" class="control-label col-sm-2">Insurer:</label>
                        <div class="col-sm-8">
                            <select class="form-control" id="insurers">
                                <option selected disabled>-- Please Select --</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sel2" class="control-label col-sm-2">Choose Ailments:</label>
                        <div class="col-sm-8">
                            <div class="checkbox">
                                
                                <label><input type="checkbox" name="ailment" value="0" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Cancer</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="ailment" value="1" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Heart Attack</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="ailment" value="2" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Brain Tumour</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="ailment" value="3" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Anaemia</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="ailment" value="4" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Alzheimer's</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="ailment" value="5" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Gastroenteritis</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="ailment" value="6" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Tuberculosis</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="ailment" value="7" onclick="calc()"
                                        autocomplete="off"/><span class="cr"><i
                                            class="cr-icon glyphicon glyphicon-ok"></i></span>Spondylolisthesis</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="row">
                    <div class="col-sm-offset-2 col-sm-8 well-sm well">
                        <h3 class="text-center">You will have to pay <strong><span id="emi">0</span> ETH</strong> every
                            year.</h3>
                        <h3 class="text-center">You will get <strong>4 ETH</strong> for each succesful claim.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-offset-4 col-sm-4 text-center">
                        <button onclick="buyInsurance()" class="btn btn-primary btn-lg">Buy</button>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Patient;
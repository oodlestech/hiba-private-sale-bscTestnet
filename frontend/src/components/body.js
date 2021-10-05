import React, { useState, useEffect } from 'react';
import getBlockchain from '../ethereum.js';
import {Input} from 'reactstrap';

export default function Body() {

  return(
        
        /* <!-- Page Body Start--> */
        <div className="page-body">
          
          {/* <!-- Container-fluid starts--> */}
          
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-xl-8 xl-50 col-md-12 box-col-6" style={{margin : '20px auto 0'}}>
                <div className="card height-equal">
                  <div className="card-header">
                    <h5>Buy Hiba</h5>
                  </div>
                  <div className="contact-form card-body">
                    {/* <!-- <form className="theme-form" method="post" action="<?php echo "index"; ?>"> --> */}
                      <div className="form-group mb-1">
                        <label className="col-form-label" for="exampleInputEmail1">BNB Amount</label>
                      </div>

                      <div className="input-group">
                          <Input type="number" name="amount" id="amount" className="form-control" aria-label="Text input with dropdown button" onkeyup="getHibaPrice()" />
                          {/* onkeyup="getHibaPrice() */}
                          <button className="btn btn-outline-primary py-1" type="button">BNB</button>
                      </div>
                      
                      <p id="input_error" style={{color : "#EB844"}}E></p>

                      <div className="form-group">
                        <label for="exampleInputName">Hiba Value</label>
                      </div>

                      <div className="input-group mb-3">
                        <Input type="number" name="hiba_amount" id="hiba_amount" readonly className="form-control" aria-label="Text input with dropdown button" />
                        <button className="btn btn-outline-primary py-1" type="button">HIBA</button>
                      </div>
                      
                      <div className="text-sm-right">
                        {/* <!-- <Input type="submit" name="submit" value="Purchase" className="btn btn-primary-gradien" /> --> */}
                        <a href="#confirm" data-toggle="modal" className="btn btn-primary-gradien"><span className="glyphicon glyphicon-log-out"></span> Request</a>
                        {/* <!-- <button id="purchase" className="btn btn-primary-gradien">Request</button> --> */}
                      </div>


                      <div className='row'>
                        <div className='col-sm-12'>
                          <h5 className="card-title">Invest</h5>
                          <form className="form-inline" onSubmit={e => invest(e)}>
                            <input 
                              type="text" 
                              className="form-control mb-2 mr-sm-2" 
                              placeholder="Investment amount (BNB)"
                            />
                            <button 
                              type="submit" 
                              className="btn btn-primary mb-2"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>

                      <div className='row'>
                        <h2>Your Investment: {amountInvested.toString()} BNB</h2>
                      </div>
                    {/* <!-- </form> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Container-fluid Ends--> */}
        </div>   
  )
}
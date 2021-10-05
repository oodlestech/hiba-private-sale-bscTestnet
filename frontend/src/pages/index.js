import React, { useState, useEffect } from 'react';
import getBlockchain from '../ethereum.js';
import Layout from '../components/layout';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import { Input } from 'reactstrap';
import PageModal from '../components/modal';
import { TrendingUp } from 'react-feather';

export default function Home( props ) {

    const [stakingPool, setStakingPool] = useState(undefined);
    const [signerAddress, setSignerAddress] = useState(undefined);
    const [amountInvested, setAmountInvested] = useState(undefined);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bnb2usdLatestPrice, setbnb2usdLatestPrice] = useState([]);
    
    // const [hibaAcquired, sethibaAcquired] = useState([]);

    useEffect(() => {
        const init = async () => {
        const { signerAddress, stakingPool } = await getBlockchain();
        const amountInvested = await stakingPool.balances(signerAddress);
        // const hibaAcquired = await Math.floor((amountInvested * bnb2usdLatestPrice) / 0.3);


        fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            var bnbusd = result;
            setbnb2usdLatestPrice(bnbusd.binancecoin.usd);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )

        setStakingPool(stakingPool);
        setSignerAddress(signerAddress);
        setAmountInvested(amountInvested);

        // sethibaAcquired(hibaAcquired);

        };
        init();
    }, []);


    if(
        typeof stakingPool === 'undefined'
        || typeof signerAddress === 'undefined'
        || typeof amountInvested === 'undefined'
    ) {
        return (
        //  Loader starts
        <div className="loader-wrapper">
            <div className="loader loader-7">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
            </div>
        </div>
        //  Loader ends
        );
    }
    
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        
    }

    const invest = async e => {
        e.preventDefault();
        const tx = await stakingPool.buyHiba(
        {value: e.target.elements[0].value}
        );
        await tx.wait();
        var amountInvested = await stakingPool.balances(signerAddress); 
        setAmountInvested(amountInvested);

        // var hibaAcquired = await Math.floor((amountInvested * bnb2usdLatestPrice) / 0.3);
        // sethibaAcquired(hibaAcquired);

    };


    return(
         <Layout title="Hiba Sale">
        
            <div className='page-wrapper'>
                <Header />
                
                {/*  Page Body Start */}
                <div className="page-body-wrapper">

                    <Sidebar />

                    {/*  Page Body Start */ }
                    <div className="page-body">
                    
                        {/*  Container-fluid starts */}
                    
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6 col-xl-8 xl-50 col-md-12 box-col-6" style={{margin : '20px auto 0'}}>
                                    <div className="card height-equal">
                                        
                                        <div className="card-header">
                                            <h5>Buy Hiba</h5>
                                        </div>
                                        <form className="form-inline" onSubmit={e => invest(e)}>
                                            <div className="contact-form card-body">
                                            
                                                <div className="form-group mb-1">
                                                    <label className="col-form-label" htmlFor="exampleInputEmail1">BNB Amount</label>
                                                </div>

                                                <div className="input-group">
                                                    <Input type="number" name="amount" id="amount" className="form-control" placeholder="1000000000000000000 wei = 1 BNB" />
                                                    
                                                    {/* onkeyup="getHibaPrice() */}
                                                    <button className="btn btn-outline-primary py-1" type="button">BNB (wei)</button>
                                                </div>
                                                
                                                <p id="input_error" style={{color : "#EB844E"}}></p>

                                                {/* <div className="form-group">
                                                    <label htmlFor="exampleInputName">Hiba Value</label>
                                                </div> */}

                                                {/* <div className="input-group mb-3">
                                                    <Input type="number" name="hiba_amount" id="hiba_amount" readOnly className="form-control" aria-label="Text input with dropdown button" />

                                                    <button className="btn btn-outline-primary py-1" type="button">HIBA</button>
                                                </div> */}
                                                
                                                <div className="text-sm-right">
                                                    {/* <a href="#confirm" data-toggle="modal" className="btn btn-primary-gradien"> Request</a> */}
                                                    <button type="submit" className="btn btn-primary-gradien" >Buy Hiba</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div className="col-lg-12 xl-100" style={{margin : '20px auto 0'}}>
                                    <div className='row'>

                                        <div className="col-xl-6 xl-50 col-md-6 box-col-6">
                                            <div className="card">
                                                <div className="card-body tag-card">
                                                    <div className="progressbar-widgets">
                                                        <div className="media media-widgets">
                                                            <div className="media-body">
                                                                <p className="mb-0">Total BNB Spent</p>
                                                                <h3 className="mt-0 mb-0 f-w-600"><span className="counter">{(amountInvested / 1000000000000000000).toString()} BNB</span><span><TrendingUp /></span></h3>
                                                            </div>
                                                        </div>
                                                        <div className="progress sm-progress-bar progress-animate">
                                                           
                                                        </div>
                                                        <span className="tag-content-secondary tag-hover-effect"><TrendingUp /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 xl-50 col-md-6 box-col-6">
                                            <div className="card">
                                                <div className="card-body tag-card">
                                                    <div className="progressbar-widgets">
                                                        <div className="media media-widgets">
                                                            <div className="media-body">
                                                                <p className="mb-0">Hiba Acquired</p>
                                                                <h3 className="mt-0 mb-0 f-w-600"><span className="counter">{Math.floor(((amountInvested * bnb2usdLatestPrice) / 0.3) / 1000000000000000000)} HIBA</span><span><TrendingUp /></span></h3>
                                                            </div>
                                                        </div>
                                                        <div className="progress sm-progress-bar progress-animate">
                                                           
                                                        </div>
                                                        <span className="tag-content-secondary tag-hover-effect"><TrendingUp /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Container-fluid Ends */}
                    </div>

                    <Footer />

                </div> 

                < PageModal/>
            
            </div>
    
        </Layout>   
               
    )
}
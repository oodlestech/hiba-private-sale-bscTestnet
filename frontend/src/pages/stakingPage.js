import React, { useState, useEffect } from 'react';
import getBlockchain from '../ethereum.js';

import Layout from '../components/layout';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

import PageModal from '../components/modal';

export default function Staking( props ) {

    const [stakingPool, setStakingPool] = useState(undefined);
    const [signerAddress, setSignerAddress] = useState(undefined);
    const [amountInvested, setAmountInvested] = useState(undefined);

    useEffect(() => {
        const init = async () => {
        const { signerAddress, stakingPool } = await getBlockchain();
        const amountInvested = await stakingPool.balances(signerAddress); 
        setStakingPool(stakingPool);
        setSignerAddress(signerAddress);
        setAmountInvested(amountInvested);
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

    const invest = async e => {
        e.preventDefault();
        await stakingPool.invest(
        {value: e.target.elements[0].value}
        );
        const amountInvested = await stakingPool.balances(signerAddress); 
        setAmountInvested(amountInvested);
    };

    return(
         <Layout title="Hiba Sale">
        
            <div className='page-wrapper'>
                <Header />
                
                {/*  Page Body Start */}
                <div className="page-body-wrapper">

                    <Sidebar active="home" />

                    {/*  Page Body Start */ }
                    <div className="page-body">
                    
                        {/*  Container-fluid starts */}
                    
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6 col-xl-8 xl-50 col-md-12 box-col-6" style={{margin : '20px auto 0'}}>
                                    <div className="card height-equal">
                                        <div className="card-header">
                                            <h5>Staking</h5>
                                        </div>
                                        <div className="contact-form card-body">
                                        
                                            <div className='row'>
                                                <h5 className="card-title" onClick={e => invest(e)}>Coming soon</h5>

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
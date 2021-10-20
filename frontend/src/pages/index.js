import React, { useState, useEffect } from 'react';
import {getBlockchain, getContract, getBNBPrice} from '../ethereum.js';
import convertBnb2Wei from '../convertBnb2Wei.js';
import getHibaValue from '../getHibaValue.js';
import Layout from '../components/layout';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import { Input } from 'reactstrap';
import PageModal from '../components/modal';
import { TrendingUp } from 'react-feather';


export default function Home( props ) {
    const [hibaSale, setHibaSale] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [signerAddress, setSignerAddress] = useState(undefined);
    const [amountInvested, setAmountInvested] = useState(undefined);
    const [hibaAmount, setHibaAmount] = useState(undefined);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bnb2usdLatestPrice, setbnb2usdLatestPrice] = useState([]);


    React.useEffect(() => {
        const metamaskInstance = window.ethereum;
        if (metamaskInstance){

          (async () => {
              try {
                  const { provider, networkId } = await getBlockchain(metamaskInstance);
                  const { hibaSale, hibaToken } = await getContract(metamaskInstance);

                  const accounts = await provider.listAccounts();

                  if (accounts.length > 0) {
                    setSignerAddress(accounts[0]);
                  } else {
                    // ask user to connect thier metamask
                    const a = await window.ethereum.enable();
                    setSignerAddress(a[0]);
                  }

                  const bnbPrice = await getBNBPrice();
                  setbnb2usdLatestPrice(bnbPrice);

                  setHibaSale(hibaSale);
                  setToken(hibaToken);

              } catch (error) {
                //   error.code = 4001 - when user reject connection to metamask
                console.log(error, "error");
              }
          })();
        }else{
            // todo
            // ask user to install metamask
        }
    }, [window.ethereum]);

    React.useEffect(() => {

        if (token !== undefined && hibaSale !== undefined && signerAddress !== undefined) {

            (async () => {
              // const amountInvested = await hibaSale.balances(signerAddress);
              const hibaAmount = await token.balanceOf(signerAddress);
              setAmountInvested(0);
              setHibaAmount(hibaAmount);
            })()
        }
    }, [token, hibaSale, signerAddress]);



    if(
        typeof hibaSale === 'undefined'
        || typeof signerAddress === 'undefined'
        || typeof amountInvested === 'undefined'
    ) {
        return (
            'loading signer details'
        );
    }


    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading token details</div>;
    // } else {

    // }

    const exchange = async e => {
        e.preventDefault();

        var bnbValue = e.target.elements[0].value;
        var totalUSD = bnbValue * bnb2usdLatestPrice;
        var wei = await convertBnb2Wei(
        {value: bnbValue}
        );

        if(isNaN(wei)){
            wei = '0';
        }

        var hiba = await getHibaValue(
        {value: totalUSD}
        );

        // hiba = "0x"+hiba.toString(16)

         if(isNaN(hiba)){
            hiba = '0';
        }

        // console.log(hiba);

        var wei2Num = await parseInt(wei) / 1000000000000000000;
        var amountInvested2Num =  await hibaSale.balances(signerAddress);
        amountInvested2Num =  await parseInt(amountInvested2Num)  / 1000000000000000000;


        var error_msg = document.getElementById('error_msg');

        if ( wei2Num < 0.025 ) {
            error_msg.innerHTML = 'BNB amount cannot be less than 0.025';
        }

        else if ( wei2Num > 20 ) {
            error_msg.innerHTML = 'BNB amount cannot be more than 20';
        }

        else if ( (amountInvested2Num + (wei / 1000000000000000000)) > 20 ) {
            error_msg.innerHTML = 'Total purchase amount in BNB cannot be more than 20';
        }

        else{
            error_msg.innerHTML = '';
        }

        const tx = await hibaSale.buyHiba(
        {value : wei}
        );
        await tx.wait();

        const tx2 = await token.transferToken(
        // {value :
        hiba
        // }
        );
        await tx2.wait();

        var amountInvested = await hibaSale.balances(signerAddress);
        setAmountInvested(amountInvested);
        var hibaAmount = await token.balances(signerAddress);
        setHibaAmount(hibaAmount);

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

                                <div className="col-sm-12 col-lg-8 col-xl-6 xl-50 col-md-12 box-col-12" style={{margin : '20px auto 0'}}>
                                    <div className="card height-equal">

                                        <div className="card-header">
                                            <h5>BNB Amount</h5>
                                        </div>
                                        <form className="form-inline" onSubmit={e => exchange(e)}>
                                            <div className="contact-form card-body">

                                                <div className="input-group">
                                                    <Input type="text" name="bnbAmount" id="bnbAmount" className="form-control" placeholder="eg : 1" />

                                                    <button type="submit" className="btn btn-primary-gradien" >Buy HIBA</button>
                                                </div>

                                                <p id="error_msg" style={{color: '#EB844E'}}></p>

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
                                                                <h3 className="mt-0 mb-0 f-w-600"><span className="counter">{Math.floor(hibaAmount / 1000000000000000000).toString()} HIBA</span><span><TrendingUp /></span></h3>
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

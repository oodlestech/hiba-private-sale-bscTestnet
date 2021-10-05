import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';


export default function Layout({ title, loading, children }) {
  //set site title
  // document.title = title;
  document.title = `Hiba Finance | ${title}`;

  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);

  const divStyle = {
    alert: {
      position: "absolute",
      bottom: "0",
      right: "12px",
    }
  }


  useEffect(() => {
    window.addEventListener('load', function (e) {
      if (navigator.onLine) {
        console.log('We\'re online!');
        setVisible(false)
      } else {
        console.log('We\'re offline...');
        setVisible(true)
      }
    }, false);

    window.addEventListener('online', function (e) {
      console.log('And we\'re back :).');
      setVisible(false)
    }, false);

    window.addEventListener('offline', function (e) {
      console.log('Connection is down.');
      setVisible(true)
    }, false);
    
  }, [])
 

  return (
    <React.Fragment>
     
      <div className="min-h-screen">
        <main className="main">
          <Alert color="danger" style={divStyle.alert} isOpen={visible} toggle={onDismiss}>
            Your internet connection is down !
          </Alert>
          {children}
        </main>
      </div>

    </React.Fragment>
  )
}
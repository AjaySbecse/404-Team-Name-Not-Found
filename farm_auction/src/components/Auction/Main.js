import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useFirestore } from '../../Hooks/useFirestore';
import { AddAuction } from './AddAuction'
import { ProgressBar } from './ProgressBar';
import { AuctionCard } from './AuctionCards';
import { Alert } from 'react-bootstrap';

export default function Main() {
    const [auction,setAuction] = React.useState(null);
    const {currentUser,globalMsg} = useContext(AuthContext);
    const {docs} = useFirestore('auctions');
  return (
    <div id='main-body'>
        <br />
        {(auction) && <ProgressBar auction = {auction} setAuction = {setAuction} />}
        {(currentUser) && <AddAuction setAuction={setAuction}/>}
        {(globalMsg) && <Alert varient="info"><b>{globalMsg}</b></Alert>}      

        {(docs) && 
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 " id='all-card-holder'>
                {docs.map((doc) => {
                return <AuctionCard item={doc} key={doc.id} />;
                })}
            </div>
        }
    </div>
  )
}

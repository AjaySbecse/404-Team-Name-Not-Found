import React from 'react';
import Countdown from 'react-countdown';
import { Card,Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const renderer = ({days,hours,minutes,seconds,completed,props}) => {
    if(completed){
        return null;
    }
    console.log(props.item)
    return(
        <div className="col" id='card-holder'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.imgUrl} style= {{height:'200px'}}/>
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <h6>
                        {days * 24 + hours} hr: {minutes} min: {seconds} sec
                    </h6>
                    <p className="card-text">{props.item.desc}</p>
                    <div className="d-flex justify-content-between align-item-center">
                    <div>
                    {!props.owner ? (
                        <div
                        onClick={() => props.bidAuction()}
                        className="btn btn-outline-secondary"
                        >
                        Bid
                        </div>
                    ) : props.owner.email === props.item.email ? (
                        <div
                        onClick={() => props.endAuction(props.item.id)}
                        className="btn btn-outline-secondary"
                        >
                        Cancel Auction
                        </div>
                    ) : props.owner.email === props.item.curWinner ? (
                        <p className="display-6">Winner</p>
                    ) : (
                        <div
                        onClick={() =>
                            props.bidAuction(props.item.id, props.item.curPrice)
                        }
                        className="btn btn-outline-secondary"
                        >
                        Bid
                        </div>
                    )}
                    </div>
                    <p className="display-6">${props.item.curPrice}</p>
                </div>
                </Card.Body>
                </Card>
        </div>
    );
}

export const AuctionCard = ({item}) =>{
    let expiredDate = item.duration;
    const { currentUser,bidAuction,endAuction } = useContext(AuthContext);
    return <Countdown owner={currentUser}
        date={expiredDate}
        bidAuction={bidAuction}
        endAuction={endAuction}
        item={item}
    renderer={renderer} />;
}
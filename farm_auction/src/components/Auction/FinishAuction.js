import { Card } from "react-bootstrap";
export default function FinishAuction({props}){
    return (
        <div className="col" id='card-holder'>
            <Card style={{ width: '18rem' }} id="finished-card-items">
                <div className="sold-out">Sold Out</div>
                <Card.Img variant="top" src={props.item.imgUrl} style= {{height:'200px'}}/>
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    
                    <p className="card-text">{props.item.desc}</p>
                    <div className="">
                    
                    <p className="final-price">Final Price :<strong>{props.item.curPrice}</strong>/-</p>
                    <p className="winner-announce">Won by <strong>{props.item.curWinner}</strong></p>
                </div>
                </Card.Body>
                </Card>
        </div>
    );
}
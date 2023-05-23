import React from 'react'
import { Badge, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { CircularProgressbarWithChildren, buildStyles, } from 'react-circular-progressbar'
import { FaCheckCircle } from "react-icons/fa"
const format = (n) => "₦" + new Intl.NumberFormat("en-US").format(n)
function PlanCard({ speed, name, price, features = [], important, highlight = false}) {
    return (
        <div className={`p-3 p-md-4 ${important ? "bg-primary shadow":"bg-light2 nplan"} position-relative plan rounded-3`}
            style={important && {transform:"scale(1.1)",zIndex:33, borderTopLeftRadius:"22px !important"}}
        >
            <h5 className={` ${important ? "text-light":"text-primary"} text-center fw-bold`}>{name}</h5>
            <div className='progress-container mx-4'>
                <CircularProgressbarWithChildren
                    value={speed}
                    circleRatio={0.75}
                    maxValue={50}

                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "butt",
                        trailColor: important ? "white" : "#ccc",
                        textColor: important ? "white":"var(--bs-primary)",
                        pathColor: important ? "black":"var(--bs-primary)",
                        // textSize:"1em",
                    })}
                >
                    <div className={` ${important ? "text-light":"text-primary"} fw-bold text-center`} style={{fontSize:"1.4em"}}>{speed}<br />Mbps</div>
                </CircularProgressbarWithChildren>
            </div>
            <div className="text-center">
                <Badge bg={important ? "light text-primary":"primary"}>{format(price)} / mo</Badge>
            </div>
            <ListGroup variant={`flush text p-2 pb-5 ${highlight && "bg-light-primary text-start white-text my-2 h-fit rounded-3"}`}>
                {features.map(f => <ListGroupItem key={f} className={`bg-none  ${important ? "text-light":"text-muted"}`}>
                    <FaCheckCircle color={!important ? 'var(--bs-primary)':"white"} className='me-2'/>{f}
                </ListGroupItem>)}
            </ListGroup>
            <Button className='subscribe-btn' variant={important && "light"}>Subscribe</Button>
        </div>
    )
}

export default PlanCard
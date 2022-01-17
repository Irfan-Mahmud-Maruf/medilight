import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";


const HomeServices = (props) => {
    const { img, name, des } = props.img;
    return (
        <div>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {des}
                    </Card.Text>
                    <Button className="btn btn-outline-primary mt-3">Click for details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeServices;

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const Buttons =()=>{
    return(
        <div>
        <ButtonGroup size="lg" className="mb-2">
        <Button as={Link} to="/" >All</Button>
        <Button as={Link} to='/IsDoneTasks'>Is Done</Button>
        <Button as={Link} to='/NotDoneTasks'>Not Done</Button>
        </ButtonGroup>
        </div>
    )
}

export default Buttons
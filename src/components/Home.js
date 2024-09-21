import { Button, Container } from "reactstrap";

function Home(){
    return(
        <Container className="text-center bg-light p-4">

            <h1>This is Home Page</h1>
            <p>This React Project. Where we be performing</p>
            <Container>
                <Button color="primary" outline>
                    Learn More
                </Button>
            </Container>
        </Container>
    );
}
export default Home;
export const Banner = () =>{
    return(
        <section className = "banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className= "tagline">Welcome to my Portfolio</span>
                    <h1>{"Hi I'm me "}<span className="wrap">Web developer</span></h1>
                    <p> Bla bla bla bla bla</p>
                    <button onClick={() => console.log("connect")}> Let's connect</button>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
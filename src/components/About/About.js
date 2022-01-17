import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../images/why.jpg';

const About = () => {
    return (
        <Container>
            <div>
                <h2 className="text-center my-4 fs-1">About Us</h2>
            </div>

            <Row>
                <Col  md="7">
                    <h2>Why you choose
                        <span className="text-red-500"> Medi Light?</span></h2>
                    <p className="mt-3 leading-7">Medi Light is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety. Medi Light was first accredited by JCI in 2008 and till date remains the only hospital in Bangladesh to hold this international recognized standard. Accreditation by recognized international institutions such as JCI are crucial to drive compliance and improve quality and cost-effectiveness across the hospitals and has become a priority for healthcare organizations across the world.

                        EHD is a 425-bed multi-disciplinary super-specialty tertiary care hospital in Bangladesh, providing comprehensive health care with the latest medical, surgical and diagnostic facilities. These services are provided by expert medical professionals, skilled nurses and technologists using state-of-the-art equipment, modern well researched protocols & processes.</p>
                </Col>
                <Col  md="5">
                    <img className="mt-5" src={aboutImg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
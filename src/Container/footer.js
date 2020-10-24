import React from 'react'
import Footer from '../component/Footer'
import { FaceBookButton, ParagraphDiv } from '../component/Footer/styles/footer'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#"><ParagraphDiv><p>
                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.
                            </p></ParagraphDiv></Footer.Link>
                    <FaceBookButton href="#"><i className="fa fa-facebook-official"></i>Like Us On Facebook</FaceBookButton>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Helpfull Links</Footer.Title>
                    <Footer.SubRow>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>About Us</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>Press Release</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>Careers</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>Services</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>Projects</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>About Us</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>Press Release</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>Careers</Footer.Link>
                    <Footer.Link href="#"><i className="fa fa-angle-right"></i>Services</Footer.Link>
                    </Footer.SubRow>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">12345 Little Lonsdale St, Melbourne</Footer.Link>
                    <Footer.Link href="#">Phone: (123) 123-456</Footer.Link>
                    <Footer.Link href="#">Fax: (123) 123-456</Footer.Link>
                    <Footer.Link href="#">E-Mail: office@example.com</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
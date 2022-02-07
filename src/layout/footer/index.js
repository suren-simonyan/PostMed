import LogoPostmedSvg from "../../resourses/icons/LogoPostmedSvg";
import PhoneSvgIcon from "../../resourses/icons/PhoneSvgIcon";
import EmailSvgIcon from "../../resourses/icons/EmailSvgIcon";
import "./style.scss";
import AddresSvgIcon from "../../resourses/icons/AddresSvgIcon";
import FbSvgIcon from "../../resourses/icons/FbSvgIcon"
import InstaSvgIcon from "../../resourses/icons/InstaSvgIcon"
import YoutubeSvgIcon from "../../resourses/icons/YoutubeSvgIcon"
import LinkedInSvgIcon from "../../resourses/icons/LinkedInSvgIcon"
import VisaCadSvgIcon from "../../resourses/icons/VisaCardSvgIcon";
import MasterCardSvgIcon from "../../resourses/icons/MasterCardSvgIcon"

export default function Footer() {

    return (
        <footer>
            <div className="footer">
                <div className="footer-about-blog" >
                    <LogoPostmedSvg />
                    <p className="footer-blog-title">About Us</p>
                    <p className="footer-about-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                </div>
                <div className="footer-blogs">
                    <div className="footer-blog" >
                        <p className="footer-blog-title">Customer service</p>
                        <ul>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                        </ul>
                    </div>
                    <div className="footer-blog" >
                        <p className="footer-blog-title">Customer service</p>
                        <ul>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                            <li>Delivery methods</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-contact-blog">
                    <p className="footer-blog-title">Contact</p>
                    <div className="footer-constacts">
                        <div>
                            <PhoneSvgIcon />
                            <p>+374 33 33 33 33
                                <span></span>
                            </p>
                        </div>
                        <div>
                            <EmailSvgIcon />
                            <p>Medinfo@haypost.am
                                <span></span>
                            </p>
                        </div>
                        <div>
                            <AddresSvgIcon />
                            <p>RA, 0002, c․Yerevan, Saryan 22
                                <span></span>
                            </p>
                        </div>
                    </div>
                    <p className="footer-blog-title">Follow Us</p>
                    <div className="footer-soc-icons">
                        <div>
                            <FbSvgIcon />
                        </div>
                        <div>
                            <InstaSvgIcon />
                        </div>
                        <div>
                            <YoutubeSvgIcon />
                        </div>
                        <div>
                            <LinkedInSvgIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-extra">
                <div>
                    <VisaCadSvgIcon />
                    <MasterCardSvgIcon />
                </div>
                <p>Copyright  “Haypost” CJSC   2021</p>
            </div>
        </footer>
    )
}
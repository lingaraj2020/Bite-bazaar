import { Link } from 'react-router-dom';
import { LOGO_URL } from "../../utils/Constants";
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
    const LiCss = "font-normal lg:text-base md:text-base text-xs lg:pt-3 md:pt-3 pt-2 text-zinc-400 lg:tracking-wide tracking-wider md:tracking-wide  cursor-pointer";
    const titleCss = "font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide lg:pb-4 md:pb-4 pb-2";
    return (
        <div>
            <div className="flex justify-center items-start lg:px-12 md:px-12 px-4 lg:flex-row md:flex-row flex-row bg-black lg:gap-10 md:gap-10 gap-16 lg:w-12/12 md:w-12/12 w-12/12 lg:py-16 md:py-16 py-10 pb-20 flex-wrap">
                <div className="lg:w-3/12 w-4/12 md:w-3/12 ">
                    <div className="flex justify-center items-center flex-col gap-2">
                        <img className="lg:w-32 w-16 rounded-3xl md:w-28" alt="logo" src={LOGO_URL}></img>
                        <span className="font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide"></span>
                        <div className="flex justify-evenly md:gap-4 gap-3 lg:gap-5 items-center flex-row">
                            <Link to="https://github.com/lingaraj2020/" target="_blank">
                                <RiGithubFill className="text-white lg:text-2xl text-xl md:text-2xl" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/lingaraj2020/" target="_blank">
                                <RiLinkedinBoxFill className="text-white lg:text-2xl text-xl md:text-2xl" />
                            </Link>
                            <Link  to="https://twitter.com/lingaraj_0010" target="_blank">
                                <RiTwitterFill className="text-white lg:text-2xl text-xl md:text-2xl" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/12 w-4/12 md:w-2/12">
                    <span className={titleCss}>Company</span>
                    <ul>    
                        <li className={LiCss}><Link to="/careers">Careers</Link></li>
                        <li className={LiCss}><Link to="/team">Team</Link></li>
                        <li className={LiCss}><Link to="/foody-instamart">Foody Instamart</Link></li>
                        <li className={LiCss}><Link to="/foody-one">Foody One</Link></li>
                    </ul>
                </div>
                <div className="lg:w-2/12 w-4/12 md:w-2/12">
                    <span className={titleCss}>Contact Us</span>
                    <ul>
                        <li className={LiCss}><Link to="/help-support">Help & Support</Link></li>
                        <li className={LiCss}><Link to="/partner">Partner with us</Link></li>
                        <li className={LiCss}><Link to="/ride">Ride with us</Link></li>
                        <li className={LiCss}><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li className={LiCss}><Link to="/cookies">Cookies</Link></li>
                    </ul>
                </div>
                <div className="lg:w-2/12 w-4/12 md:w-2/12 ">
                    <span className={titleCss}>We deliver to:</span>
                    <ul>
                        <li className={LiCss}>Hyderabad</li>
                        <li className={LiCss}>Pune</li>
                        <li className={LiCss}>Gurgaon</li>
                        <li className={LiCss}>Bangalore</li>
                        <li className={LiCss}>Delhi</li>
                        <li className={LiCss}>Mumbai</li>
                    </ul>
                </div>
            </div>
            <div className="bg-zinc-800 text-white text-center py-5">
                <span className="tracking-wide">© 2024 All Rights Reserved Lingaraj</span>
            </div>
        </div>
    );
};

export default Footer;

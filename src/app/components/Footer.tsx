import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance,faRecycle, faClinicMedical, faBiohazard, faBuilding, faSpaceShuttle, faBook, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Image from "next/image";

interface FooterProps{
    
}

export default function Footer({}:FooterProps ){
    return(
        <>
            <footer className=' bg-[#021327] sm:py-3 sm:px-2 pt-[120px] pb-[20px]'>
                {/* Parent container */}
                <div className=" relative max-w-full w-[1120px] mx-auto"> 
                    {/* container-1 */}
                    <div className=" h-[30px] flex justify-center items-center">
                        <div className=" w-full h-[1px] bg-[#999]"></div>
                    </div>
                    {/* Container-2 */}
                    <div className=" flex justify-between items-center  ">
                        <div className=" w-[280px] h-[268px] p-[10px]">
                            <h1 className=" mb-5 font-semibold text-[#fff] text-[16px]">WHAT WE DO</h1>
                            <ul className=" flex flex-col justify-center items-start">
                                <li className=" hover-content flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced] w-[20px]" color="#677294" icon={faRecycle} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">MSW and Recycling</h3>
                                </li>
                                <li className=" flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced]  w-[20px]" color="#677294" icon={faAmbulance} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">Medical Waste Solutions</h3>
                                </li>
                                <li className=" flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced]  w-[20px]" color="#677294" icon={faClinicMedical} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">Healthcare</h3>
                                </li>
                                <li className=" flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced]  w-[20px]" color="#677294" icon={faBiohazard} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">Hazardous Waste Solutions</h3>
                                </li>
                            </ul>
                        </div>
                        <div className=" w-[280px] h-[268px] p-[10px]">
                            <h1 className=" mb-5 font-semibold text-[#fff] text-[16px]">WHO WE ARE</h1>
                            <ul className=" flex flex-col justify-center items-start">
                                <li className=" hover-content flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced] w-[20px]" color="#677294" icon={faBuilding} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">About Us</h3>
                                </li>
                                <li className=" flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced]  w-[20px] " color="#677294" icon={faSpaceShuttle} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">Technologies</h3>
                                </li>
                                <li className=" flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced]  w-[20px] " color="#677294" icon={faBook} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">Blog</h3>
                                </li>
                            </ul>
                        </div>
                        <div className=" w-[280px] h-[268px] p-[10px]">
                            <h1 className=" mb-5 font-semibold text-[#fff] text-[16px]">ACCESS</h1>
                            <ul className=" flex flex-col justify-center items-start">
                                <li className=" hover-content flex justify-center items-center gap-1 h-[36px]">
                                    <FontAwesomeIcon className=" hover:text-[#5e2ced] w-[20px]" color="#677294" icon={faAddressCard} />
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">Contact Us</h3>
                                </li>
                                <li className=" flex justify-center items-center gap-1 h-[36px]">
                                    <h3 className=" hover:text-[#f8f9fa] text-[#999]">Resources</h3>
                                </li>
                            </ul>
                        </div>
                        <div className=" w-[280px] h-[268px] p-[10px]">
                            <h1 className=" mb-5 font-semibold text-[#fff] text-[16px]">GET IN TOUCH</h1>
                            <ul className=" flex flex-col justify-center items-start gap-[10px]">
                                <li className=" hover-content flex justify-center items-center gap-1 h-[60px]">
                                    <input placeholder="Name" className=" text-[#999] outline-none h-full w-full border border-slate-400 rounded placeholder:text-[#999] bg-transparent px-7 py-2" type="text"  />
                                </li>
                                <li className=" flex justify-center items-center gap-1 h-[60px]">
                                    <input placeholder="Email Address" className=" text-[#999] outline-none h-full w-full border border-slate-400 rounded placeholder:text-[#999] bg-transparent px-7 py-2" type="email"  />
                                </li>
                                <li className=" w-full text-[#fff] font-semibold text-[18px]">
                                    <button className=" drop-shadow-[0px_100px_100px_#5eead4]  bg-gradient-to-r from-black to-[#f7822f] hover:bg-gradient-to-r hover:from-green-700 hover:via hover:to-blue-700 rounded-md w-full text-center h-[60px] py-[14px] flex justify-center items-center gap-3" type="button">
                                        <p>Get In Touch</p>
                                        <FontAwesomeIcon icon={faHandshake} color="white"/>
                                        <FontAwesomeIcon icon={faArrowRight} color="white" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Container-3 */}
                    <div className=" flex justify-center w-full absolute top-44 mt-14 ">
                            <Image className=" w-[120px] h-[120px]" src={'https://codeland.in/wp-content/uploads/elementor/thumbs/cropped-Logo-542-x-4681-q5agzle747hlovtubejw0murtoegwycgyynjgt7xkg.png'} alt="not found" width={100} height={100}/>
                    </div>

                    {/* Container-4 */}
                    <div className=" w-full flex justify-between items-center mt-14">
                        <div className=" w-[373.3px] h-[70px] p-[10px]">
                            <ul className=" flex justify-start items-center ">
                                <li className=" flex items-center w-[50px] h-[50px]">
                                    <FontAwesomeIcon className=" w-[25px] h-[25px] text-blue-800" icon={faFacebookSquare} size={'1x'}/>
                                </li>
                                <li className=" flex items-center w-[50px] h-[50px]">
                                    <FontAwesomeIcon className=" w-[25px] h-[25px] text-blue-300" icon={faTwitter} size={'1x'}/>
                                </li>
                                <li className=" flex items-center w-[50px] h-[50px]">
                                    <FontAwesomeIcon className=" w-[25px] h-[25px] text-red-500" icon={faInstagram} size={'1x'}/>
                                </li>
                                <li className=" flex items-center w-[50px] h-[50px]">
                                    <FontAwesomeIcon className=" w-[25px] h-[25px] text-blue-600" icon={faLinkedin} size={'1x'}/>
                                </li>
                            </ul>
                        </div>
                        
                        <div className=" p-[10px] w-[373.3px] h-[70px] text-[#999999] text-[16px]">
                            <p className=" text-center py-1">
                                With Love from Bangalore!!
                            </p>
                            <p className=" text-center py-1">
                                CodeLand InfoSolutions Pvt. Ltd.© 2023
                            </p>
                        </div>
                        <div className=" text-[#999999] gap-3 flex justify-end items-center w-[373.3px] h-[70px] p-[10px]">
                            <p>
                                Terms of Use
                            </p>
                            <p>
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
const Contact = () => {
    return (
        <section className="c-wrapper" id='contact'>
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>


                    <div className="flexColStart contactMode">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={24} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span>021 2323 2323</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">call Now </div>
                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={24} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span>021 2323 2323</span>

                                    </div>
                                </div>
                                <div className="flexCenter button">chat Now </div>
                            </div>
                        </div>

                        {/* second row */}

                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={24} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span>021 2323 2323</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video call Now </div>
                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={24} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span>021 2323 2323</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flexStart c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt='contact' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

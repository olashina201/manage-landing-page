import React from 'react'
import anisha from '../images/avatar-anisha.png'
import ali from '../images/avatar-ali.png'
import richard from '../images/avatar-richard.png'
import shanai from '../images/avatar-shanai.png'

function Testimony() {
    return (
        <section className="testimonials">
            <h2>What they’ve said</h2>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={anisha} alt="profile image" />
                    <h3>Anisha Li</h3>
                    <blockquote>
                    <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </blockquote>
                </div>
                <div className="swiper-slide">
                    <img src={ali} alt="profile image" />
                    <h3>Ali Bravo</h3>
                    <blockquote>
                    <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                    </blockquote>
                </div>
                <div className="swiper-slide">
                    <img src={richard} alt="profile image"/>
                    <h3>Richard Watts</h3>
                    <blockquote>
                    <p>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                    </blockquote>
                </div>
                <div className="swiper-slide">
                    <img src={shanai} alt="profile image" />
                    <h3>Shanai Gough</h3>
                    <blockquote>
                    <p>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                    </blockquote>
                </div>
                </div>
                {/* <!-- <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div> --> */}
                <div className="swiper-pagination"></div>
            </div>
            <a href="#" className="cta-button">Get Started</a>
        </section>
    )
}

export default Testimony

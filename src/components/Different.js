import React from 'react'

function Different() {
    return (
        <section className="different">
            <div className="different-container">
                <div className="different-container__description">
                    <h2>What’s different about Manage?</h2>
                    <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                </div>
                <div className="different-container__list">
                    <ol>
                        <li>
                        <div className="list-heading-container">
                            <div className="list-heading">
                            <span>01</span> 
                            <h3>Track company-wide progress</h3>
                            </div>
                        </div>
                        <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                        </li>
                        <li>
                        <div className="list-heading-container">
                            <div className="list-heading">
                            <span>02</span>
                            <h3>Advanced built-in reports</h3>
                            </div>
                        </div>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                        </li>
                        <li>
                        <div className="list-heading-container">
                            <div className="list-heading">
                            <span>03</span>
                            <h3>Everything you need in one place</h3>
                            </div>
                        </div>
                        <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Different

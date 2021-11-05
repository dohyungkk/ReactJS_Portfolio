import React, { Component } from 'react'
import { FlexBox, IconBox, IntroContainer } from '../reusuable/styles';
import Icons from '../reusuable/icons';

class git extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-5"></div>
                        <div className="flex-2 bold" style={{ fontSize: "17px", marginTop: "50px"}}>Links to my work</div>
                        <div className="flex-5"></div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "30px"}}>
                        <div className="flex-2"></div>
                        <div className="flex-4"></div>
                        <div className="flex-6 bold"><a href="https://myavatarfriend2.herokuapp.com/">My Avatar Friend</a></div>
                        <div className="flex-2"></div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "30px"}}>
                        <div className="flex-2"></div>
                        <div className="flex-4"></div>
                        <div className="flex-6 bold"><a onClick={() => window.open('https://dohyungkk-chatapp.netlify.app/')}>ReactJS Chat App</a></div>
                        <div className="flex-2"></div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "30px"}}>
                        <div className="flex-2"></div>
                        <div className="flex-4"></div>
                        <div className="flex-6 bold"><a onClick={() => window.open('https://dohyungkk-chatapp.netlify.app/')}>ReactJS Chat App</a></div>
                        <div className="flex-2"></div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "30px"}}>
                        <div className="flex-2"></div>
                        <div className="flex-4"></div>
                        <div className="flex-6 bold"><a onClick={() => window.open('https://dohyungkk-chatapp.netlify.app/')}>ReactJS Chat App</a></div>
                        <div className="flex-2"></div>
                    </FlexBox>
                    {/* <FlexBox style={{ height: "200px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="react" src={reactImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/canadapostapi">
                                        Canada Post API
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    QR Code Scanner
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/MERN_Memories">
                                        MERN Memories
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    App created with MERN that can upload, update, delete your memories
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/ReactJS_TaskTracker">
                                        Task Tracker
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Task Tracking App using JSON Server
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/ReactJS_Portfolio">
                                        Portfolio
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Github link for this app
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <hr />
                    <FlexBox style={{ height: "200px" }}>
                        <div className="flex-4">
                            <img alt="myself" className="node" src={nodeImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "5px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/canadapostapi">
                                        Canada Post API
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Fetches Canada Post API to get the shipping information
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                            <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/MERN_Memories">
                                        MERN Memories
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    App created with MERN that can upload, update, delete your memories
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                            <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/SlackBotMessage">
                                        Slack Bot Message
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Creates a bot to a channel in Slack to send a message on a daily basis
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                            <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/WeatherApp">
                                        Weather App
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Gets a weather update using API from openweathermap.org
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>

                    <hr />
                    <FlexBox style={{ height: "200px" }}>
                        <div className="flex-4">
                            <img alt="myself" className="python" src={pythonImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/CraigsCrawler">
                                        Craigglist Crawler
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Sorts search result from Craigslist using Python
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/VendingMachine">
                                        Vending Machine
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Receives an order and pays out remaining changes accordingly using Python
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/KanzoSushi">
                                        Kanzo Sushi
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Sushi restaurant webpage written in VueJS
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label3" >
                                    <a href="https://github.com/dohyungkk/myavatarfriend">
                                        MyAvatarFriend
                                        https://myavatarfriend2.herokuapp.com/
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Chatting App written in ExpressJS, and NodeJS for backend
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox> */}

                    <IconBox>
                        <FlexBox>
                            <Icons />
                        </FlexBox>
                    </IconBox>
                </IntroContainer>
            </div>
        )
    }
}


export default git

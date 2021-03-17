import React, { Component } from 'react'
import { FlexBox, IconBox, IntroContainer } from '../reusuable/styles';
import { Icon } from 'semantic-ui-react';
import reactImg from '../../img/react.png';
import nodeImg from '../../img/node.png';
import pythonImg from '../../img/etc.png';

class git extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox style={{ height: "200px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="react" src={reactImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/canadapostapi">
                                        Canada Post API
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    QR Code Scanner
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/MERN_Memories">
                                        MERN Memories
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    App created with MERN that can upload, update, delete your memories
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/ReactJS_TaskTracker">
                                        Task Tracker
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Task Tracking App using JSON Server
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/ReactJS_Portfolio">
                                        Portfolio
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
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
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/canadapostapi">
                                        Canada Post API
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Fetches Canada Post API to get the shipping information
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                            <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/MERN_Memories">
                                        MERN Memories
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    App created with MERN that can upload, update, delete your memories
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                            <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/SlackBotMessage">
                                        Slack Bot Message
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Creates a bot to a channel in Slack to send a message on a daily basis
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                            <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/WeatherApp">
                                        Weather App
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
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
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/CraigsCrawler">
                                        Craigglist Crawler
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Sorts search result from Craigslist using Python
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/VendingMachine">
                                        Vending Machine
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Receives an order and pays out remaining changes accordingly using Python
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/KanzoSushi">
                                        Kanzo Sushi
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Sushi restaurant webpage written in VueJS
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/myavatarfriend">
                                        MyAvatarFriend
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Chatting App written in ExpressJS, and NodeJS for backend
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>

                    <IconBox>
                        <FlexBox>
                            <div className="flex-1"></div>
                            <div className="flex-1"><a href="www.github.com/dohyungkk"><Icon className="myIcon linkedin" name="linkedin" size="big" /></a></div>
                            <div className="flex-1"><a href="www.github.com/dohyungkk"><Icon className="myIcon github" name="github" size="big" /></a></div>
                            <div className="flex-1"><a href="www.github.com/dohyungkk"><Icon className="myIcon google" name="google plus" size="big" /></a></div>
                            <div className="flex-1"><a href="www.github.com/dohyungkk"><Icon className="myIcon facebook" name="facebook" size="big" /></a></div>
                            <div className="flex-1"><a href="www.github.com/dohyungkk"><Icon className="myIcon instagram" name="instagram" size="big" /></a></div>
                            <div className="flex-1"></div>
                        </FlexBox>
                    </IconBox>
                </IntroContainer>
            </div>
        )
    }
}


export default git

import React, { Component } from 'react'
import { FlexBox, IconBox, IntroContainer } from '../reusuable/styles';
import Carousel from "../gallery/Carousel2"
import Icons from '../reusuable/icons';

class node extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <Carousel />
                    {/* <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="node2" src={nodeImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label2" >
                                    <a href="https://github.com/dohyungkk/canadapostapi">
                                        Canada Post API
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Canada Post API was done for DMG Solutions as my graduate year project. Back-end part of this project is to fetch data using Canada Post API to get all the neccessary shipping information such as name, address, date, item, and current location of the parcel.
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <hr />
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
                    <hr />
                    <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="node2" src={nodeImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label2" >
                                    <a href="https://github.com/dohyungkk/MERN_Memories">
                                        MERN Memories
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight" style={{ marginTop: "20px" }}>
                                    MERN Memories is an app that you can use as a journal. You can CRUD your memories. React JS was used for front-end and Node JS was used for back-end.
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <hr />
                    <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="node2" src={nodeImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label2" >
                                    <a href="https://github.com/dohyungkk/SlackBotMessage">
                                        Slack Bot Message
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Slack Bot Message creates a bot to a channel in Slack to send a message on a daily basis. This was made from a request by my teammate that it was hard for him to send a message everyday near EOD, so it was to help out his task by sending automated message.
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <hr />
                    <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="node2" src={nodeImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label2" >
                                    <a href="https://github.com/dohyungkk/WeatherApp">
                                        Weather App
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6 padRight">
                                    Weather App gets a weather update using API from openweathermap.org. This is one of my first Node JS project to help myself to understand request and response.  
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

export default node

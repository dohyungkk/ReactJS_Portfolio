import React, { Component } from 'react'
import { FlexBox, IconBox, IntroContainer } from '../reusuable/styles';
import Icons from '../reusuable/icons';
import reactImg from '../../img/react.png';

class reactJS extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="react2" src={reactImg} />
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
                                    Canada Post API was done for DMG Solutions as my graduate year project. Front-end parts of it are to create a QR Code based on an order number, and also design a front-end web that can read backend data fetched with Node JS.
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <hr />
                    <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="react2" src={reactImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/MERN_Memories">
                                        MERN Memories
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    MERN Memories is an app that you can use as a journal. You can CRUD your memories. React JS was used for front-end and Node JS was used for back-end.
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <hr />
                    <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="react2" src={reactImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/ReactJS_Portfolio">
                                        ReactJS Portfolio
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    This personal portfolio is my first personal website to basically use as a resume. It is one of two projects that I only used React JS.
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <hr />
                    <FlexBox style={{ height: "150px" }}>
                        <div className="flex-4">
                            <br />
                            <img alt="myself" className="react2" src={reactImg} />
                        </div>
                        <div className="flex-6">
                            <FlexBox style={{ marginTop: "20px" }}>
                                <div className="flex-2 label" >
                                    <a href="https://github.com/dohyungkk/ReactJS_TaskTracker">
                                        Task Tracker
                                    </a>
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Task Tracker is to track personal tasks with name, time, and reminder function. You can add or delete tasks, and it stores data in JSON server.    
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
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

export default reactJS;

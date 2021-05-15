import React, { Component } from 'react'
import { FlexBox, IconBox, IntroContainer } from '../reusuable/styles';
import me from '../../img/headshot.png';
import Icons from '../reusuable/icons';

class intro extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-4" style={{ padding: "25px" }}>
                            <img alt="myself" className="me" src={me} />
                        </div>
                        <div className="flex-6" style={{ paddingTop: "30px" }}>
                            <div className="job">
                                FullStack Developer
                            </div>
                            <div className="myName">
                                Kevin Kim
                            </div>
                            <br />
                            <FlexBox>
                                <div className="flex-2 label">
                                    School
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    BCIT
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "30px" }}>
                                <div className="flex-2 label">
                                    Phone
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    604-805-2526
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "30px" }}>
                                <div className="flex-2 label">
                                    Email
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    kdkim7676@gmail.com
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "30px" }}>
                                <div className="flex-2 label">
                                    Current Job
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    QA Analyst
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "30px" }}>
                                <div className="flex-2 label">
                                    Label
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    Data
                                </div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "30px"}}>
                        <div className="flex-3"></div>
                        <div className="flex-2 bold">What I do</div>
                        <div className="flex-6">I am currently working in EA Office to test FIFA Ultimate Game mode <br/>as a Team Lead for Systems & Server QA</div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "30px"}}>
                        <div className="flex-3"></div>
                        <div className="flex-2 bold">What I want to do</div>
                        <div className="flex-6">I am persueing my goal of becoming a developer. I am learning how QA and developers work accordingly in my current job. I am constantly studying and improving my portfolio in order to reach my goal.</div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "30px"}}>
                        <div className="flex-3"></div>
                        <div className="flex-2 bold">What I can to do</div>
                        <div className="flex-6">I am mainly focusing on ReactJS and NodeJS. Since learning coding in BCIT, Javascript interested me the most. I also have working knowledge of other languages such as Python and SQL.</div>
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

export default intro;

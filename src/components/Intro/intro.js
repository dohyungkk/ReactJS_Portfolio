import React, { Component } from 'react'
import { FlexBox, IconBox, IntroContainer } from '../reusuable/styles';
import beard from '../../img/beard.jpeg';
import { Icon } from 'semantic-ui-react';

class intro extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-4" style={{ padding: "25px" }}>
                            <img alt="myself" className="me" src={beard} />
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
                        <div className="flex-6">I am currently working in EA Office to test FIFA Ultimate Game mode</div>
                    </FlexBox>
                    <FlexBox style={{ marginTop: "50px"}}>
                        <div className="flex-3"></div>
                        <div className="flex-2 bold">What I want to do</div>
                        <div className="flex-6">hi</div>
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

export default intro;

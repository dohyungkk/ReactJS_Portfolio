import React, { Component } from 'react'
import styled from 'styled-components';
import { FlexBox } from '../reusuable/styles';
import beard from '../../img/beard.jpeg';
import { Icon } from 'semantic-ui-react';

const IntroContainer = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 40px;
    width: 620px;
    height: 420px;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    .me {
        width: 90%;
        height: 250px;
        margin: 0 auto;
    }
    .job {
        color: #aaa;
        font-size: 18px;
        letter-spacing: 1.5px;
    }
    .myName {
        font-size: 24px;
        font-weight: bold;
        margin-top: 10px;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
        width: 90%;
    }
    .label {
        font-weight: bold;
        text-align: right;
    }
`;

const IconBox = styled.div`
    position: absolute;
    bottom: 0;
    height: 70px;
    background-color: #f5f5dc ;
    width: 100%;
    padding: 20px 0;
    .myIcon {
        cursor: pointer;
        transition: 0.5s;
    }
    .linkedin: hover {
        color: #2464AD !important;
    }
    .github: hover {
        color: #807575 !important;
        height: 50px;
    }
    .google: hover {
        color: #AD2F20 !important;
    }
    .facebook: hover {
        color: #4064AC !important;
    }
    .instagram: hover {
        color: #FF0000 !important;
    }
`;



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
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label">
                                    Phone
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    604-805-2526
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label">
                                    Email
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    kdkim7676@gmail.com
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
                                <div className="flex-2 label">
                                    Current Job
                                </div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">
                                    QA Analyst
                                </div>
                            </FlexBox>
                            <FlexBox style={{ marginTop: "10px" }}>
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

import React, { Component } from 'react'
import { FlexBox, IconBox, IntroContainer } from '../reusuable/styles';
import { Icon } from 'semantic-ui-react';

class git extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        ggg
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

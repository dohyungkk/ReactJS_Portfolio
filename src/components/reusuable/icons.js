import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
import { FlexBox } from '../reusuable/styles';

class icons extends Component {
    render() {
        return (
            <FlexBox className="centre">
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1, left"><a href="https://www.linkedin.com/in/kevin-kim-279645155/"><Icon className="myIcon linkedin" name="linkedin" size="big" /></a></div>
                <div className="flex-1, left"><a href="https://www.github.com/dohyungkk/"><Icon className="myIcon github" name="github" size="big" /></a></div>
                <div className="flex-1, left"><a href="https://www.facebook.com/dohyungkk/"><Icon className="myIcon facebook" name="facebook" size="big" /></a></div>
                <div className="flex-1, left"><a href="https://www.instagram.com/dohyungkk/"><Icon className="myIcon instagram" name="instagram" size="big" /></a></div>
                <div className="flex-1"></div>
            </FlexBox>
        )
    }
    
}

export default icons

import React from 'react';
import styled from 'styled-components';
import MenuButton from './menubutton';

const Menu = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 560px;
    background-color: #efefef;
    height: 120px;
    left: 50%;
    padding: 15px 30px;
    padding-bottom: 10px;
    transform: translateX(-50%);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

class menubar extends React.Component {
    menus = [
        {
            color: 'black',
            text: 'Intro',
            icon: 'user'
        }, 
        {
            color: '#5CD3F3',
            text: 'ReactJS',
            icon: 'react'
        }, 
        {
            color: '#87BF00',
            text: 'NodeJS',
            icon: 'node'
        }, 
        {
            color: 'red',
            text: 'Git',
            icon: 'git'
        }
    ];

    renderMenus = (arr) => {
        return arr.map((a, index) => {
            return <MenuButton showPage={this.props.showPage} index={index} key={index} icon={a.icon} color={a.color} text={a.text} />
        })
    }

    render() {
        return (
            <Menu>
                {this.renderMenus(this.menus)}
                {/* <MenuButton color="black" text="Intro" icon="user"/>
                <MenuButton color="#5CD3F3" text="ReactJS" icon="react"/>
                <MenuButton color="#87BF00" text="NodeJS" icon="node"/>
                <MenuButton color="red" text="Git" icon="git"/> */}
            </Menu>
        )
    }
}

export default menubar;
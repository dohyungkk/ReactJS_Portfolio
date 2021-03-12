import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    .flex-1 {
        flex:1;
    };
    .flex-2 {
        flex:2;
    };
    .flex-3 {
        flex:3;
    };
    .flex-4 {
        flex:4;
    };
    .flex-5 {
        flex:5;
    };
    .flex-6 {
        flex:6;
    };
    .flex-7 {
        flex:7;
    };
    .flex-8 {
        flex:8;
    };
    .flex-9 {
        flex:9;
    };
`;

export const IntroContainer = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 200px;
    width: 800px;
    height: 700px;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    .me {
        width: 100%;
        height: 300px;
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
    .bold {
        font-weight: bold;
    }
`;

export const IconBox = styled.div`
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
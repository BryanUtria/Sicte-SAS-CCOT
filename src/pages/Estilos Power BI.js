import styled from "styled-components";

/*
export const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #23394d; ;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;  

export const MobileIcon = styled.div`
    display: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        fill: #e07924;
        margin: auto 5px;
    }
`;

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    margin: 0 auto;

    p {
        &:nth-child(1){
            font-size: 24px;
            color: #fff;
            margin: auto 8px;
        }

        &:nth-child(2){
            font-size: 17px;
            color: #e07924;
            margin: auto 8px;
        }
    }

    svg{
        fill: #e07924;
        margin-right: 0.5rem;
    }

    @media screen and (max-width: 539px) {
        p {
            &:nth-child(2){
                display: none;
            }
        }
    }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    list-style: none;
    background-color: #0F1D2B;
    position: absolute;
    top: 50px;
    padding: 20px 10px;
    flex-direction: column;
    transition: 0.5s all ease;
    width: 220px;

    @media screen and (max-width: 1300px) {
        left: ${({open})=> open ? "0" : "-100%"};
    }

    @media screen and (min-width: 1301px) {
        left: ${({open})=> open ? "0" : "-100%"};
    }

    @media screen and (min-width: 1301px) {
        .text {
            display: none;
        }
    }
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 131px;
    z-index: 1;
`;

export const DropDownLi = styled.li`

    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;

export const SubMenu = styled(Link)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: #23394d;
    padding: 10px;
    color: #64b2ff;
    font.size: 15px;
    font-family: sans-serif;

    &:hover {
        color: #fff;
        background-color: #e0792a;
        transition: 0.5s all ease;

        div{
            svg{
                fill: #23394d;
            }
        }
    }
`;

export const StyledSubMenu = styled(Link)`
    display: inline-block;
    text-align: left;
    text-decoration: none;
    color: #64b2ff;
    padding: 10px;
    min-width: 131px;
    font.size: 15px;
    font-family: sans-serif;
    &:hover {
        color: #fff;
        background-color: #e0792a;
        transition: 0.5s all ease;

        div{
            svg{
                fill: #23394d;
            }
        }
    }

    font: none;
`;

export const Icon = styled.span`
    padding-right: 10px;
    font-size: 15px;
`;
*/

export const PowerBi = styled.iframe`
    height: 100vh;
    width: 100%;
    padding: 0px 0px 0px 40px; 
`;

export const PowerBiPrivate = styled.iframe`
    height: 100vh;
    width: 100%;
    padding: 0px 0px 0px 40px;
`;
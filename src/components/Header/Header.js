import styled from "styled-components";
import strawberryImage from '../../public/assets/header-image.jpg'

export const Wrapper = styled("div")`
    background-image: url(${strawberryImage});
    display: flex;
    align-items: center;
    background-size: cover;
    padding: 40px;
    color: #FFF;
`

export const Title = styled("h1")`
    font-weight: 600;
    font-size: 3rem;

    & span {
        color: ${props => props.red ? "red" : "#fff"};
    } 
`

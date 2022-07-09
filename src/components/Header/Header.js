import styled from "styled-components";

export const Wrapper = styled("div")`
    align-items: center;
    padding: 100px 0;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    background: url(${props => props.background}), rgba(0, 0, 0, 0.2);
    background-size: cover;
    background-blend-mode: overlay;
`

export const Container = styled("div")`
    width: 100%;
    padding: 0 10px;

    @media (min-width: 768px) {
        padding: 0 20px;
    }
    @media (min-width: 1200px) {
        width: 1140px;
        margin: 0 auto;
    }
`

export const Title = styled("h1")`
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: 1px;

    & span {
        color: ${props => props.highlightedText && "#FD5D5D"};
    } 
`

export const List = styled("ul")`
    padding: 0;
    font-weight: 300;
    list-style: none;

    & li {
        margin-bottom: 5px;
    }

    & li::before {
        content: "\\2713\\0020";
    }
`

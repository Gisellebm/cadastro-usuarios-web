import styled from "styled-components";

export const Button = styled.button`
    border: ${({ theme }) => theme === "primary" ? "none" : "1px solid #fff"};  
    background: ${({ theme }) => 
        theme === "primary" 
            ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)" 
            : "transparent"} ;
    font-size: 1.6rem;
    color: #fff;
    padding: 1.6rem 3.2rem;
    width: fit-content;
    border-radius: 3rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`
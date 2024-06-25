import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;	
    padding: 2rem;
`

export const TopBackground = styled.div`
    background: linear-gradient(to right, #fe7e5d, #7f3841);
    height: 30vh;
    width: 90vw;
    max-width: 80rem;
    border-radius: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-height: 100%;
        max-width: 100%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50rem;
    gap: 2rem;
`

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 3.8rem;
    font-weight: 600;
`
export const ContainerInputs = styled.div`
    display: flex;
    gap: 2rem;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;

    span {
        color: #ef4f45;
        font-weight: 600;
    }
`

export const Input = styled.input`
    border-radius: 1rem;
    border: 1px solid #d2dae2;
    padding: 1.2rem 2rem;
    background-color: #fff;
    outline: none;
    width: 100%;
`

export const Button = styled.button`
    border: none;
    background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
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

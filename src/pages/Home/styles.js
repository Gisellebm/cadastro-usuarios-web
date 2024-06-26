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

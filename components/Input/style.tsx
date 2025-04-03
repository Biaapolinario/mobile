import styled from "styled-components/native";

type Campoprops = {
    erro: boolean
}

export const Campo = styled.TextInput <Campoprops>`
    background-color: #ffff;
    font-size: 18px;
    //margin-bottom: 20px;
    padding:15px;
    border: 2px solid ${({erro} : {erro: boolean}) => erro ? '#ff0000' : '#0d1b2a'};
`
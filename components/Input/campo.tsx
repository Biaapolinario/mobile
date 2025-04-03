import { TextInputProps } from "react-native";
import { Campo } from "./style";
import { useState } from "react";

type MeuCampoDeTexto = TextInputProps & {
    erro: boolean;
}

export default function CampoTexto({ erro ,...rest}: MeuCampoDeTexto){
    return(
        <Campo 
            erro={erro}
            placeholderTextColor ={'#0d1b2a'}
            {...rest}
        />
    )
}
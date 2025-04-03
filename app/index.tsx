//desesvolvendo uma tela de login

import { View } from "react-native"
import styled from "styled-components/native"
import Tiatulo from '../components/Titulo/titulo'
import { useEffect, useState } from "react"
import CampoTexto from "@/components/Input/campo"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login()
{

    const [Email,setEmail] = useState('exemplo@gamil.coma')
    const [EmailError, setEmailError] = useState(false)

    const [senha, setSenha] = useState('@Example123')
    const [SenhaError, setSenhaError] = useState(false)


    const ocultar = () => {
    }
    // Estado inicial é "false", ou seja, a senha está oculta
    const [isocutarVisible, setIsocultrVisible] = useState(false);

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
           setIsocultrVisible(!isocutarVisible);  // Alterna entre true/false
         };

    useEffect(() => {
        
        // Significa que a o texto que a pessoa digitar deve ser um email valido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailRegex.test(Email))
        {
          // Quando a pessoa inserir um email valido, as bordas vermelhas vão sumir
            setEmailError(false)
        }
        else{
            // Se o texto não incluir o caractere @ e tiver menos que 3 carateres
            // sera mostrado o campo como incorreto
            setEmailError(true)
        }
    },[Email])

    useEffect(()=>{
        //  Usando expressão regular para diminuir a quantidade 
        //  de condicionais para testar a senha
        //  Esse Regex testa se a senha:
        //  * Pelo menos 8 caracteres
        //  * Pelo menos uma letra maiúscula
        //  * Pelo menos um número
        //  * Pelo menos um caractere especial (!@#$%^&*)
        
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if(passwordRegex.test(senha))
        {
            setSenhaError(false)
        }
        else
        {
            setSenhaError(true)
        }
    },[senha])

   
        
    return(
    <Tela>
        <Tiatulo texto={"Entrar"} 
                flag={true}    
        />

        <Tiatulo texto={"Bem vindo"}
                flag={false} 
        />

        <View style={{gap: 20}}>

        <View>
                <CampoTexto
                erro={EmailError}
                placeholder="Digite o email..."
               onChangeText={text => setEmail(text)}
                />
                {EmailError ? <TextError>E-mail invalido</TextError> : null}
         </View>
         
         <View>
                <CampoTexto
                erro={SenhaError}
                placeholder="Digite o senha.." 
                secureTextEntry={!isocutarVisible}  // Controla se a senha é visível ou não
                onChangeText={text => setSenha(text)}
               />
          {SenhaError ? <TextError>Senha invalido</TextError> : null}

          {/* Ícone de visibilidade da senha */}
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isocutarVisible ? 'eye-off' : 'eye'}  // Alterna entre 'eye' e 'eye-off'
              size={25}
              color="#000"
            />
          </TouchableOpacity>

         </View>
         
        </View>

        <Acesso>
            <Botao>
                <Entra>Entrar</Entra> 
            </Botao>  
            {/* Pressable é a mesma coisa que um button, so que o Button nao se estilisa por isso usamos Pressable */}

            <Caixa>
                <P>Cadastre-se</P>
                <P>Esqueci a senha</P>
            </Caixa>
        </Acesso>
       
    </Tela>   
    )
};

    const TouchableOpacity = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    top: 15px;
    

`
   const Tela = styled.View` 
        flex: 1;
        padding: 15px;
        display: flex;
        background: #0d1b2a;
   `
  const P = styled.Text`
        color: #ffff;
        padding: 5px;
        margin-Left: 15px;
    
    `
  const Acesso = styled.View`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
   `
  const Input = styled.TextInput` 
        background-Color: #415A77;
        font-Size: 14px;
        text-align:left;
        padding: 15px;
        border-Radius: 8px;
        border:2px solid #f5f5f5;
        margin: 15px;

    `
    const Botao = styled.Pressable` 
        background-Color: #415A77;
        border-Radius:8px;
        border: solid #f5f5f5;
        width: 156px;
        height:50px;
        padding: 15px;
        align-items: center;
        margin-right: 50px;

    `
   const Entra = styled.Text`
        font-Weight: bold;
        font-size: 15px;
        color: #f5f5f5;
        `
    const Caixa = styled.View`
    align-items: 'center';
    `   
   const TextError = styled.Text`
font-size: 16px;
color: #E63946;
`
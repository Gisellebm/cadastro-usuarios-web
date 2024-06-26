import { useRef } from "react"
import api from "../../services/api"
import { Title, Container, Form, ContainerInputs, InputLabel, Input } from "./styles"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function handleRegisterUser() {
    await api.post('/usuarios', {
      name: inputName.current.value, 
      age: parseInt(inputAge.current.value), 
      email: inputEmail.current.value
    })
  
  }

  return (
    <Container>
      <TopBackground/>
      
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>Nome <span>*</span></InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
            </div>

            <div>
              <InputLabel>Idade <span>*</span></InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
            </div>
        </ContainerInputs>

        <div style={{width: "100%"}}>
          <InputLabel>Email <span>*</span></InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={handleRegisterUser} theme="primary" >Cadastrar Usuário</Button>
      </Form>
      <Button type="button">Ver Lista de Usuários</Button>
    </Container>
  )
}

export default Home

import {useState} from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Resumen from './Components/Resumen'
import Resultado from './Components/Resultado'
import Spiner from './Components/Spiner'
import styled from '@emotion/styled'


    const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
    `;

    const CntForm = styled.div`
    background-color: #fff;
    padding: 3rem;
    `;

function App() {

const [resumen, setResumen] = useState({
  cotizacion: 0,
  datos:{
    mrca:'',
    year:'',
    plan:''
  }
})

const [cargar, setCargar] = useState(false)
const { cotizacion, datos } = resumen;
  return (

    <Contenedor>
      <Header
        titulo='Cotizador'
      />
      <CntForm>
            <Form 
            setResumen={setResumen}
            setCargar={setCargar}
            
            />

            {cargar ? <Spiner/> : null }

            <Resumen 
            datos={datos}
            />
            {!cargar ? <Resultado
            cotizacion={cotizacion}
            /> : null}
            
      </CntForm>
    </Contenedor>
   
  )
}

export default App

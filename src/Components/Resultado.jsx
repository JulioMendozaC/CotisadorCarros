import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition  } from 'react-transition-group';

const Mensaje = styled.p`
 
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: #2b2828;

`;


const Result = styled.p`
 
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    position: relative;

`;


const TextoCot = styled.p`
 
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;

`;




const Resultado = ({cotizacion}) => {
       

    return ( 
        (cotizacion ===0) ? <Mensaje>Eligie una marca, Año y Tipo de plan</Mensaje> 
        :
        (
            <Result>
                 <TransitionGroup
                            component="p"
                            className="resultado"
                        >
                            <CSSTransition
                                classNames="resultado"
                                key={cotizacion}
                                timeout={{ enter: 500, exit: 500}}
                            >
                                <TextoCot>El total es: $ {cotizacion}  </TextoCot>
                            </CSSTransition>
                        </TransitionGroup>
            </Result>

        )
     );
}
 
export default Resultado

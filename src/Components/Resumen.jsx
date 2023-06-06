import {Fragment} from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../Helper'


const CntResumen = styled.div`

    padding: 1rem;
    text-align: center;
    background-color: #0099a7;
    color: #fff;
    margin: 1rem
`



const Resumen = ({ datos }) => {

    const {marca, year, plan} = datos;

        if(marca === '' || year === '' || plan === '') return null
    return (  

            <CntResumen>

                <h2>Resumen</h2>
                <ul>
                    <li>Marca:{primerMayuscula(marca)} </li>
                    <li>Plan: {primerMayuscula(plan)} </li>
                    <li>Año: {year}</li>
                </ul>

            </CntResumen>        
        
    );
}
 
export default Resumen;
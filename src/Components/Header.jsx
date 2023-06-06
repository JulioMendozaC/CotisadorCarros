import styled from '@emotion/styled'


const CntHeader =  styled.header`

        background-color: #26C6DA;
        padding: 10px;
        font-weight: bold;
        color: #FFFFFF;
`;

const TexHeader =  styled.h1`

      font-size: 2rem;
      margin: 0;
      font-family: 'Slabo 27px serif';
      text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <CntHeader>
            <TexHeader>{titulo}</TexHeader>
        </CntHeader>
     );
}
 
export default Header;
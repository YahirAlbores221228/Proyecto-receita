
import styled from 'styled-components';
function Label({msn}) {
const StyledLabel =styled.label`
font-size: 1.6rem;
color: #000000;

list-style: none;
padding: 13px;
cursor: pointer;
position: relative;
@media (max-width: 700px){
{
font-size: 20px;
}
}
`;

    return ( 

<StyledLabel>{msn}</StyledLabel>
 );
}

export default Label;
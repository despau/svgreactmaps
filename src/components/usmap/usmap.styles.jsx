import styled from 'styled-components'


export const USMapContainer = styled.div `
   
`;



export const USSVGContainer = styled.svg `
    
    height: ${props => props.height}rem;
    width: ${props => props.width}rem;

    
    path {
        fill: #737373;

        :hover {
            fill: blue;
            cursor: pointer;
        }

        :active {
            fill: green;
        }

        :focus {
            fill: black;
        }
}

    .red {
        fill: red;
    }

    .yellow {
        fill: yellow;
    }

`;


export const svgPathContainer = styled.a `
    color: green;
    background-color: pink;
    :visited {
        background-color: yellow;
    }
`;

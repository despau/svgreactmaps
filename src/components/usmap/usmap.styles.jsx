import styled, {css} from 'styled-components'


export const USMapContainer = styled.div `
    padding: 0;
    margin: 0 auto;
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

`;


export const svgPathContainer = styled.a `
    color: green;
    background-color: pink;
    :visited {
        background-color: yellow;
    }
`;

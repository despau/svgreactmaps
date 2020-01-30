import styled from 'styled-components'


export const USMapContainer = styled.div `
   
`;



export const USSVGContainer = styled.svg `
    
    height: ${props => props.height}rem;
    width: ${props => props.width}rem;

    
    path {
        fill: gray;

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
        fill: lightcoral;
    }

    .yellow {
        /* fill: rgba(200,200,200, .2); */
        fill: black;
    }

`;


export const svgPathContainer = styled.a `
    color: green;
    background-color: pink;
    :visited {
        background-color: yellow;
    }
`;

import styled from 'styled-components'

export const USMapContainer = styled.div `
    padding: 0;
    margin: 0 auto;
`;

export const USSVGContainer = styled.svg `
    baseprofile: tiny;
    stroke: #c3a7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: .1rem;
    height: ${props => props.height}rem;
    width: ${props => props.width}rem;


        path {
            fill: beige;

            :hover {
                fill: blue;
                cursor: pointer;
            }

            :active {
                fill: green;
            }
            
            :selected, visited{
                fill: red;
            }
    }
`;
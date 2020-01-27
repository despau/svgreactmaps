import styled from 'styled-components'

export const MapContainer = styled.div `
//      max-height: 10rem;
//      max-width: 10rem;
//      min-height: 20rem;
//      min-width: 20rem;
//      margin: 20rem;
// `;

export const SVGContainer = styled.svg `
     baseprofile: tiny;
     fill: green;
     stroke: #888;
     stroke-linecap: round;
     stroke-linejoin: round;
     stroke-width: .1rem;
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
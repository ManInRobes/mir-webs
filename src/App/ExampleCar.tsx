import React from 'react';
import './App.css';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import image1 from '../Backroomtestlow1.png';
import image2 from '../BusterSwordCaveV1.png';

let Backroom= (<img src={image1} className="App" alt="logo" />);
let CloudSword= (<img src={image2} className="App" alt="logo" />);

export function Example(props: any)
{
    var items = [
        {
            // Backroom render
            name: "Cycles projects",
            description: "Learning Cycles in Blender",
            image: Backroom
        },
        {
            //Cloud sword render
            name: "Eevee Blender",
            description: "Learning Eevee in Blender",
            image: CloudSword
        },
        {
            name: "Programming",
            description: "Click Clack Click Clack"
        },
        {
            name: "Hardware/Manufacturing",
            description: "Usally models with extra steps"
        },
    ]

    return (
        <Carousel >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props: any)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <p>{props.item.image}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
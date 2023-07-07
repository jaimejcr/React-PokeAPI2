import React from 'react';

export async function Pokelist () {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-form/25/");
    const data = await response.json();
    console.log(data);
}

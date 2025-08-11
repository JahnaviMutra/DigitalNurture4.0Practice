import React from 'react';

const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

export function OddPlayers({ team }) {
    const [first, , third, , fifth] = team;
    return (
        <div>
            <li> First : {first} </li>
            <li> Third : {third} </li>
            <li> Fifth : {fifth}</li>
        </div>
    );
}

export function EvenPlayers({ team }) {
    const [, second, , fourth, , sixth] = team;
    return (
        <div>
            <li> Second : {second} </li>
            <li> Fourth : {fourth} </li>
            <li> Sixth : {sixth}</li>
        </div>
    );
}

const T20Players = ['Hardik Pandya', 'KL Rahul', 'Jasprit Bumrah'];
const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Mayank Agarwal'];

export const IndianPlayersMerged = [...T20Players, ...RanjiTrophyPlayers];

export function ListofindianPlayers({ IndianPlayers }) {
    return (
        <div>
            {IndianPlayers.map((player, index) => (
                <li key={index}> Mr. {player}</li>
            ))}
        </div>
    );
}
import React from "react";
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa'

//un composant stylé (ça veut dire qu'il est stylisé hein? pas qu'il est cool^^), du module styled-components,
//j'ai fais comme cela car ça m'a permis de passer l'img du film dans les props et ainsi la mettre en background
const Image = styled.div`
    width: 100px;
    height: 100px;
    background: url(${props => (props.img)}) center no-repeat;
    background-size: cover;
    border-radius: 5px;
    margin-right: 20px
    `;

//un composant fonctionnel, ou encore appelé composant idiot (ouh qu'il est bête...) car il est sans état, c'est une simple
//fonction qui prend les props en paramètre et retourne le rendu du composant
export default function AdminElement(props) {
        return (
                <li className={'list-group-item d-flex align-items-center mb-2'}>
                    <Image img={props.film.img}/>
                    {props.film.titre}
                    <button className={'btn btn-sm ml-auto'} onClick={() => props.onToggleDeletePopup(props.film)}><FaTrashAlt/></button>
                </li>
        )
}

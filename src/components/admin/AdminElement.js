import React from "react";
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa'

const Image = styled.div`
    width: 100px;
    height: 100px;
    background: url(${props => (props.img)}) center no-repeat;
    background-size: cover;
    border-radius: 5px;
    margin-right: 20px
    `;

export default function AdminElement(props) {
        return (
                <li className={'list-group-item d-flex align-items-center mb-2'}>
                    <Image img={props.film.img}/>
                    {props.film.titre}
                    <button className={'btn btn-sm ml-auto'} onClick={() => props.onToggleDeletePopup(props.film)}><FaTrashAlt/></button>
                </li>
        )
}

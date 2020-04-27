import React from "react";
import Lottie from 'react-lottie';
import * as animationData from '../../lottie/anim.json'

//création d'un composant à état, qui est une class héritant de React.Component
export default function Loading() {

    //options de l'animation lottie
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    //methode obligatoire pour les composants à état, c'est là qu'on va retourner ce qu'on veux afficher: https://fr.reactjs.org/docs/react-component.html#render
    return (
        <div className="animation_bg">
            <div className="animation">
                <Lottie options={defaultOptions}
                        height={400}
                        width={400}
                />
            </div>
        </div>
    )
}

import React from "react";
import Lottie from 'react-lottie';
import * as animationData from '../../lottie/anim.json'

export default function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

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

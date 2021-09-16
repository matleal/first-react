import React from "react";

import logo from '../img/loading.gif';

const Loading = ({ visible }) => {
    return(
        <div>
            {
                visible === true ? <img src={logo} alt="Gif de carregamento" /> : ''
            }
        </div>
    )
}

export default Loading;
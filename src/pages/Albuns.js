import React, { useState, useEffect } from 'react';

import Loading from '../components/Loading';

const Albuns = () => {
    const [isLoading, setIsLoading] = useState([]);
    const [albuns, setAlbuns] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                setAlbuns(data);
                setIsLoading(false);
            })
    }, [])

    return (
        <>
            <Loading show={isLoading} />
            { 
                albuns.map(album => {
                    return(
                        <div>
                            <span>{album.title} - Id: {album.id}</span> 
                        </div>
                    )
                })
            }
        </>
    )
}

export default Albuns;
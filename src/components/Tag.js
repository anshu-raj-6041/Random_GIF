import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState('house');
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function clickHandler() {
        fetchData();
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }

    return (
        <div className='w-full max-w-md mx-auto bg-green-500 rounded-lg border border-black 
                       flex flex-col items-center gap-y-4 p-4 sm:p-6 md:max-w-lg lg:max-w-xl
                       mt-4 sm:mt-6'>

            <h1 className='mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl underline 
                          uppercase font-bold text-center'>
                Random {tag} GIF
            </h1>

            {loading ? (
                <Spinner />
            ) : (
                <img
                    src={gif}
                    className="w-full max-h-[200px] sm:max-h-[250px] md:max-h-[300px] 
                             object-cover rounded-md"
                    alt="Random GIF"
                />
            )}

            <input
                className='w-full text-base sm:text-lg py-2 px-3 rounded-lg 
                          text-center focus:outline-none focus:ring-2 focus:ring-green-300'
                onChange={changeHandler}
                value={tag}
                placeholder="Enter a tag"
            />

            <button
                onClick={clickHandler}
                className='w-full bg-green-200 text-base sm:text-lg py-2 px-4 
                          rounded-lg hover:bg-green-300 transition-colors duration-200
                          mb-2 sm:mb-4'>
                Please Generate
            </button>
        </div>
    );
}

export default Tag;
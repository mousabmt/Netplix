import { useState, useEffect } from "react";
import axios from "axios";

const Watchtrailer = ({ linkProvied }) => {
    console.log(linkProvied);
    useEffect(() => {
        const fetchTrailerLink = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_HOST}/trailers/${linkProvied}`);
                const trailerUrl = res.data; // Assuming res.data contains the YouTube trailer link
                if(!trailerUrl.url){
                    window.open(trailerUrl.url, '_blank'); // Open the trailer in a new tab
                }
            } catch (error) {
                console.error('Error fetching trailer link:', error);
            }
        };

        fetchTrailerLink();
    }, [linkProvied]);

    return null; // or any placeholder if needed
};
export default Watchtrailer;
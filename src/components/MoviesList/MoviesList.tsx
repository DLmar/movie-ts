import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getAllMovies} from "../../store/slices/movies.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import './MoviesList.css'


const MoviesList : FC = () => {

    const {allMovies,moviesPage} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getAllMovies(moviesPage))
    },[moviesPage])



    return (
        <div className={'moviesList'}>
            {allMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}

        </div>


    );
};

export {MoviesList};

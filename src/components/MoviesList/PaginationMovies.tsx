import React, {FC} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useAppDispatch} from "../../hooks/hooks";
import {getMoviesPage} from "../../store/slices/movies.slice";


const PaginationMovies: FC= () => {

    let dispatch = useAppDispatch();

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(getMoviesPage(value))
    };

    return (
        <div>
            <Stack spacing={2}>
                <Pagination count={500} page={page} onChange={handleChange}/>
            </Stack>
        </div>
    );
};

export {PaginationMovies};

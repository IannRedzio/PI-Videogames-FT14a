import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../actions/index";


const useGenres = function() {
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    return genres;
}

export default useGenres;
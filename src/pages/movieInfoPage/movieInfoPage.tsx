import { useParams } from 'react-router-dom';

function MovieInfoPage() {
    const { id } = useParams();

    return <div>{id}</div>;
}

export default MovieInfoPage;

import { useNavigate } from 'react-router-dom';
import fallbackImg from '../../assets/fallback-rated.svg';
import PrimaryButton from '../../shared/UI/buttons/primaryButton/primaryButton';

function RatedPageFallback() {
    const navigate = useNavigate();

    return (
        <div className="fallback ratedPageFallback">
            <img src={fallbackImg} alt="Not found" />
            <div>You haven&#39;t rated any films yet</div>
            <PrimaryButton text="Find movies" click={() => navigate('/movies')} />
        </div>
    );
}

export default RatedPageFallback;

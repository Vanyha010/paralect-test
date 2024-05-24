import fallbackImg from '../../assets/fallback-main.svg';

function MainPageFallback() {
    return (
        <div className=" fallback mainPageFallback">
            <img src={fallbackImg} alt="Not found" />
            <div>We don&#39;t have such movies, look for another one</div>
        </div>
    );
}

export default MainPageFallback;

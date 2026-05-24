import MovieCard from "./MovieCard";

const TrendingCarrusel = () => {
    return (
        <section>
            <h2>Trending Movies</h2>
            <div>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </section>
    );
};

export default TrendingCarrusel
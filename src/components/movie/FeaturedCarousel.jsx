import { useEffect, useState, useRef} from "react"
import {getTrendingMovies} from "../../services/api"
import "../../styles/FeaturedCarousel.css"

const FeaturedCarousel = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)
    const trackRef = useRef(null)

    useEffect(() => {
        const fetchMovies = async() => {
            try{
                setLoading(true)
                setError("")
                const trendingMovies = await getTrendingMovies()
                setMovies(trendingMovies)
            }catch(error) {
                console.error("Error loading featured movies: ",error)
                setError("Something went wrong while loading featured movies")
            }finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, [])
    if(loading) {
        return <p>Loading featured movies</p>
    }
    if(error) {
        return <p>{error}</p>
    }
    const activeMovie = movies[activeIndex]

    const handleScroll = () => {
        const track = trackRef.current
        if (!track) return 
        const trackCenter = track.getBoundingClientRect().left + track.offsetWidth / 2
        const cards = track.querySelectorAll(".featured-card")

        let closestIndex = 0
        let closestDistance = Infinity

        cards.forEach((card, index) => {
            const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2
            const distance = Math.abs(trackCenter - cardCenter)

            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })
        setActiveIndex(closestIndex)
    }


    return (
        <section className="featured-carousel">
            <div className="featured-track" ref={trackRef} onScroll={handleScroll}>
                {movies.map((movie, index) => (
                    <article className={`featured-card ${index === activeIndex ? "active" : ""}`} key={movie.id}
                        onClick={() => setActiveIndex(index)}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} />

                    </article>
                ))}
            </div>
            {activeMovie && (
                <div className="featured-info">
                    <h2>{activeMovie.title}</h2>
                    <p>{activeMovie.vote_average?.toFixed(1)|| "N/A"}</p>
                    <p>{activeMovie.overview || "No overview avalable."}</p>
                </div>
            )}
        </section>
    )
}


export default FeaturedCarousel
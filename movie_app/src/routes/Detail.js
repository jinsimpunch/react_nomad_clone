import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Intel from "../components/Intel"

function Detail() {

    const [loading, setLoading] = useState(true)
    const [intel, setIntel] = useState([])
    const { id } = useParams()

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setIntel(json.data.movie);
        setLoading(false)
    }

    useEffect(() => {
        getMovie();
    }, [])


    return (
        <div >
            {loading ? <h1>"...Loading"</h1> :
                <div>
                    <Intel
                        title={intel.title_long}
                        rating={intel.rating}
                        url={intel.url}
                        image={intel.large_cover_image}
                        genres={intel.genres}
                        des={intel.description_full}
                    />
                </div>
            }
        </div>
    );
}

export default Detail
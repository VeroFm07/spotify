import { useEffect, useState } from 'react'
import { getSongs } from 'services'
import { Item } from 'utils/interfaces'

const Home = () => {
    const [songs, setSongs] = useState<Item[]>()


    useEffect(() => {
        getSongs()
            .then(({ data }) => {
                setSongs(data.albums.items)
            })
            .catch(e => console.log(e, 'ups no cargo '));
    }, [])


    return (
        <>
            {
                songs?.map(({ name, images }, index) => (
                    <div key={index} >
                        <h2>{name}</h2>
                        <img src={images[0].url} alt="imagen" />
                    </div>
                ))
            }
        </>
    )
}

export default Home
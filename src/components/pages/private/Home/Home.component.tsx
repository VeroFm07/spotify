import HomeSection from 'components/molecules/HomeSection/HomeSection'
import { useEffect, useState } from 'react'
import { getSongs, getUser } from 'services'
import { Item } from 'utils/interfaces'
import { User } from 'utils/interfaces/user.interface'

const Home = () => {
    const [songs, setSongs] = useState<Item[]>();
    useEffect(() => {
        getSongs()
            .then(({ data }) => {
                setSongs(data.albums.items)
            })
            .catch(e => console.log(e, 'ups no cargo '));
    }, [])

    // const [user, setUser]= useState<User>();
    // useEffect(() => {
    //     getUser()
    //         .then(({ data }) => {
                
    //         })
    //         .catch(e => console.log(e, 'ups no cargo '));
    // }, [])

    return (
        <>
        <HomeSection/>
            {
                songs?.map(({ name, images, artists}, index) => (
                    <div key={index} >
                        <img src={images[0].url} alt="imagen" />
                        <h2>{name}</h2>
                        <h2>{artists[0].name}</h2>
                    </div>
                ))
            }
           
        </>
    )
}

export default Home
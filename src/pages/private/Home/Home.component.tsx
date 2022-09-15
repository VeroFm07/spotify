import HomeSection from 'components/molecules/HomeSection/HomeSection'
import THome from 'components/templates/THome/THome'
import { useEffect, useState } from 'react'
import { getUser } from 'services'
import { Item } from 'utils/interfaces'
import { User } from 'utils/interfaces/user.interface'

const Home = () => {
    
    const [user, setUser]= useState<User>();
    useEffect(() => {
        getUser()
            .then(({ data }) => {
                console.log(data)
                setUser(data)
                console.log(user)
            })
            .catch(e => console.log(e, 'ups no cargo '));
    }, [])

    return (
        <>
        <p>{user?.display_name}</p>
        <img src={user?.images[0].url} />
        <HomeSection/>
           <THome />
           
        </>
    )
}

export default Home
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {User} = useContext(UserContext)
    if(!User)
        return (
            <>Please Login</>
        )
    return (
        <>Welcome {User.Username}</>
    )
    
}

export default Profile
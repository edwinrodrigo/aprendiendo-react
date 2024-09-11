import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: true
    }
]

/*

            <TwitterFollowCard userName="midudev" initialIsFollowing={isFollowing}>
                Juan Perez
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb" >
                Pablo Hernandez
            </TwitterFollowCard>
*/

export function App (){
    
    const midudev = { isFollowing: true, userName: 'midudev'}
    const pheralb = { isFollowing: false, userName: 'phralb'}
    const [isFollowing, setIsFollowing] = useState(true)
    console.log(" App render with isFollowing: ", isFollowing)

    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing })=> (
                        <TwitterFollowCard 
                                key={userName}
                                userName={userName} 
                                initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}
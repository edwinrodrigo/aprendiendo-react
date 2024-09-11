import { useState } from 'react'

export function TwitterFollowCard ({children, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    console.log('TwitterFollowCard: ', userName)
    console.log('TwitterFollowCard: ', isFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonCassName = isFollowing 
            ? 'tw-followCard-button is-following' 
            : 'tw-followCard-button'


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>

                <img className='tw-followCard-avatar'
                 alt="Avatar"
                 src={`https://unavatar.io/${userName}`}></img>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonCassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
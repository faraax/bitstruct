"use client"

export default function UserList({ profiles, dispatch }) {
    const handleSetProfile = (list) => {
        dispatch({ type: 'SELECTEDPROFILE', payload: list })
    }
    return (
        <>
            {
                profiles.map((list, index) => (
                    <li key={index}
                        className="px-4 py-2 border-b border-mute border-opacity-20 hover:bg-primary hover:bg-opacity-20"
                        onClick={() => handleSetProfile(list)}
                    >
                        {list.profile_name}
                    </li>
                ))
            }
        </>
    )
}

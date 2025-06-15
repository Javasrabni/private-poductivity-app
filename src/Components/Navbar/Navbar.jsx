import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// User data
import { useGetAllUserData } from '../../Context/GetAllUserData/getAllUserData'

const Navbar = () => {
    const navigate = useNavigate()
    // Get user data
    const GetAllUserData = useGetAllUserData()

    // Style
    const [listHovered, setListHovered] = useState(null)
    const NavbarStyle = {
        // position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '2',
        // top: '0px',
        // left: '0px',
        height: '56px',
        width: '100%',
        backgroundColor: 'var(--baseColor)',
        padding: '0px 56px',
        boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F",
    }
    const logoStyle = {
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: '600',
        color: '#242524FF',
        cursor: 'pointer',
    }
    const InputNprofileContainer = {
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'center',

    }
    const SearchInputStyle = {
        borderRadius: '6px',
        minWidth: '250px',
        height: '36px',
        border: '1px solid var(--border)',
        outline: 'none',
        padding: '0px 0px 0px 12px',
        color: '(var--second-base-font-color)',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '22px'
    }

    // Style 
    const SuggestionContainer = {
        zIndex: '3',
        position: 'absolute',
        top: '46px',
        right: '104px',
        width: '250px',
        height: 'fit-content',
        backgroundColor: 'var(--baseColor)',
        border: '1px solid var(--border)',
        // padding: '12px',

        flexDirection: 'column',
        // gap: '16px',
        fontSize: '14px'
    }

    // Filtering user data
    const [suggestion, setSuggestion] = useState([])
    const HandleSearchUser = (value) => {
        const inputValue = value.target.value
        const filteringData = GetAllUserData.filter(item =>
            item.username.toLowerCase().includes(inputValue)
        )
        // Delay output
        setTimeout(() => {
            setSuggestion(inputValue ? filteringData : [])
        }, 300)
    }

    return (
        <>
            <div style={{ ...NavbarStyle }}>
                <h1 style={{ ...logoStyle }} onClick={() => navigate('/')}>Olintser</h1>
                <div style={{ ...InputNprofileContainer }}>
                    {/* Search user */}
                    <div>
                        <input type="text" style={{ ...SearchInputStyle }} placeholder='Search people in olintser' onChange={(e) => HandleSearchUser(e)} />
                    </div>
                    {/* Profile */}
                    <span style={{ width: '32px', height: '32px', borderRadius: '20px', backgroundColor: 'var(--blue-accent)', flexShrink: 0 }}>
                    </span>
                </div>
            </div>

            {/* ABSOLUTE POSITION */}
            <div style={{ ...SuggestionContainer, display: suggestion.length === 0 ? 'none' : 'flex' }}>
                {suggestion.map((item, idx) => (
                    <div key={idx}>
                        <ul style={{ listStyle: "none" }}>
                            <li style={{ backgroundColor: listHovered === idx ? 'var(--second-baseColor)' : '#fff', width: '100%', height: '100%', padding: '12px', cursor: 'pointer' }} onMouseOver={() => setListHovered(idx)} onMouseLeave={() => setListHovered(null)}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {/* Photo profile */}
                                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--blue-accent)', borderRadius: '20px' }}></div>
                                    {/* User data */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        <p>{item.username}</p>
                                        <p style={{ color: 'var(--second-base-font-color)' }}>{item.email}</p>
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Navbar

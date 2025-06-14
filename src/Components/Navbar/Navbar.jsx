import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    // Style
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
    return (
        <div style={{ ...NavbarStyle }}>
            <h1 style={{ ...logoStyle }} onClick={() => navigate('/')}>Olintser</h1>
            <span style={{ width: '32px', height: '32px', borderRadius: '20px', backgroundColor: 'red', flexShrink: 0 }}>
            </span>
        </div>
    )
}

export default Navbar

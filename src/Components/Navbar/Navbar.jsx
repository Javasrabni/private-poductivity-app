import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// User data
import { useGetAllUserData } from '../../Context/GetAllUserData/getAllUserData'
import { useGetUserDP } from '../../Context/UserProfileData/getUserProfileData'

import ViewUserProfilePanel from './ViewUserProfile/ViewUserProfilePanel'
import Notifications from './Notifications/Notifications'
import { useGetUserNotif } from '../../Context/GetAllUserNotifications/GetNotifContext'

const Navbar = () => {
    const navigate = useNavigate()
    // Get user data
    const GetAllUserData = useGetAllUserData()
    const userDatas = useGetUserDP()

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
        marginRight: '32px'
    }
    const InputNprofileContainer = {
        width: 'fit-content',
        height: '100%',
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
        fontSize: '14px',
        borderRadius: '8px',
        // boxShadow   : '0px 12px 18px rgba(23, 26, 31, 0.06), 0px 0px 12px #171a1f1F',
    }
    // Profile click
    const [onClickProfile, setOnClickProfile] = useState(false)
    const OnClickProfileContainer = {
        position: 'absolute',
        top: '56px',
        right: '0px',
        transform: onClickProfile ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        width: '384px',
        height: '100vh',
        // backgroundColor: 'var(--second-baseColor)',
        backgroundColor: '#fff',
    }

    // Filtering user data
    const [suggestion, setSuggestion] = useState([])
    const [searchUservalue, setSearchUserValue] = useState('')
    const HandleSearchUser = (value) => {
        const inputValue = value.target.value
        setSearchUserValue(inputValue)
        const filteringData = GetAllUserData.filter(item =>
            item.username.toLowerCase().includes(inputValue)
        )
        // Delay output
        setTimeout(() => {
            setSuggestion(inputValue ? filteringData : [])
        }, 300)
    }
    const [getUserDataClick, setGetUserDataClick] = useState({
        user_id: null,
        username: null,
        email: null,
        photoProfile: null,
        createdAt: null,
        connectedByCount: 0
    })
    function HandleClickedUserData(user_id, username, email, photoProfile, createdAt, connectedByCount) {
        if (ProfilePanelTab.current) {
            ProfilePanelTab.current.focus({ preventScroll: true })
        }
        setGetUserDataClick({
            user_id: user_id,
            username: username,
            email: email,
            photoProfile: photoProfile,
            createdAt: createdAt,
            connectedByCount: connectedByCount
        })
    }

    const ProfilePanelTab = useRef()

    // Notification
    const NotifIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1} stroke="var(--second-base-font-color)" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>

    const redDotNotifStyle = {
        fontSize: '11px',
        color: 'white',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '-4px',
        right: '-4px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: 'tomato'
    }

    const [onClickNotification, setOnClickNotification] = useState(false)
    const { getUserNotif } = useGetUserNotif()
    const countNotif = getUserNotif.filter(n => !n.is_read).length
    const [isRead, setIsRead] = useState(false)

    useEffect(() => {
        const unread = getUserNotif.some(n => !n.is_read)
        setIsRead(unread)
    }, [getUserNotif])

    const [NotifMouseOver, setNotifMouseOver] = useState(false)
    const NotifContainer = {
        position: 'relative',
        width: 'fit-content',
        height: '36px',
        border: '1px solid var(--border)',
        padding: '6px 4px 4px 8px',
        borderRadius: '6px',
        cursor: 'pointer',
        backgroundColor: NotifMouseOver || onClickNotification ? 'var(--second-baseColor)' : '#fff'
    }

    // Update is_read into db
    const updateUnReadNotif = async () => {
        try {
            await fetch(`${process.env.REACT_APP_POST_USER_NOTIFICATIONS_STATUS_READ}`, {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify({
                })
            })
        } catch (err) {
            console.error(err)
        }
    }

    function HandleClickNotif() {
        setTimeout(() => {
            setOnClickNotification(prev => !prev)
            setIsRead(false)
        }, 50)

        // Update is_read into db
        updateUnReadNotif()
    }

    return (
        <>
            <div style={{ ...NavbarStyle }}>
                <h1 style={{ ...logoStyle }} onClick={() => navigate('/')}>Olintser</h1>
                <div style={{ ...InputNprofileContainer }}>
                    {/* Search user */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        {/* Notification */}
                        <div tabIndex={0} style={{ ...NotifContainer }} onMouseOver={() => setNotifMouseOver(true)} onMouseLeave={() => setNotifMouseOver(false)} onClick={HandleClickNotif}>
                            <div style={{ width: '24px' }}>{NotifIcon}</div>
                            {isRead && (
                                <span style={{ ...redDotNotifStyle }}>{countNotif}</span>
                            )}
                        </div>

                        <input type="text" style={{ ...SearchInputStyle }} placeholder='Search people in olintser' value={searchUservalue} onChange={(e) => HandleSearchUser(e)} onBlur={() => { setSearchUserValue(''); setTimeout(() => { setSuggestion([]) }, 100); }} />
                    </div>
                    {/* Profile */}
                    <div tabIndex={0} style={{ width: '32px', height: '32px', borderRadius: '20px', backgroundColor: 'var(--blue-accent)', flexShrink: 0, cursor: 'pointer' }} onClick={() => { setOnClickProfile(true); HandleClickedUserData(userDatas.user_id, userDatas.username, userDatas.email, userDatas.pictures) }} onFocus={() => setOnClickProfile(true)} onBlur={() => setOnClickProfile(false)}>
                        <img src={userDatas.pictures} loading='lazy' width={'100%'} draggable={false} style={{ borderRadius: '100%' }} alt="picture" />
                    </div>
                </div>
            </div >

            {/* ABSOLUTE POSITION */}

            {/* SUGGESTION SEARCH BAR */}
            <div style={{ ...SuggestionContainer, display: suggestion.length === 0 ? 'none' : 'flex' }}>
                {suggestion.map((item, idx) => (
                    <div key={idx}>
                        <ul style={{ listStyle: "none" }}>
                            <li style={{ backgroundColor: listHovered === idx ? 'var(--second-baseColor)' : '#fff', width: '100%', height: '100%', padding: '12px', cursor: 'pointer', borderRadius: '8px' }} onMouseOver={() => setListHovered(idx)} onMouseLeave={() => setListHovered(null)} onClick={() => HandleClickedUserData(item.user_id, item.username, item.email, item.pictures, item.createdAt, item.connectedByCount)}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {/* Photo profile */}
                                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--blue-accent)', borderRadius: '20px' }}>
                                        <img src={item.pictures} width={'100%'} style={{ borderRadius: '100%' }} alt="Pictures" />
                                    </div>
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
            </div >

            {/* POPUP PROFILE */}
            <div style={{ ...OnClickProfileContainer }
            } tabIndex={0} onFocus={() => setOnClickProfile(true)} onBlur={() => setOnClickProfile(false)} ref={ProfilePanelTab} >
                <ViewUserProfilePanel userId={getUserDataClick.user_id} username={getUserDataClick.username} email={getUserDataClick.email} photoProfile={getUserDataClick.photoProfile} createdAt={getUserDataClick.createdAt} connectedByCount={getUserDataClick.connectedByCount} />
            </div >

            {/* POPUP NOTIFICATION */}
            <Notifications onClickNotifBtn={onClickNotification} />
        </>
    )
}

export default Navbar

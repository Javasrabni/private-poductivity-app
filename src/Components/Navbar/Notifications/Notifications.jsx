import React from 'react'

import { useGetUserNotif } from '../../../Context/GetAllUserNotifications/GetNotifContext'
import { useGetUserDP } from '../../../Context/UserProfileData/getUserProfileData'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/en'

dayjs.extend(relativeTime)
dayjs.locale('en')

const Notifications = ({ onClickNotifBtn }) => {
    // Get user data
    const { user_id } = useGetUserDP()

    // Get user notif
    const { getUserNotif } = useGetUserNotif()
    console.log(getUserNotif)

    const NotifContainer = {
        position: 'absolute',
        top: '56px',
        right: '0px',
        transform: onClickNotifBtn ? 'translateX(0)' : 'translateX(100%)',
        border: '1px solid var(--border)',
        transition: 'transform 0.3s ease',
        // width: '384px',
        width: '300px',
        height: '100vh',
        padding: '24px',
        // backgroundColor: 'var(--second-baseColor)',
        backgroundColor: '#fff',
        // boxShadow   : '0px 12px 18px rgba(23, 26, 31, 0.06), 0px 0px 12px #171a1f1F',
    }

    const headingNotif = {
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: 'inter',
        paddingBottom: '4px'
    }
    const dateNotif = {
        fontSize: '14px',
        color: 'var(--second-base-font-color)'
    }

    return (
        <div style={{ ...NotifContainer }}>
            <p style={{ fontWeight: 600, fontFamily: 'Archivo', paddingBottom: '24px', fontSize: '14px' }}>Notifications</p>
            {getUserNotif.length > 0 ? (
                <div>
                    {getUserNotif.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '100%', backgroundColor: 'var(--blue-accent)' }}></div>
                                </div>
                                <div>
                                    <p style={{ ...headingNotif }}>{item.message}</p>
                                    <p style={{ ...dateNotif }}>{dayjs(item.createdAt).isAfter(dayjs().subtract(7, 'day')) ?
                                        dayjs(item.createdAt).fromNow() : dayjs(item.createdAt).format('DD MMMM YYYY')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p>0 Notification</p>
                </div>
            )}
        </div>
    )
}

export default Notifications

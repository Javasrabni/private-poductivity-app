export const CheckAuth = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_USER_AUTH_STAT}`, {
            credentials: 'include',
        })
        if (!response.ok) {
            throw new Error('Not Authenticate')
        }

        const data = await response.json()
        return {
            isAuthenticated: data.isAuthenticated,
            user: data.user
        }
    } catch (error) {
        return {
            isAuthenticated: false,
            message: error.message
        }
    }
}
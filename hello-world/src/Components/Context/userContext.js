import React from 'react'

const UserContext = React.createContext('Guest')

const UsernameProvider = UserContext.Provider
const UsernameConsumer = UserContext.Consumer

export { UsernameProvider, UsernameConsumer }
export default UserContext
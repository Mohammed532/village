/* eslint-disable no-unused-expressions */

import React from 'react'

const UserContext = React.createContext(null);

const userWrapper = Component => props => {
    <UserContext.Consumer>
        {({userInfo, updateInfo}) => (<Component {...props} userInfo={userInfo} updateInfo={updateInfo} />)}
    </UserContext.Consumer>
}

export default UserContext
export { userWrapper }
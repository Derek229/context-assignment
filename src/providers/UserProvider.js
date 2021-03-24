import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends React.Component {
  state ={
    firstName: 'john',
    lastName: 'doe',
    email: 'test@test.email',
    updateUser: (user) => this.updateUser(user)
  }

  updateUser = (user) =>{
    console.log(user)
    this.setState({
        ...user
    })
}

  render() {
    return(
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
export default UserProvider
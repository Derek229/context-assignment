import React from 'react'
import { Form, } from 'semantic-ui-react'
import {UserConsumer} from '../providers/UserProvider'

class UserForm extends React.Component{
 state={ firstName: this.props.firstName, lastName: this.props.lastName, email: this.props.email, }

 handleChange = (e, {name, value}) => this.setState({[name]:value,})

 handleSubmit= (e) => {
  this.props.updateUser({...this.state})
 }
  
 render() {
  console.log(this.props)
  return (
    <>
      <h1>{this.props.header}</h1>
      <Form onSubmit={this.handleSubmit}>
          <Form.Input
              label='first name'
              value={this.state.firstName}
              type='text'
              name='firstName'
              onChange={this.handleChange}
          />
          <Form.Input
              label='last name'
              value={this.state.lastName}
              type='text'
              name='lastName'
              onChange={this.handleChange}
          />
          <Form.Input
              label='New email'
              value={this.state.email}
              type='text'
              name='email'
              onChange={this.handleChange}
          />
          <Form.Button color='green'>save</Form.Button>
          </Form>
          </>
          )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm
        {...props }
        firstName={value.firstName}
        lastName={value.lastName}
        email={value.email}
        updateUser={value.updateUser}/>
        )}
    </UserConsumer>
  )
}
export default ConnectedUserForm

import React, { useContext } from 'react'
import { Card } from 'semantic-ui-react'
import { UserConsumer} from '../providers/UserProvider'

const User =()=> (
<UserConsumer>
  { value => (
      <Card>
          <Card.Content>
          <Card.Header>{value.firstName}</Card.Header>
          <Card.Meta> 
           <h2>{value.lastName}</h2>
          </Card.Meta>
          <Card.Meta> 
            {value.email}
          </Card.Meta>
          </Card.Content>
      </Card>
  )}
  </UserConsumer>
      
      )
  
    

export default User

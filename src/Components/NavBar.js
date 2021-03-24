import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { UserConsumer,} from '../providers/UserProvider'
import UserProfile from "./UserProfile";

const NavBar = () => (
  <UserConsumer>
    {value => (
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="./user/profile">
      <Menu.Item>
        user profile
      </Menu.Item>
    </NavLink>
  </Menu> 
    )}
    </UserConsumer>
)

export default NavBar
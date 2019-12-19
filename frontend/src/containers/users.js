import React, { Component } from 'react';
import List from '@material-ui/core/List';

import axios from 'axios'

import Users from '../components/users/users'

const API_BASE_URL = process.env.REACT_APP_API_BASEURL + '/api'
console.log(process.env)
class Users extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        users: []
      }
    }
/*
    componentDidMount() {
      axios.get(API_BASE_URL + '/users').then((result) => {
        this.setState({students: result.data.results})
      })
    }

    render() {
      return (
        <div>
        <h1>Studenți</h1>
        <List>
          {this.state.students.map((student) => <Student key={student.id} profile={student} />)}
        </List>
        </div>
      )
    }
  */
    
}

export default Users
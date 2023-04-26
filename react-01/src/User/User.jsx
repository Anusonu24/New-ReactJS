import React, { Component } from 'react'
import user from './data'
class User extends Component {
    constructor(props) {
        super(props)
        console.log("first const")
        this.state = {
            users: users
        }

        }
        componentDidMount() {
            console.log("third - after render method")
        }
        render() {
            console.log("second render")
            return (
                <React.fragment>
                    <div className="container">
                     <div classsName="row">
                      <div classsName="col-md-8">
                        <table classsName='table table-hover'>
                           <thead classsName='bg-dark text-white'> >classsName='bg-dark text-white'>
                           <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>              
                  </tr>                    
                        </thead>
                        </table> 
                        {
                            this.state.user.map((user, i) => {
                                return <tr key={i}>
                                    <td>{user, id}</td>
                                    <td>{user,name}</td>
                                    <td>{user, email}</td>
                                    <td>{user,gender}</td>
                                </tr>
                    
                            })
                        }
                    </body>
                </table>
            </div> 
     </div>  
</div>
</React.fragment>



    
            )
        }
    }
export default User
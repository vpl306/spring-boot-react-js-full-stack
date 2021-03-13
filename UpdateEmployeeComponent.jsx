  import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstnamne: '',
            lastname: '',
            emailID: '',
            telephone: '',
        }
        this.changefirstnamneHandler = this.changefirstnamneHandler.bind(this);
        this.changelastnameHandler = this.changelastnameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstnamne: employee.firstnamne,
                    lastname: employee.lastname,
                    emailID : employee.emailID,
                    telephone : employee.telephone
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstnamne: this.state.firstnamne, lastname: this.state.lastname, emailID: this.state.emailID, telephone: this.state.telephone};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changefirstnamneHandler= (event) => {
        this.setState({firstnamne: event.target.value});
    }

    changelastnameHandler= (event) => {
        this.setState({lastname: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailID: event.target.value});
    }
    changephoneHandler= (event) => {
        this.setState({telephone: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){ return <h3 className="text-center">Add Employee</h3>
    }else{
        return <h3 className="text-center">Update Employee</h3>
    }
}
render() {
    return (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstnamne" className="form-control" 
                                            value={this.state.firstnamne} onChange={this.changefirstnamneHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastname" className="form-control" 
                                            value={this.state.lastname} onChange={this.changelastnameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailID" className="form-control" 
                                            value={this.state.emailID} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Contact No: </label>
                                        <input placeholder="Phone Number" name="telephone" className="form-control" 
                                            value={this.state.telephone} onChange={this.changephoneHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    )
}
}

export default CreateEmployeeComponent
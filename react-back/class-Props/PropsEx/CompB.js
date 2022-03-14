import React from 'react'
class CompB extends React.Component {
    render() {
        return <>
            <h3>Component B</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>Wish Messaage:  {this.props.one}</h2>
            <h4>Employee Name: {this.props.emp_Name}</h4>
            <h5>Employee Salary:{this.props.e_sal}</h5>
        </>
    }
}
export default CompB
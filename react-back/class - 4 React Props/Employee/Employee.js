import React from 'react'
class Employee extends React.Component {
    render() {
        return <>
            <h3>Employee Compoent</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>Employee Name:{this.props.user_Data[0].name}</h4>
            <h4>Employee Name:{this.props.user_Data[1].name}</h4>

        </>
    }
}
export default Employee
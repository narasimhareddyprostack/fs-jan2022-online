import React from 'react'
import CompB from './CompB'
class CompA extends React.Component {
    eid = 101;
    ename = "Rahul Gandhi";
    render() {
        return <div>
            <h2>Component A</h2>
            <CompB one={"GM"} two={"GE"} />
        </div>
    }
}

export default CompA;
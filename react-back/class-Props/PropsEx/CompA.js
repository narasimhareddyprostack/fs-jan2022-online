import CompB from './CompB'
let CompA = () => {
    let ename = "Rahul Gandhi"
    let salary = 45000;
    return <>
        <h1>Component A</h1>
        <hr />
        {/* <CompB one={"GM"} emp_Name={ename} e_sal={salary} /> */}
        <CompB movie={"RRR"} />
    </>
}

export default CompA
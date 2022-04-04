//Action Types 
const INCR = "INCR";
const DECR = "DECR"
//Redux Actions
let incrAction = () => {
    console.log("First")
    return { type: INCR }
}
let decrAction = () => {
    return { type: DECR }
}
export { INCR, DECR, incrAction, decrAction }
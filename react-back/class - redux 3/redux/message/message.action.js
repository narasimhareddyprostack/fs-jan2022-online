//action types 
const GM = "GM"
const GN = "GN"
//actions
let gmAction = () => {
    console.log("Test gmAction")
    //invoking the api - data
    return { type: GM, payload: "Hello -100 RS" }
}
let gnAction = () => {
    console.log("Test gnAction ")
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }
//What is action?
//action is function, it return actionable objects
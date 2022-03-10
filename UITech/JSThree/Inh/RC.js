class Component {
    constructor() {
        console.log("Component Class Const")
    }
    render() { }
}

class Message extends Component {
    constructor() {
        super()
        console.log("Message Class Const")
    }
}
let m1 = new Message();
class Parent {
    assets = '10 CR';
    get_Qualities() {
        console.log("Parent has Good Qualities");
    }
}
class Child extends Parent { }
//console.log(new Child().get_Qualities());

let c1 = new Child();
console.log(c1.assets);
c1.get_Qualities()
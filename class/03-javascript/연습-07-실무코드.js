Math.floor(Math.random() * 1000000)
//455566
String(Math.floor(Math.random() * 1000000))
//'815335'
String(Math.floor(Math.random() * 1000000))
//'44494' 5자리
String(Math.floor(Math.random() * 1000000)).padStart(6, 0)
// '088995'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '047685'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '185234'
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
// token
// '782108'
const hello =()=> {
    String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
}
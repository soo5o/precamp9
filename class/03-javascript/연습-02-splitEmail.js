const email = "codecamp@gmail.com"
//undefined
email
'//codecamp@gmail.com'
email.split("@")
//(2) ['codecamp', 'gmail.com']
email.split("@")[0]
//'codecamp'
const front = email.split("@")[0]
//undefined
const back = email.split("@")[1]
//undefined
front
//'codecamp'
back
//'gmail.com'
front[-1]
// undefined
const newFront = []
// undefined
//newFront.push(front[0:3])
// VM1282:1 Uncaught SyntaxError: Unexpected token ':'
newFront.push(front[0])
// 1
newFront.push(front[1])
// 2
newFront.push(front[2])
// 3
newFront.push(front[3])
// 4
newFront
// (4) ['c', 'o', 'd', 'e']
newFront.push("*")
// 5
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
newFront.join
// ƒ join() { [native code] }
newFront.join()
// 'c,o,d,e,*,*,*,*'
//
//newFront.join(@)
// VM1478:1 Uncaught SyntaxError: Invalid or unexpected token
newFront.join("")
// 'code****'
newFront + "@" + back
// 'c,o,d,e,*,*,*,*@gmail.com'
newFront.join("") + "@" + back
// 'code****@gmail.com'
const result = newFront.join("") + "@" + back
// undefined
result
// 'code****@gmail.com'
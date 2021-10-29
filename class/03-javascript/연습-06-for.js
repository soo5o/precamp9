for(let i=0;i<3;i=i+1){
    console.log("Hello")
}
//3 Hello
for(let i=0;i<3;i+=1){
    console.log("Hello")
}
//3 Hello
const classmates = ["철수", "유리", "훈이"]
// undefined
for(let i=0 ; i<classmates.length ; i+=1){
    console.log(classmates[i] + "와 짱구")
}
// VM2419:2 철수와 짱구
// VM2419:2 유리와 짱구
// VM2419:2 훈이와 짱구
// undefined
const classmates2 = [
    {name: "철수", age: 10, school: "다람쥐초등학교"},
    {name: "영희", age: 11, school: "공룡초등학교"}
]
// undefined
classmates2[0].school
// '다람쥐초등학교'
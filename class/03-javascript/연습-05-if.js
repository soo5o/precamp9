if(1+1===2){
    console.log("correct")


} else{
    console.log("false")
}
// correct
// undefined
if(true){
    console.log("true")
} else{
    console.log("false")
}
// true
// undefined
if(1+1===3){
    console.log("true")
} else{
    console.log("false")
}
// false
// undefined
let age = 13
// undefined
if(age >= 20){
    console.log("성인입니다.")
} else if(age>=8){
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}
// 학생입니다.
// undefined
const profile = {
    name: "철수", age: 7, school: "해바라기유치원"
}
// 객체 만들 때 ',' 꼭 해주기
// undefined
if(profile.age <= 7){
    console.log(profile.name)
}
// 철수
const profile={
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
//undefined
if(profile.age >= 20){
    console.log("성인입니다.")
} else if(profile.age >= 8){
    console.log("학생입니다.")
} else{
    console.log("어린이입니다.")
}
//학생입니다.
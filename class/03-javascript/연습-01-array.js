const classmates = ["철수", "유리", "훈이"]
//undefined
classmates
//(3) ['철수', '유리', '훈이']
classmates[0]
//'철수'
classmates.length
//3
classmates.includes("훈이")
//true
classmates.includes("맹구")
//false
classmates.push("맹구")
//4
classmates
//(4) ['철수', '유리', '훈이', '맹구']
classmates.includes("맹구")
//true
classmates.pop()
//'맹구'
classmates.length
//3
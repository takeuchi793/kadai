const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'



//str1 のパース結果
try {
    console.log(JSON.parse(str1))
} catch (error) {
    comsole.log(error)
}
//abcという文字列は正しい JSON ではないから
//正しくは　"abc"

str2 のパース結果
try {
    console.log(JSON.parse(str2))
} catch (error) {
    console.log(error)
}
//'abc' という文字列は正しい JSON ではないから
//正しくは　"abc"

//str3 のパース結果
try {
    console.log(JSON.parse(str3))
} catch (error) {
    comsole.log(error)
}
//"abc" は正しい　JSON　なのでパースできる

//str4 のパース結果
try {
    console.log(JSON.parse(str4))
} catch (error) {
    console.log(error)
}
//undefined という文字列は正しい JSON ではないから

//str5 パース結果
try {
    console.log(JSON.parse(str5))
} catch (error) {
    comsole.log(error)
}
//"a" という文字列は正しい JSON なのパースできる

str6 パース結果
try {
    console.log(JSON.parse(str6))
} catch (error) {
    console.log(error)
}
//a という文字列は正しい JSON ではないから
//正しくは　"a"
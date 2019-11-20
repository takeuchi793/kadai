const profile = {
    firstName:'Leo',
    familyName:'Tsukinaga',
    hobby: 'Music',
    job:'idol'
};

const keys = Object.keys(profile);

//普通のループを使う

for (let i = 0; i < keys.length; i = i + 1){
    const key = keys[i];
    const value = profile[key];

    const text = "私の" + key + "は、" + value + "です。"　
    console.log (text)
}

// ofのキーワードでより簡単にループをかく
for (let key of keys) {
    const value = profile [key];
    const text = 　"私の" + key + "は" + value + "です。"
    console.log(text);
}
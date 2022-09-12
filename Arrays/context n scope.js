// context vs scope

function a() {
    console.log(this);
}
a();

const obj4 = {
    a: function(){
        console.log(this);
    }
}

obj4.a();


switch (IOTA.mess) {
    case "init":{
        sayHello();
        break;
    }
    case "lock":{
        out = [
            ":cls",
            "Ok, tài khoản đã khóa!"
        ];
        break;
    }
}

function sayHello (){
    out = [
        ":title,Quản lý thẻ",
        `Xin chào ${IOTA.user}!`,
        `=> Khóa tài khoản iota://lock`,
        ":input,none"
    ];
}

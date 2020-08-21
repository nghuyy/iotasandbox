switch (IOTA.mess) {
    case "init":{
        out = [
            ":title,Ví dụ lấy số điện thoại",
            `Xin chào ${IOTA.user}. Nhập số điện thoại con bạn đi !`,
            `:input,number`
        ];
        break;
    }
    default :{
        let  vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if(vnf_regex.test(IOTA.mess) !== false) {
            out = [
                ":cls",
                `Số điện thoại ${IOTA.mess} là đúng chuẩn!`
            ];
        }else{
            out = [
                ":cls",
                `Số điện thoại ${IOTA.mess} không đúng chuẩn!`
            ];
        }
        break;
    }
}
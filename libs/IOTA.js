/**
 *  Dữ liệu đầu vào của IOTA
 * @type {{mess: {}, user: string, phone_act: boolean}}
 */
IOTA  = {
    //Tên người dùng
    user: "",
    // Trạng thái kích hoạt sdt IOTA
    phone_act:true,
    //Dữ liệu truyền lên từ địa chỉ trình duyệt hoặc người dùng nhập vào
    mess: {}
};
/***
 *  Gởi một đoạn tin nhắn đến kênh Telegram đã link với hệ thống
 * @param msg Nội dung
 */

TelegramSend = (msg)=>{};


uniqid = length =>{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

dePrinterCode = (code)=>{
    stringin = stringin.replace(/\[s3\]/g, '');
    stringin = stringin.replace(/\[s2\]/g, '');
    stringin = stringin.replace(/\[s1\]/g, '');
    stringin = stringin.replace(/\[s0\]/g, '');
    stringin = stringin.replace(/\[ac\]/g, '');
    stringin = stringin.replace(/\[al\]/g, '');
    stringin = stringin.replace(/\[ar\]/g, '');
    return stringin;
};
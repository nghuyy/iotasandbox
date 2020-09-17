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
postTChanel = (msg)=>{};
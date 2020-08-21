web.get("https://google.com.vn")
    .then(data=>{
        out = `Đã tải : ${data.length} kí tự từ web Google !.Từ 100 đến 200 ${data.toString().substr(100,200)}`;
    });
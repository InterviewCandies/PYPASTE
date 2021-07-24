Page({
  data: {
      friends: [{
      name: "Tran le Hong nhi",
      phone: "0906.232.333",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Thọ Bùi",
      phone: "0905.123.1323",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Thịnh Nguyễn",
      phone: "0123.123.1323",
      avatar: "https://images.unsplash.com/photo-1599566147214-ce487862ea4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Minh Châu",
        phone: "0783.123.163",
        avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Bảo Nguyễn",
        phone: "0333.123.163",
        avatar: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Vĩnh Trương",
        phone: "0313.123.163",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }],
    
  },
  onAdd() {
     my.prompt({
      title: 'Thêm bạn',
      message: 'Điền số điện thoại hoặc email người dùng',
      placeholder: 'SĐT/Email',
      okButtonText: 'Thêm',
      cancelButtonText: 'Hủy',
      success: (result) => {
        my.alert({
          title: 'Đã thêm!',
          buttonText: 'Đóng'
        });
      }
    });
  }
})
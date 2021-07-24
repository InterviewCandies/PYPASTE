Page({
  data: {
    invitations: [ {
      date: "20/07/2021",
      user: {
        name: "Hồng Nhi",
        message: "Bạn có thể ghép với tôi được không ?",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      cart: [{
        name: "Áo kiểu hai dây quai mỏng cổ V",
        description: "Mango Doble - 43065022",
        quantity: 1,
        price: 299000,
        image: "https://salt.tikicdn.com/cache/w444/ts/product/a0/36/aa/9e0dddfa7536d57c231a75d5d4ade9db.jpg"
      },
      {
        name: "Đầm Mango Nữ",
        description: "83053608 - Size S",
        quantity: 2,
        price: 60000,
        image: "https://salt.tikicdn.com/cache/w444/ts/product/c7/b6/f0/0c315052d25fcb7b839c371ffa7472c9.jpg"
      }]
    }, 
      {
        date: "18/07/2021",
        user: {
          name: "Thọ Bùi",
          message: "Gộp đơn với mình nhé!",
          avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        cart: [{
          name: "Apple Macbook Pro 2020 M1",
          description: "13 Inchs (Apple M1/ 8GB/ 256GB) - Hàng Chính Hãng",
          quantity: 1,
          price: 32990000,
          image: "https://salt.tikicdn.com/cache/w444/ts/product/4c/6d/4d/ff362783c75898c2847c214f5a9273df.jpg"
        }]
    }]
  },
  onLoad() {
     const that = this;
     const invitations = this.data.invitations;
     my.getStorage({
      key: 'invitation',
      success: function (res) {
        if (res.data)
          that.setData({
            invitations: [...res.data]
          })
        else {
          my.setStorage({
            key: 'invitation',
            data: [...invitations]
          })
        }
      },
      fail: function (res) {
        my.alert({ content: res.errorMessage });
      }
    });
  }
})
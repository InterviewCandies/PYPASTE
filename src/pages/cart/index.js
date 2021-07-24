Page({
  data: {
    products:[
      {
          name: "Tẩy Tế Bào Chết Mặt Huxley",
          description: "Sahara Scrub Mask Sweet Therapy 30ml",
          quantity: 1,
          price: 99000,
          image: "https://salt.tikicdn.com/cache/w444/ts/product/d9/34/4e/b307906cb0f75efab597917d4fd23284.jpg"
      },
      {
          name: "Tinh Chất Tẩy Da Chết Và Làm Sáng Da The Ordinary",
          description: "Lactic Acid 5% + HA 30ml",
          quantity: 1,
          price: 285000,
          image: "https://salt.tikicdn.com/cache/w444/ts/product/5a/57/83/e495370bc7b15a8f0847c417e0a63966.jpg"
      }
    ],
    subtotal: 0,
    shipping: 0
  },

  onOpenCart() {
    my.openScreen({
      screenCode: "TK_LISTING",
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },
  
  onInvite() {
     my.prompt({
      title: 'Mời bạn bè ghép giỏ hàng',
      message: 'Điền số điện thoại hoặc email người dùng',
      placeholder: 'SĐT/Email',
      okButtonText: 'Mời',
      cancelButtonText: 'Hủy',
      success: (result) => {
        my.alert({
          title: 'Đã gửi lời mời!',
          buttonText: 'Đóng',
        });
      }
    });
  },
  

  onLoad() {
     const products = this.data.products;
     const that = this;
     my.getStorage({
      key: 'cart',
      success: function (res) {
        if (res.data) {
          that.setData({
            products: [...res.data]
          })
        }
        else {
          my.setStorage({
            key: 'cart',
            data: [...products]
          })
        }
      },
      fail: function (res) {
        my.alert({ content: res.errorMessage });
      }
    });
    let subtotal = 0;
    this.data.products.forEach(product => subtotal += product.price * product.quantity);
    let shipping = Math.floor(subtotal * 0.15);
    this.setData({
      subtotal,
      shipping
    })
  }
})
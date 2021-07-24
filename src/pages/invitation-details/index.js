Page({
  data: {
    invitation: {
      user: {
        name: '',
        date: ''
      },
      cart: []
    }
  },
  onLoad(query) {
     var invitation = query.replace('invitation=','');
     invitation = JSON.parse(invitation); 
     this.setData({
       invitation
     })
  },
  onAccept() {
    const that = this;
    my.getStorage({
      key: 'cart',
      success: function (res) {
         my.setStorage({
          key: 'cart',
          data: [...res.data, ...that.data.invitation.cart]
        });
        that.removeInvitation();
         my.navigateTo({url: 'pages/cart/index'});
      },
      fail: function (res) {
        my.alert({ content: res.errorMessage });
      }
    })
  },
  removeInvitation() {
    const currentUser = this.data.invitation.user.name;
      my.getStorage({
        key: 'invitation',
        success: function (res) {
          const items = res.data.filter(item => item.user.name !== currentUser)
          my.setStorage({
            key: 'invitation',
            data: [...items]
          })
        },
        fail: function (res) {
          my.alert({ content: res.errorMessage });
        }
      });
  },
  onReject() {
    this.removeInvitation();
    my.navigateTo({url: 'pages/invitation/index'});
  }
})
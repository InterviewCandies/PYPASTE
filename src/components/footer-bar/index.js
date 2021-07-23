Component({
  data: {
    activeTab: 0,
    tabs: [
      {
        icon: "../../images/cart.png",
        iconActive: "../../images/cart-active.png"
      },
      {
        icon: "../../images/invite.png",
        iconActive: "../../images/invite-active.png"
      },
      {
        icon: "../../images/notification.png",
        iconActive: "../../images/notification-active.png"
      },
      {
        icon: "../../images/friends.png",
        iconActive: "../../images/friends-active.png"
      },
    ],
  },
  
  props: {
    page: 0
  },

  didMount() {
    this.setData({
      activeTab: Number(this.props.page) 
    })
  },

  methods: {
    onTabBarTap(e) {
      const { index } = e.target.dataset;
      this.setData({
        activeTab: index,
      });
      this.movePage(index)
    },

    movePage(index) {
       switch(index) {
        case 0: 
          my.navigateTo({ url: "pages/cart/index" });
          break;
        case 1:
          my.navigateTo({ url: "pages/invitation/index" });
          break;
        case 2: 
          my.navigateTo({url: "pages/notification/index"});
          break;
        default:
          my.navigateTo({url: "pages/friends/index"});
          break;
      }
    }
  }
})
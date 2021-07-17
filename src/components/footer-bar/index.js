Component({
  data: {
    activeTab: 0,
    tabs: [
      {
        icon: "../../images/import.png",
        iconActive: "../../images/import-active.png"
      },
      {
        icon: "../../images/edit.png",
        iconActive: "../../images/edit-active.png"
      },
      {
        icon: "../../images/history.png",
        iconActive: "../../images/history-active.png"
      },
      {
        icon: "../../images/profile.png",
        iconActive: "../../images/profile-active.png"
      },
    ],
  },
  
  props: {
    page: 0
  },

  didMount() {
    this.setData({
      activeTab: this.props.page 
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
          my.navigateTo({ url: "pages/importer/index" });
          break;
        case 1:
          my.navigateTo({ url: "pages/editor/index" });
          break;
        case 2: 
          my.navigateTo({url: "pages/requests/index"});
          break;
        default:
          my.navigateTo({url: "pages/profile/index"});
          break;
      }
    }
  }
})
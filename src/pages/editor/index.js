Page({
   data: {
    currentTab: 0
  },
  onTabChange(e) {
    switch(e.target.id) {
      case "info": 
        this.setData({
          currentTab: 0
        })
        break;
      case "image": 
        this.setData({
         currentTab: 1
        })
        break;
      default:
        this.setData({
          currentTab: 2
        }) 
        break;
    }
  }
})
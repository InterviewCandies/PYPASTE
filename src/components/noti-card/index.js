Component({
  data: {
    icon: '../../images/accepted.png'
  },
  props: {
    notification: {
      content: "",
      date: "",
      status: ""
    }
  },
  didMount() {
    const icon =this.props.notification.status === "ACCEPTED" ? "../../images/accepted.png" : "../../images/rejected.png";
    this.setData({
      icon
    })
  }
})
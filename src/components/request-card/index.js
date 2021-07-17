Component({
  data: {
    statusIcon: {
      type: "",
      color: ""
    }
  },
  props: {
    request: {
      url: "",
      id: "",
      description: "",
      status: "ACCEPTED"
    }
  },
  didMount() {
    switch (this.props.request.status) {
      case "ACCEPTED":
        this.setData({
          statusIcon: {
            type: "success",
            color: "#4BB543"
          }
        })
        break;
      default:
        this.setData({
          statusIcon: {
            type: "minus",
            color: "#D50000"
          }
        })
        break;
    } 
  }
})
Component({
  props: {
    invitation: {
      user: {
        avatar: "",
        name: "",
        message: ""
      },
      cart: []
    }
  },
  methods: {
    onTap() {
      my.navigateTo({url: `pages/invitation-details/index?invitation=${JSON.stringify(this.props.invitation)}`})
    }
  }
})
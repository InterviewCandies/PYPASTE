Component({
   data: {
    array: ['bag', 'hat'],
    arrayIndex: 0,
    objecttArrayIndex: 0
  },
  onArrayChange(e) {
    console.log('array', e.detail.value);
    this.setData({
      arrayIndex: e.detail.value
    });
  }
})
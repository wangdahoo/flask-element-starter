import Vue from 'vue'
let bus = new Vue()

bus.$on('updateNavbar', (data) => {
  console.log('updateNavbarEvent', data)
})

export default bus
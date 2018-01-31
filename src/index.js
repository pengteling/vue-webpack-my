import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.scss'

const root = document.createElement('div')
document.body.appendChild(root)
//k+1
new Vue({
    render: h=>h(App)
}).$mount(root)

// new Vue({
//     el: root,
    
//     components: { App },
//     template: '<App/>'
//     //render: h => h(App),
// })
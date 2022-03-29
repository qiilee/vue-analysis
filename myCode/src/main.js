import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

console.log("App", App);
// console.log("Vue", Vue);

new Vue({
  router,
  store,

  // render: h => h(App) // 是ES6的写法，其实就是如下内容的简写

  render: function(createElement) {
    // createElement 是 Vue.js 里面的 函数,这个函数的作用就是生成一个 VNode节点，
    // render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
    console.log("createElement", createElement(App))
    return createElement(App)
  }

  // render: createElement => createElement(App) // 用h代替createElement 使用箭头函数来写：render: h => h(App)
  
  
}).$mount('#app')

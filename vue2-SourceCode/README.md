# vue2-SourceCode

1. 代码来源于[vue源码逐行注释分析+40多m的vue源码程序流程图思维导图](https://github.com/qq281113270/vue)
2. vue.js是作者：姚观寿添加注释的版本；vue1.js是自己的练习版本
3. code是使用 vue ui 构建的vue2.6.6版本空项目，作为练习使用
4. 调用new Vue()初始化之前，Vue自身做了如下操作：

+ 为Vue.prototype原型添加方法
   + initMixin(Vue); // 初始化vue
   + stateMixin(Vue); // 在Vue.prototype设置$data、$props、$set、$delete、$watch成员
   + eventsMixin(Vue); // 初始化事件绑定方法，在Vue.prototype设置$on、$once、$off、$emit等相关事件成员
   + lifecycleMixin(Vue); // 初始化vue 更新 销毁 函数，在Vue.prototype设置_update、$forceUpdate、$destroy成员
   + renderMixin(Vue); // 初始化vue 需要渲染的函数，在Vue.prototype设置$nextTick、_render成员。

+ 为initGlobalAPI为Vue添加静态方法和属性
   + initGlobalAPI(Vue); // 为vue添加静态方法和属性

5. new Vue()实例化对象：

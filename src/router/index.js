import Vue from 'vue';
import VueRouter from 'vue-router';
// 上方為官方的元件

import Home from '@/components/HelloWorld' ;
import Page from '@/components/pages/page' ;
// ＠ 為 src , 上方為自定義的分頁元件

Vue.use(VueRouter)

//此配置文件需要可以匯出給 entry (main.js) 使用
export default new VueRouter({
    route: [
        {
            name: '首頁', // 元件接下來會呈現的名稱
            path: '/index', //元件的虛擬路徑 (在網址上輸入的路徑)
            component: Home, //對應的元件
        },
        {
            name: '分頁', // 元件接下來會呈現的名稱
            path: '/page', //元件的虛擬路徑 (在網址上輸入的路徑)
            component: Page, //對應的元件
        },
    ]
});
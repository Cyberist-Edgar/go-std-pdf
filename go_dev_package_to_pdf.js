// ==UserScript==
// @name         go dev package to pdf
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Edgar
// @match        https://pkg.go.dev/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try{
        document.querySelector("body > header").remove()
    }catch(err){
        console.log("移除header失败: " + err)
    }

    // 移除掉 outline
    try {
        document.querySelector("body > main > div > div.DetailsContent > div > nav.DocNavMobile.js-mobileNav").remove()
    } catch(err) {

        try{
            document.querySelector("body > main > div > div > div > nav.DocNavMobile.js-mobileNav.DocNavMobile--withShadow").remove()
        }catch(err){
            console.log("移除outline失败: "+err)
        }
    }

    // 移除掉example
    try{
        let examples = document.querySelectorAll("details")
    examples.forEach(example => {
        example.remove()
    });
    }catch(err){
        console.log(err)
    }


    // 移除掉 Header
    try{
        document.querySelector("body > main > div > div.DetailsNavFixed.js-fixedHeader").remove()
    }catch(err){
         console.log("移除Header失败: " + err)
    }

    // 移除掉示例代码列表
    try{
        document.querySelector("body > main > div > div > div > div.Documentation-content.js-docContent > section.Documentation-examples").remove()
    }catch(err){
        console.log("移除示例代码失败: "+ err)
    }
    // 移除掉代码文件列表
    try{
        document.querySelector("body > main > div > div.DetailsContent > div > div.Documentation-content.js-docContent > section.Documentation-files").remove()
    }catch(err){
        console.log("移除文件列表失败：" + err)
    }
    // 移除掉build字段提示
    try{
        document.querySelector("body > main > div > div > div > div.Documentation-build").remove()
    }catch(err){
        console.log("移除build字段失败：" + err)
    }
    // 移除掉footer
    try{
        document.querySelector("body > footer").remove()
    }catch(err){
        console.log("移除footer失败：" + err)
    }

    window.print();
    // window.onbeforeprint = ()=>{console.log("before")}
    // window.onafterprint = ()=>{console.log("after")}
})();

// ==UserScript==
// @name          Google Reader Fix Up
// @namespace     http://userstyles.org
// @description	  Приводит кнопку "Подписаться" и её всплывающий блок к нормальному виду в русской локазлизации Google Reader
// @author        kafeg
// @homepage      http://vk.com/kafik
// @include       http://www.google.ru/*
// @include       https://www.google.ru/*
// @include       http://www.google.kz/*
// @include       https://www.google.kz/*
// @include       http://www.google.com/*
// @include       https://www.google.com/*
// @include       http://google.ru/*
// @include       https://google.ru/*
// @include       http://google.kz/*
// @include       https://google.kz/*
// @include       http://google.com/*
// @include       https://google.com/*
// @run-at        document-start
// ==/UserScript==
(function() {
    var css = "";
    css += "#quick-add-bubble-holder { width: 530px; }\n#lhn-add-subscription { width: 100px; }";

    document.addEventListener("DOMContentLoaded",
                              function(){
                                  if (typeof GM_addStyle != "undefined") {
                                      GM_addStyle(css);
                                  } else if (typeof PRO_addStyle != "undefined") {
                                      PRO_addStyle(css);
                                  } else if (typeof addStyle != "undefined") {
                                      addStyle(css);
                                  } else {
                                      var heads = document.getElementsByTagName("head");
                                      if (heads.length > 0) {
                                          var node = document.createElement("style");
                                          node.type = "text/css";
                                          node.appendChild(document.createTextNode(css));
                                          heads[0].appendChild(node);
                                      }
                                  }
                              }
                              , false);
})();

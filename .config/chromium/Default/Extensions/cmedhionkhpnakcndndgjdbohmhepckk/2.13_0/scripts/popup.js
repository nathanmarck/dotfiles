function set_pause_button_state(a){var b=document.getElementById("pause");return a="enabled"===a?"disable":"enable",b.innerHTML=chrome.i18n.getMessage(a),a}function toggleBlocker(){chrome.extension.sendMessage({action:"toggle_blocker"},function(a){set_pause_button_state(a)})}function activate_like_btn(){document.getElementById("likebtn").addEventListener("click",function(){var a=document.getElementById("facebook-like-btn");a.src=window.FACEBOOK_IFRAME_LIKE_LINK,a.style.display="block",this.parentNode.style.display="none"},!1)}window.WEBSTORE_LINK="https://chrome.google.com/webstore/detail/"+chrome.i18n.getMessage("@@extension_id"),window.WEBSTORE_REVIEW_LINK="https://chrome.google.com/webstore/detail/"+chrome.i18n.getMessage("@@extension_id")+"/reviews",window.FACEBOOK_IFRAME_LIKE_LINK="http://www.facebook.com/plugins/like.php?href="+encodeURIComponent(window.WEBSTORE_LINK)+"&send=false&layout=standard&width=450&show_faces=true&font&colorscheme=light&action=recommend&height=80&appId=314647198631310",window.SUPPORT_EMAIL="support@youtubead.de",function(){var a,b=document.getElementsByTagName("*");for(a=0;a<b.length;a++)b[a].dataset&&b[a].dataset.message&&(b[a].innerHTML=chrome.i18n.getMessage(b[a].dataset.message))}(),activate_like_btn(),set_pause_button_state(localStorage.getItem("blocker_state")),document.getElementById("logo").href=window.WEBSTORE_LINK,document.getElementById("ratelink").href=window.WEBSTORE_REVIEW_LINK,document.getElementById("pause").addEventListener("click",toggleBlocker,!1);
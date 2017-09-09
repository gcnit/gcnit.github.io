function navClick(n){$(n).click(function(e){return switchPage(n,!0),e.preventDefault(),$.ajax({type:"GET",url:"/nav?n="+n.substring(1,n.length)}),!1})}function scrollerClick(n){$(n).click(function(e){return $.ajax({type:"GET",url:"/scroller?n="+n.substring(1,n.length)}),!1})}function switchPage(n,e){var t=navs[n],o=getCurrentContent(),r=!1
if(t!=o){r=!0
var s=getCurrentNav()
contentHeightTransition(o,t),clearMoves(t),clearMoves(o),clearSets(o),clearSets(t),isALeftOfB(o,t)?($(o).addClass("content-moveToLeft").removeClass("content-current"),$(t).addClass("content-moveFromRight").addClass("content-current"),navTransition(s,n)):($(o).addClass("content-moveToRight").removeClass("content-current"),$(t).addClass("content-moveFromLeft").addClass("content-current"),navTransition(s,n))}else e&&animateIcon(n,"wiggle")
return r}function getCurrentContent(){for(var n in contents)if(contents.hasOwnProperty(n)&&$(n).hasClass("content-current"))return n
return"#none"}function getCurrentNav(){for(var n in navs)if(navs.hasOwnProperty(n)&&$(n).hasClass("nav-current"))return n
return"#none"}function contentHeightTransition(n,e){var t=$("#content-wrapper")
t.removeClass(heights[n]),t.addClass(heights[e])}function isALeftOfB(n,e){return contents[n]<contents[e]}function isARightOfB(n,e){return contents[n]>contents[e]}function clearSets(n){var e=["setToLeft","setToCenter","setToRight"]
for(var t in e)e.hasOwnProperty(t)&&$(n).hasClass(e[t])&&$(n).removeClass(e[t])}function clearMoves(n){var e=["content-moveToLeft","content-moveToCenter","content-moveToRight","content-moveFromLeft","content-moveFromRight"]
for(var t in e)e.hasOwnProperty(t)&&$(n).hasClass(e[t])&&$(n).removeClass(e[t])}function navTransition(n,e){$(n).removeClass("nav-current"),$(e).addClass("nav-current"),animateIcon(e,"bounce")}function animateIcon(n,e){$(n).addClass(e),setTimeout(function(){$(n).removeClass(e)},650)}function scrollTo(n){$(n).click(function(e){var t=scrollers[n][1],o=(switchPage(t,"#nav-home"==t),scrollers[n][0])
"#"!==o&&$("html,body").animate({scrollTop:$(o).offset().top},800)})}var navs={"#nav-home":"#content-home","#nav-resume":"#content-resume","#nav-blog":"#content-blog","#nav-contact":"#content-contact"},contents={"#none":0,"#content-home":1,"#content-resume":2,"#content-blog":3,"#content-contact":4},heights={"#content-home":"content-home-height","#content-resume":"content-resume-height","#content-blog":"content-blog-height","#content-contact":"content-contact-height"},scrollers={"#scroller-employment":["#resume-employment","#nav-resume"],"#scroller-education":["#resume-education","#nav-resume"],"#scroller-skills":["#resume-skills","#nav-resume"],"#scroller-activities":["#resume-activities","#nav-resume"]}
$(document).ready(function(){for(var n in navs)navs.hasOwnProperty(n)&&navClick(n)
for(var e in scrollers)scrollers.hasOwnProperty(e)&&(scrollTo(e),scrollerClick(e))
$(".backToTop").click(scrollToTop)
for(var t=0;t<maskIds.length;t++)scrollThumbnailMask(maskIds[t],maskContents[t])
modalHandler()})
var scrollToTop=function(){$("html,body").animate({scrollTop:0},800)}

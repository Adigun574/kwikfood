window.onload=function(){
//Cart number count
var i=0
$(".itemButton").click(function(){
  i++;
  $("#cartNo,#cartNo2").html(i);
  $(this.parentElement).css({"backgroundColor":"rgb(78,214,78","height":"154px","padding":0})
  $(this.parentElement).addClass("itemscale")
  $(this).siblings("input").css("display","none")
  setTimeout(() => {
    $(this).siblings(".ordered").css({"display":"block","color":"white"})
  },1000);
  $(this).css("display","none")
  
 })



}
var frame1 = document.getElementById('frame1');
var frame2 = document.getElementById('frame2');

frame1.contentWindow.onscroll = function(e) {
  frame2.contentWindow.scrollTo(0,frame1.contentWindow.scrollY);
};

frame2.contentWindow.onscroll = function(e) {
  frame1.contentWindow.scrollTo(0,frame2.contentWindow.scrollY);
};

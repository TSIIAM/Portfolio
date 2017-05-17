 $(document).ready(function() {
   var colRojo = Math.floor((Math.random() * 256));
       var colVerde = Math.floor((Math.random() * 256));
       var colAzul = Math.floor((Math.random() * 256));
		$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
     $.ajaxSetup({ cache: false });
     $("#getQuote").on("click", function() {
         $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(ajax) {
             $(".quote").html(ajax[0].content + "<p>&mdash; " + ajax[0].title + "</p>");
             var tquote = ajax[0].content;
             var ttitle = ajax[0].title;
             quote = tquote.replace(/(<p[^>]+?>|<p>|<\/p>|)/img, "");
             title = ttitle.replace(/(<p[^>]+?>|<p>|<\/p>|)/img, "");

		   var colRojo = Math.floor((Math.random() * 256));
       var colVerde = Math.floor((Math.random() * 256));
       var colAzul = Math.floor((Math.random() * 256));
		$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");


             $('.twitter-share-button').attr("href", 'https://twitter.com/intent/tweet?text=' + '"' + $(".quote").text() + '"');
         });
     });
 });

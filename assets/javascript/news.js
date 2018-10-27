$(document).ready(function news() {
    var queryURLThree = "https://newsapi.org/v2/everything?q=jobs&apiKey=6795d6c98606470a89ac8a3ea7d37b99"
    $.ajax({
        url: "https://floating-brushlands-91043.herokuapp.com/cors",
        data: {
            url: queryURLThree,
            key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79"
        },
        method: "POST"
    }).then(function (answerThree) {

        
        answerThree = answerThree.articles
        for (i = 0; i < answerThree.length; i++) {

            var newstitle = answerThree[i].title
            var newsSource = answerThree[i].source.name
            var newsURL = answerThree[i].url
            var newsDesc = answerThree[i].description
            var linkURL = $("<a href=" + newsURL + "></a>")
            linkURL.attr("target", "blank")
            linkURL.addClass("newslink")
            linkURL.text(newstitle)

            var sourceDisplay = $("<p>").text("Source: " + newsSource)

            var urlDisplay = $("<p>").html(linkURL)

            var descDisplay = $("<p>").text("Description: " + newsDesc)
            
            $("#newz").append(urlDisplay, sourceDisplay, descDisplay)
        }
    })
})
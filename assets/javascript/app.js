

$("#submit").on("click", function () {
    $("#job-description2").empty()
    $("#job-description").empty()



    var b = $("#keyword").val().trim()
    var l = $("#location").val().trim()
    console.log(b)
    console.log(l)
    if ((b == ("Keyword: Web Developer")) && (l == ("Location"))){

    }
    else{
    var queryURL = "https://authenticjobs.com/api/?api_key=525408781df0cd7b30d193b511aeb269&method=aj.jobs.search&keywords=" + b + "&location=" + l + "&format=json"
    var queryURLTwo = "https://jobs.github.com/positions.json?description=" + b + "&location=" + l

    $.when(

        $.ajax({
            url: "https://floating-brushlands-91043.herokuapp.com/cors",
            data: {
                url: queryURL,
                key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79"
            },
            method: "POST"
        }),

        $.ajax({
            url: "https://floating-brushlands-91043.herokuapp.com/cors",
            data: {
                url: queryURLTwo,
                key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79"
            },
            method: "POST"
        })


    ).then(function (answer, answertwo) {

        // answer = answer[0];
        answertwo = answertwo[0];
        // console.log(answer)
        console.log(answertwo)
        if (answer[0].listings.listing.length == 0) {
            $("#job-description").append("Your search did not return any results.")
        }
        else {
            for (i = 0; i < answer[0].listings.listing.length; i++) {

                var sTitle = answer[0].listings.listing[i].title
                var sDesc = answer[0].listings.listing[i].description
                var sApp = answer[0].listings.listing[i].apply_url
                var button = $("<button>")
                var div = $("<div>")
                var div2 = $("<div>")
                var company = answer[0].listings.listing[i].company.name
                var location = answer[0].listings.listing[i].company.location.name
                var value = i
                var button2 = $("<button>")
                var button3 = $("<button>")
                

                // type=button class=btn btn-primary data-toggle=modal data-target=#exampleModal

                $("#job-description").append("<br>")
                $("#job-description").append("Result " + (i + 1) + ":")
                $("#job-description").append("<br>")
                $("#job-description").append("Title: " + sTitle)
                $("#job-description").append("<br>")
                $("#job-description").append("Company: " + company)
                $("#job-description").append("<br>")
                $("#job-description").append("Location: " + location)
                div.attr("id", value)
                $("#job-description").append(div)
                div2.attr("id", ("2" + value))
                $("#job-description").append(div2)

                button.attr("id", "button" + value)
                button.addClass("btn btn-info")
                button.val(value)
                button.text("click to see job description")
                button.on("click", function () {
                    var x = $(this).text()
                    var value = $(this).val()
                    if (x == ("click to see job description")) {
                        $(this).text("click to hide job description")
                        $("#" + value).append(sDesc)
                    }
                    else {
                        $(this).text("click to see job description")
                        $("#" + value).empty()
                    }
                })
                $("#job-description").append(button)
                button2.attr("id", "button2" + value)
                button2.addClass("btn btn-info")
                button2.val(value)
                button2.text("click to apply")
                button2.on("click", function () {
                    var value = $(this).val()
                    console.log(value)
                    var sApp = answer[0].listings.listing[value].apply_url
                    console.log(sApp)
                    window.open(sApp, '_blank')

                })

                button3.attr("id", "button3" + value)
                button3.addClass("btn btn-info")
                button3.val(company)
                button3.text("click to see tweets about " + company)
                button3.on("click", function () {
                    var text = $(this).text()
                    var q = $(this).val()
                    var y = $(this).attr("id")
                    var x = y.substring(7)

                    if (text == ("click to see tweets about " + q)) {
                        $(this).text("click to hide tweets")


                        console.log(q)
                        console.log(x)
                        $.ajax({
                            url: "https://floating-brushlands-91043.herokuapp.com/cors/twitter",
                            data: {
                                url: "/search/tweets.json?q=" + q + "&result_type=mixed",
                                key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79"
                            },
                            method: "POST"
                        }).then(function (twitterAns) {

                            twitterAns = twitterAns.statuses


                            for (i = 0; i < twitterAns.length; i++) {

                                var tweetIMG = $("<img>")

                                tweetIMG.attr("src", "assets/images/tweet.jpg")
                                tweetIMG.css("height", "50px", "width", "50px")

                                var tweeter = twitterAns[i].text

                                var tweetDisp = $("<p>").text(" " + tweeter)

                                $("#2" + x).append("<br>")
                                $("#2" + x).append(tweetIMG, tweetDisp)

                            }

                        })
                    }
                    else {
                        $(this).text("click to see tweets about " + q)
                        $("#2" + x).empty()
                    }

                })
                $("#job-description").append(button3)
                $("#job-description").append("<br>")
                $("#job-description").append(button2)
                $("#job-description").css("font-size", "10px;")
            }
        }
        if (answertwo.length == 0) {
            $("#job-description2").append("Your search did not return any results.")
        }
        else {
            for (i = 0; i < answertwo.length; i++) {

                var companytwo = answertwo[i].company

                var locationtwo = answertwo[i].location

                var titletwo = answertwo[i].title

                

                $("#job-description2").append("<br>")
                $("#job-description2").append("Result " + (i + 1) + ":")
                $("#job-description2").append("<br>")

                $("#job-description2").append("<br>");

                $("#job-description2").append("Title: " + titletwo + "<br>");

                $("#job-description2").append("Company: " + companytwo + "<br>");

                $("#job-description2").append("Location: " + locationtwo + "<br>");

                // var sDesc = 
                // var sApp = 
                var buttong = $("<button>")
                var divg = $("<div>")
                var divg2 = $("<div>")
                var divg3 =$("<div>")
                var value = i
                var buttong2 = $("<button>")
                var buttong3 = $("<button>")

                divg.attr("id", ("g" + value))
                $("#job-description2").append(divg)
                divg2.attr("id", ("g2" + value))
                $("#job-description2").append(divg2)
                divg3.attr("id", ("g3" + value))
                $("#job-description2").append(divg3)
                buttong.attr("id", "buttong" + value)
                buttong.addClass("btn btn-info")
                buttong.val(value)
                buttong.text("click to see job description")
                buttong.on("click", function () {
                    var x = $(this).text()
                    var value = $(this).val()
                    var desctwo = answertwo[value].description
                    if (x == ("click to see job description")) {
                        $(this).text("click to hide job description")
                        $("#g" + value).append(desctwo)
                    }
                    else {
                        $(this).text("click to see job description")
                        $("#g" + value).empty()
                    }
                })
                $("#job-description2").append(buttong)
                buttong2.attr("id", "buttong2" + value)
                buttong2.addClass("btn btn-info")
                buttong2.val(value)
                buttong2.text("click to see how to apply")
                buttong2.on("click", function () {
                    var value = $(this).val()
                    var text = $(this).text()
                    console.log(value)
                    // var sApp = "https://www.google.com/search?q=twitter&rlz=1C1CHBF_enUS795US798&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi6w6zE7aHeAhVBm-AKHVHLDVMQ_AUIDygC&biw=1536&bih=754#imgrc=B_SatyVWx2B-dM:"
                    // console.log(sApp)
                    if (text == ("click to see how to apply")){
                    $(this).text("click to hide how to apply")
                    var Gapp = answertwo[value].how_to_apply
                    $("#g3" + value).append(Gapp)
                    }
                    else{
                        $(this).text("click to see how to apply")  
                        $("#g3" + value).empty()
                    }

                })

                buttong3.attr("id", "buttong3" + value)
                buttong3.addClass("btn btn-info")
                buttong3.val(companytwo)
                buttong3.text("click to see tweets about " + companytwo)
                buttong3.on("click", function () {
                    var text = $(this).text()
                    var q = $(this).val()
                    var y = $(this).attr("id")
                    var x = y.substring(8)
                    var tbutton = $(this)

                    if (text == ("click to see tweets about " + q)) {
                        tbutton.text("click to hide tweets")
                        


                        console.log(q)
                        console.log(x)
                        $.ajax({
                            url: "https://floating-brushlands-91043.herokuapp.com/cors/twitter",
                            data: {
                                url: "/search/tweets.json?q=" + q + "&result_type=mixed",
                                key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79"
                            },
                            method: "POST"
                        }).then(function (twitterAns) {

                            twitterAns = twitterAns.statuses


                            for (i = 0; i < twitterAns.length; i++) {

                                var tweetIMG = $("<img>")

                                tweetIMG.attr("src", "assets/images/tweet.jpg")
                                tweetIMG.css("height", "50px", "width", "50px")

                                var tweeter = twitterAns[i].text

                                var tweetDisp = $("<p>").text(" " + tweeter)
                                console.log(tweeter)
                                $("#g2" + x).append("<br>")
                                $("#g2" + x).append(tweetIMG, tweetDisp)

                            }

                        })
                    }
                    else if(text == ("click to hide tweets"))
                    {
                        $(this).text("click to see tweets about " + q)
                        $("#g2" + x).empty()
                    }

                })
                $("#job-description2").append(buttong3)
                $("#job-description2").append(buttong2)
                
            }
        }



    })
}
})




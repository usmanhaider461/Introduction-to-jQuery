
        $('button').on("click", function(){
            // $("div").fadeOut(1000, function () {
            //     $("div").remove();
            //   });

            // $("div").fadeToggle(1000, function () {
            //     // $("div").remove();
            //   });

            // $('div').slideUp();
            // $('div').slideDown();
            $('div').slideToggle();

            // // Javascript does not wait for fade out and move to the nex line
            console.log("Fading Completed");
        });
$(document).ready(function () {
    $("button").click(function () {
        let index = $("button").index(this);
        $(".toggle").hide();
        $(".toggle").eq(index).show();
        $(".toggle").eq(index).find("ul").toggle();
    });
});


//   $(document).ready(function () {
//     $(".button-div").click(function () {
//      let index = $(".button-div").index(this);
//       $(".toggle").hide();
//       $("..word-container").hide();
//       $(".toggle").eq(index).show();
//       $("..word-container").eq(index).show();
//       $(".toggle").eq(index).find(".word-container").toggle();
//       $(".word-container").eq(index).find(".toggle").toggle();
//     });
//   });
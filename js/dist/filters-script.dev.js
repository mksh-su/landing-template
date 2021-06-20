"use strict";

$(".action_header_filters a").on("click", function (e) {
  e.preventDefault(), $(".filters_area").toggleClass("open"), $(".map").toggleClass("open");
}), $(".buy .advanced_search").on("click", function (e) {
  e.preventDefault(), $(".filters_area.buy").toggleClass("open");
}), $(".show_on_map").on("click", function (e) {
  e.preventDefault(), $(".map").toggleClass("open");
}), $(function () {
  $("#district").multiSelect({
    noneText: "выбрать"
  }), $("#area").multiSelect({
    noneText: "выбрать"
  }), $("#room_number").multiSelect({
    noneText: "выбрать"
  }), $("#sort").multiSelect({
    noneText: "по умолчанию"
  }), $("#year").multiSelect({
    noneText: "за 2021"
  }), $("#done_in").multiSelect({
    noneText: "выбрать"
  }), $("#fond").multiSelect({
    noneText: "выбрать"
  }), $("#metro").multiSelect({
    noneText: "выбрать"
  }), $("#object_type_select").multiSelect({
    noneText: "выбрать"
  }), $("button[type=reset]").on("click", function () {
    return $(this).closest("form").find("input").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").find("option").prop("selected", !1).removeAttr("selected"), !1;
  });
}), $(function () {
  $(".photo_txt img").wrap(function () {
    return '<a data-lightbox="roadtrip" href="' + $(this).attr("src") + '" title="' + $(this).attr("alt") + '"></a>';
  });
});
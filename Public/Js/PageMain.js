// SETUP SERTIFIKAT
$("#buatSer").on("click", () => {
  const Ranking = $("#SelectJuara").val();
  const Nama = $("#pemenang").val();
  const yg = $("#GuildAnda").val();

  if (Ranking == "0" || Nama == "" || yg == "") {
    alert("Mohon Lengkapi Informasi !");
    return 0;
  } else {
    $(".inpt").val(Nama);
    $("#jlm").html(Ranking);
    $("#yGuild").html(yg);
    $(".con").removeClass("d-none");
  }
});

// FUNGSI DOWNLOAD SERTIFIKAT
const element = $(".sertifikat"); // global variable
let getCanvas; // global variable
$("#Generate").on("click", function () {
  html2canvas(element, {
    onrendered: function (canvas) {
      $("#GenerateImage").append(canvas);
      getCanvas = canvas;
    },
  });
  Download("#Generate");
});
const Download = (elm) => {
  var imgageData = getCanvas.toDataURL("image/png");
  var newData = imgageData.replace(
    /^data:image\/png/,
    "data:application/octet-stream"
  );
  $(elm)
    .attr("download", "dhittTools-" + randomText(5) + ".png")
    .attr("href", newData);
  $(location).attr("href", "/");
};

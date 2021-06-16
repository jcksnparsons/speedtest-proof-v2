import Rails from "@rails/ujs";

document.querySelector('.loader').style.display = 'none';

export const speedTest = () => {
  let fd = new FormData

  document.querySelector('.loader').style.display = 'block';

  Rails.ajax({
    url: "/speedtest",
    type: "post",
    contentType: "application/json",
    success: (data) => {
      console.log(data);
      document.querySelector('.loader').style.display = 'none';
    },
    error: (data) => {
      console.log("you goofed");
      document.querySelector('.loader').style.display = 'none';
    },
  });
};

document.getElementById("speedtest-perform").addEventListener("click", () => {
  speedTest();
});

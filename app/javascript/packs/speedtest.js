import Rails from '@rails/ujs'

export const speedTest = () => {
  Rails.ajax({
    url: "/speedtest",
    type: "post",
    success: (data) => {
      console.log(data);
    },
    error: (data) => {
      console.log("you goofed");
    },
  });
};

document.getElementById('speedtest-perform').addEventListener('click', () => {
    speedTest()
})

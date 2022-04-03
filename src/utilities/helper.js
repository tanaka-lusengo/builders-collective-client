import moment from "moment";
// import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

//Helper function to convert Unix Timestamps to required format
const Timestamp = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  let m = moment(date, "DD-MM-YYYY").fromNow();
  return m;
};

const TimestampChat = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  let m = moment(date, "DD-MM-YYYY").calendar();
  return m;
};

// Notification function for UploadPage
// const handleUploadComplete = () => {
//   const swalCustom = Swal.mixin({
//     customClass: {
//       confirmButton: "sweet-alert-button",
//     },
//     buttonsStyling: false,
//   });

//   swalCustom.fire({
//     title: "Sucess!",
//     text: "Video has been uploaded!",
//     icon: "success",
//     confirmButtonText: "RETURN HOME",
//   });
// };

// sort comments in order by timestamp
const sortByTimestamp = (a, b) => {
  if (a.createdAt > b.createdAt) {
    return -1;
  }
  if (a.createdAt < b.createdAt) {
    return 1;
  }
  return 0;
};

// scroll to top page after side video click
const handlePageScroll = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

// scroll to bottom page after side video click
const handlePageScrollBottom = () => {
  window.scroll({
    top: 100,
    behavior: "smooth",
  });
};

export {
  handlePageScroll,
  handlePageScrollBottom,
  Timestamp,
  TimestampChat,
  sortByTimestamp,
};

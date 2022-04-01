// import moment from "moment";
// import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

// Helper function to convert Unix Timestamps to required format
// const Timestamp = (unixTimestamp) => {
//   let date = new Date(unixTimestamp);
//   let m = moment(date, "DD-MM-YYYY").fromNow();
//   return m;
// };

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
// const sortByTimestamp = (a, b) => {
//   if (a.timestamp > b.timestamp) {
//     return -1;
//   }
//   if (a.timestamp < b.timestamp) {
//     return 1;
//   }
//   return 0;
// };

// scroll to top page after side video click
const handlePageScroll = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

export { handlePageScroll };

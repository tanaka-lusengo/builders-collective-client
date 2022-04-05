import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

// handle error
const errorNotify = () =>
  toast.error("Please check your email or password credentials", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

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

export {
  handlePageScroll,
  Timestamp,
  TimestampChat,
  errorNotify,
  sortByTimestamp,
};

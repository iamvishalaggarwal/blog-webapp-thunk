import { formatDistanceToNow, parseISO } from "date-fns";

// eslint-disable-next-line react/prop-types
const TimeAgo = ({ timestamp }) => {
  let timeago = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeago = `${timePeriod} ago`;
  }
  return (
    <span title={timestamp}>
      <i>{timeago}</i>
    </span>
  );
};

export default TimeAgo;

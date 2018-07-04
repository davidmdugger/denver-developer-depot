import isEmpty from "../validation/is-empty";
const dateFormat = date => {
  if (isEmpty(data)) {
    return "No DateT";
  }
  return date.substr(0, date.indexOf("T")).replace(/-/g, "/");
};

export default dateFormat;

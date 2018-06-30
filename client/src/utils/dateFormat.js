const dateFormat = date => {
  return date.substr(0, date.indexOf("T")).replace(/-/g, "/");
};

export default dateFormat;

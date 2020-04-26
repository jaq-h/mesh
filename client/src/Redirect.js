const Redirect = ({handleCode}) => {
  const hash = window.location.href
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
     console.log(hash["redirect?code="]);
  handleCode(hash["ttp://localhost:3000/redirect?code"]);
  return null;
}

export default Redirect;
// Get the hash of the url
//
//
//   }, {});
// window.location.hash = "";

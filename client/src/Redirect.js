const Redirect = ({handleCode}) => {
  const hash = window.location.href
    .split("redirect?code=");
    // .reduce(function(initial, item) {
    //   if (item) {
    //     var parts = item.split("redirect?code=");
    //     initial[parts[0]] = decodeURIComponent(parts[1]);
    //   }
    //   return initial;
    // }, {});
     //console.log(hash[1]);
  handleCode(hash[1]);
  return null;
}

export default Redirect;
// Get the hash of the url
//
//
//   }, {});
// window.location.hash = "";

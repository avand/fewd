var sc = {

  getJSON: function(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.response);
        success(json);
      }
    }
    xhr.open("GET", url);
    xhr.send();
  },

};

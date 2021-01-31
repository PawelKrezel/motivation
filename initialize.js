if(typeof(Storage) !== "undefined") {
    if (localStorage.GroupCount) {
      localStorage.GroupCount = Number(localStorage.GroupCount)+1;
    } else {
      localStorage.GroupCount = 1;
    }
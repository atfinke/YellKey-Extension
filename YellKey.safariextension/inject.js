document.onkeydown = function(e) {
  if (e.keyCode == 75 && e.metaKey && e.shiftKey) {
    safari.self.tab.dispatchMessage("show");
  }
};

const links = document.querySelectorAll('a');
links.forEach((link) => {
  link.target = link.target || '_blank';
});

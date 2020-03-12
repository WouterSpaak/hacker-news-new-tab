const mainBody = document.querySelector('#hnmain > tbody > tr:nth-child(3)');
if (mainBody) {
  mainBody.querySelectorAll('a').forEach(anchor => {
    anchor.target = anchor.target || '_blank';
  });
}

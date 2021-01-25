// eslint-disable-next-line no-unused-vars
function myFunction() {
  let input;
  let filter;
  let table;
  let tr;
  let td;
  let i;
  let txtValue;
  // eslint-disable-next-line prefer-const
  input = document.getElementById('myInput');
  // eslint-disable-next-line prefer-const
  filter = input.value.toUpperCase();
  // eslint-disable-next-line prefer-const
  table = document.getElementById('myTable');
  // eslint-disable-next-line prefer-const
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    // eslint-disable-next-line prefer-destructuring
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

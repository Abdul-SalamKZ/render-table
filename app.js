
const students = [
    {
      name: 'Abdul Salam',
      age: 20,
    },
    {
      name: 'Abdul Rehman',
      age: 21,
    },
    {
      name: 'Shameel',
      age: 18,
    },
    {
      name: 'Shazeel',
      age: 16,
    },
    {
      name: 'Hamza',
      age: 17,
    },
    {
      name: 'Saad',
      age: 21,
    },
  ];
  
  function rendrTable() {
    const table = document.getElementById('table');
    const tableBody = document.createElement('tbody');
    const tableRow = document.createElement('tr');
  
    Object.keys(students[0]).forEach(key => {
      const tableHead = document.createElement('th');
      tableHead.textContent = key;
      tableRow.appendChild(tableHead);
    });
  
    table.appendChild(tableRow);
  
    students.forEach(student => {
      const row = document.createElement('tr');
      Object.keys(student).forEach(key => {
        const td = document.createElement('td');
        td.textContent = student[key];
        row.appendChild(td);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
  }
  
  rendrTable();
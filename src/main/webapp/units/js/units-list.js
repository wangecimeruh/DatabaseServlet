import TracomAcademy from '../../app-library.js';

const refresh = document.getElementById("refresh");
const addUnit = document.getElementById("add-unit");

const courseUnit = {
    store: [{
              name: "ALGORITHMS",
              code: 'A1444'
          },{
              name: "DISCRETE MATHEMATICS",
              code: "232323"
          },{
              name: "DATABASES",
              code: "2555o9888"
    }],
    form: [{
          label: "Name",
          name: "cname",
          id: "course.cname",
          type: "text"
      },{
          label: "Code",
          name: "ccode",
          id: "course.code",
          type: "text"
    }]
};

function generateGrid() {
    return TracomAcademy.Grid.apply(courseUnit); 
}

function generateForm() {
    return TracomAcademy.Form.apply(courseUnit);
}

refresh.addEventListener('click', generateGrid);
addUnit.addEventListener('click', generateForm);

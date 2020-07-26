var TracomAcademy = TracomAcademy || {};

const contentRender = "content";

TracomAcademy.Grid = function(){
  const me = this;

  let table = `<table border=1><tr><th>Name</th><th>Code<th></tr>`;

  me.store.forEach(field => {
     table += `<tr><td>${field.name}</td><td>${field.code}<td></tr>`;
   });

   table += "</table>";

   document.getElementById(contentRender).innerHTML = table;

}

TracomAcademy.Form = function(){
   const me = this;

   let form = "<form>";
   let submit = `<br><input type="submit" id="submit" name="submit"/><br>`;

   me.form.forEach(field => {
      form += `<label for="${field.id}">${field.label}</label><br> 
      <input type="${field.type}" id="${field.id}" name="${field.name}" /><br>
      `;
   });
   
   form += `${submit}</form>`;

   document.getElementById(contentRender).innerHTML = form;

}


export default TracomAcademy;

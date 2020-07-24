var TracomAcademy = TracomAcademy || {};

TracomAcademy.contentRender = "content";

TracomAcademy.Grid = function(){
  var me = this;

  var table = "<table border=\"1\"><tr><th>Name</th><th>Code<th></tr>";

  me.store.forEach(field => {
      table += `<label for=\"${field.id}\">${field.label}</label><br> <input type=\"${field.type}\" id=\"${field.id}\" name=\"${field.name}\"><br>`;
   });

   table += "</table>";

   document.getElementById(me.contentRender).innerHTML = table;

}

TracomAcademy.Form = function(){
   var me = this;

   var form = "<form action=\"/action_page.php\">";

   me.form.forEach(field => {
      form += `<label for=\"${field.id}\">${field.label}</label><br> <input type=\"${field.type}\" id=\"${field.id}\" name=\"${field.name}\"><br>`;
   });

   form +=  "</form>";

   document.getElementById(me.contentRender).innerHTML = form;

}


/// {name: "name",fieldLabel: "
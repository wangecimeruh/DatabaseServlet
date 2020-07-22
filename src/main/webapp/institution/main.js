
// An icon to show delete action
const deleteIcon = '<i class="fa fa-trash" aria-hidden="true"></i>';

function saveInstitution(){
    // Persistently store the data
    localStorage.setItem('institution', JSON.stringify(myLibrary));
}

function getLibrary(){
    // check if there is a library in storage, if not, create a new empty one
    let data = localStorage.getItem('ilibrary')?
        JSON.parse(localStorage.getItem('library')) : [];
    if (data) {
        data.forEach((instObj) => {
            instObj.__proto__ = Book.prototype;
        });
    }
    return data;
}
 
function Institution(name, address, location, type) {
    this.name = name;
    this.address = address;
    this.location = location;
    this.type = type;
}


function createNewInst(){
    // create an institution object using data obtained from user input
    let name = document.querySelector("#name").value;
    let address = document.querySelector("#address").value;
    let location = document.querySelector("#location").value;
    let type = document.querySelector("#type").value;

    return new Institution(name, address, location, type);
}

function updateChanges(){
    saveInstitution();
    clearTable();
    render();
}

function addInstToLibrary(inst) {
    myLibrary.push(inst);
    updateChanges();
}

function removeInstFromLibrary(id){
	myLibrary.splice(id, 1);
    updateChanges();
}

function clearTable(){
	// delete all displayed inst records
	let library = document.querySelector("#inst-list");
	while (library.firstChild){
		library.removeChild(library.firstChild);
	}
}

function deleteLibrary(){
    localStorage.clear();
    myLibrary = getLibrary();
    clearTable();
    render();
}

function render() {
    let instList = document.querySelector("#inst-list");

    // display all institutions in the library
    myLibrary.forEach((inst, id) => {
        let instInfo = document.createElement('tr'); 
        let instKeys = Object.keys(inst);
        //instKeys.push("delete");

        instKeys.forEach((key) => {
            let entry  = document.createElement('td');
            if (key == "delete"){
                entry.innerHTML = deleteIcon;
                entry.classList.add('delete');
                entry.setAttribute("data-id", id);
                entry.addEventListener('click', function(){
                    removeInstFromLibrary(entry.dataset.id);
                });

            } else{
                entry.innerHTML = inst[key];
            }
            instInfo.appendChild(entry);
        });

        instList.appendChild(instInfo);

    });

}

// Insttution database
let myLibrary = getLibrary();

render();

// Event listeners
function hideModal() {
    let modal = document.querySelector(".add-modal");
    modal.style.display = 'none';
}

function showModal() {
    let modal = document.querySelector(".add-modal");
    modal.style.display = 'block';
}

let addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(){
    showModal();
});

let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function(){
    hideModal();
});

let addInst = document.querySelector("#book-info-form");
addInst.addEventListener("submit", function(e){
    // prevent default submit action which sends data to a server
    e.preventDefault(); 
    let inst = createNewInst();
    addInstToLibrary(inst);
    hideModal();
});


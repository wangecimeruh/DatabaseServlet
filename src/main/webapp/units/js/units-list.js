TracomAcademy.Grid.apply({
    contentRender: "content",
    gridTitle: "Units",
    componentId: "units",
    columns: [{
        header: "Id",
        dataIndex: "id",
        width: 3
    },{
        header: "Name",
        dataIndex: "name",
        width: 27
    },{
        header: "Code",
        dataIndex: "code",
        width: 20
    },{
        header: "Details",
        dataIndex: "details",
        width: 30
    },{
        header: "Some Stuff",
        dataIndex: "SomeStuff",
        width: 20
    }],
    store: [],
    form: {
        id: "units-form",
        url: "../helloservlet",
        items: [{
            label: "Name",
            name: "cname",
            id: "unit.cname",
            type: "text"
        },{
            label: "Code",
            name: "ccode",
            id: "unit.code",
            type: "text"
        },{
            label: "Details",
            name: "details",
            id: "unit.details",
            type: "textarea"
        },{
            label: "Password",
            name: "password",
            id: "unit.password",
            type: "password"
        },{
            label: "Course",
            name: "course",
            id: "unit.course",
            type: "select",
            options: [{
                "optionLabel": "Computer Science",
                "optionValue": "COMPUTER_SCIENCE"
            },{
                "optionLabel": "Software Engineering",
                "optionValue": "SOFTWARE_ENGINEERING"
            }]
        }]
    }
 });
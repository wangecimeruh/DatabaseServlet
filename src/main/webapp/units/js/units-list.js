TracomAcademy.Grid.apply({
    contentRender: "content",
    gridTitle: "Units",
    componentId: "units",
    columns: [{
        header: "Id",
        dataIndex: "id",
        width: 10
    },{
        header: "Name",
        dataIndex: "name",
        width: 25
    },{
        header: "Code",
        dataIndex: "code",
        width: 25
    },{
        header: "Details",
        dataIndex: "details",
        width: 40
    }],
    store: [{
        id: 1,
        name: "ALGORITHMS",
        code: "A1444",
        details: "JUST DESCRIPTION"
    },{
        id: 2,
        name: "DISCRETE MATHEMATICS",
        code: "232323",
        details: "JUST DESCRIPTION"
    },{
        id: 3,
        name: "DATABASES",
        code: "2555o9888",
        details: "JUST DESCRIPTION"
    }],
    form: {
        id: "units-form",
        url: "./save",
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
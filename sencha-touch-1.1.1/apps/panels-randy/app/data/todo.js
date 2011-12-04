Ext.regModel('Todo', {
    fields: ['title']
});

TakenApp.TodoStore = new Ext.data.Store({
    model: 'Todo',
    data: [
        { title: "Onvoltooide taak 1" },
        { title: "Onvoltooide taak 2" },
        { title: "Onvoltooide taak 3" },
        { title: "Onvoltooide taak 4" },
        { title: "Onvoltooide taak 5" },
        { title: "Onvoltooide taak 6" }
    ]
});

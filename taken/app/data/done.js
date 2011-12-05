Ext.regModel('Done', {
    fields: ['title']
});

TakenApp.DoneStore = new Ext.data.Store({
    model: 'Done',
    data: [
        { title: "Voltooide taak 1" },
        { title: "Voltooide taak 2" },
        { title: "Voltooide taak 3" }
    ]
});

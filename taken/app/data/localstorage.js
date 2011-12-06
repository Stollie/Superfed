Ext.regModel('Taak', {
	idProperty: 'id',
	fields: [
		{ name: 'id', type: 'int' },
		{ name: 'date', type: 'date', dateFormat: 'c' },
		{ name: 'title', type: 'string' },
		{ name: 'done', type: 'boolean' },
	],
    validations: [
        { type: 'presence', field: 'id' },
        { type: 'presence', field: 'title', message: 'Vul een titel in alstublieft' }
    ]
});

Ext.regStore('TakenStore', {
    model: 'Taak',
    sorters: [{
        property: 'date',
        direction: 'DESC'
    }],
    proxy: {
        type: 'localstorage',
        id: 'taken-app-localstore'
    },
    // TODO: remove this data after testing.
/*     data: [
        { id: 1, date: new Date(), title: 'Taak 1 Onvoltooid', done: false},
        { id: 2, date: new Date(), title: 'Taak 2 Voltooid', done: true},
        { id: 3, date: new Date(), title: 'Taak 3 Onvoltooid', done: false}
    ]	 */
});
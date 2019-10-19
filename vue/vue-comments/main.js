var d = new Date()
var vm = new Vue({
    el: "#app",
    data: {
        comments: [
            { body: 'My first commentary', time: d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear(), coto: 0 },
            { body: 'Aga kareba?', time: (d.getDate() - 6) + '-' + d.getMonth() + '-' + d.getFullYear(), coto: 5 },
            { body: 'Kumaha damang?', time: (d.getDate() - 6 - 7) + '-' + d.getMonth() + '-' + d.getFullYear(), coto: 7 }
        ]
    }
})
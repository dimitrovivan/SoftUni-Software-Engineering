function solve(input) {

    function listProccesorBuilder () {

        let list = [];

        return {
            add: text => list.push(text),
            remove: text => list.splice(list.indexOf(text),1),
            print: () => console.log(list.join(', ')),
        }

    }

    let listProccessor = listProccesorBuilder();

    input.map(x => x.split(' '))
    .forEach(([command, arg]) => listProccessor[command](arg));

}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
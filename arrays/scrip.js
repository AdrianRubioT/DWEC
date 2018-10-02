
document.write("PUSH: " + testPushArray()[0] + " seg<br>");
document.write("REMOVE: " + testPushArray()[1] + " seg<br>");
document.write("<br>");

document.write("ADD: " + testAddSet() + " seg<br>");



function dateNow() {
    return new Date();
}


function testPushArray() {

    var array = [];
    var tiempo1 = dateNow();

    for (let index = 0; index < 1000000; index++) {
        array.push("hola");
    }

    var resTime1 = (dateNow() - tiempo1) / 1000;

    var tiempo3 = dateNow();

    array.forEach(element => {
        array.pop();
    });
    var resTime2 = (dateNow() - tiempo3) / 1000;

    return [resTime1, resTime2];

    /* return (tiempo2 - tiempo1) / 1000; */

}

function testAddSet() {

    var tiempo3 = dateNow();
    var conjunto = new Set();

    for (let index = 0; index < 1000000; index++) {
        conjunto.add("hola"+index);
    }
    var tiempo4 = dateNow();
    return (tiempo4 - tiempo3) / 1000;


}
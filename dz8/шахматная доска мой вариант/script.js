'use strict';

function shess() {
    let div = document.createElement('div');
    div.className = "tab__div";
    div.innerHTML = "<h1>Шахматная доска</h1>";
    document.body.appendChild(div);

    let table = document.createElement('table');
    table.className = "table";
    div.appendChild(table);
    let array = ["H", "G", "F", "E", "D", "C", "B", "A"];

    for (let i = 9; i >= 0; i--) {
        let tr = document.createElement('tr');
        tr.className = "tr";
        table.appendChild(tr);

        for (let k = 9; k >= 0; k--) {
            let td = document.createElement('td');
            let h2 = document.createElement('h2');
            if ((i + k) % 2 != 0 && i != 0 && k != 0 && i != 9 && k != 9) {
                td.className = "td_b";
            } else {
                td.className = "td_w";
            }
            if (i == 0 && k != 0 && k != 9) {
                td.appendChild(h2);
                h2.innerHTML = array[k - 1];
            }
            if (i == 9 && k != 0 && k != 9) {
                td.appendChild(h2);
                h2.innerHTML = array[k - 1];
            }
            if (k == 9 && i != 0 && i != 9) {
                td.appendChild(h2);
                h2.innerHTML = i;
            }
            if (k == 0 && i != 0 && i != 9) {
                td.appendChild(h2);
                h2.innerHTML = i;
            }

            tr.appendChild(td);

        }
    }
}
shess();

function shessfigure() {
    let figures = ["Л", "К", "С", "Ф", "Кр", "С", "К", "Л"];
    let list = document.querySelectorAll('.table tr td');
    for (var i = 0; i < list.length; i++) {
        if (i > 10 && i < 19)
            list[i].innerHTML = "<h1 class='f_b'>" + figures[i % 10 - 1] + "</h1>";
        if (i > 20 && i < 29)
            list[i].innerHTML = "<h1 class='f_b'>п</h1>";
        if (i > 70 && i < 79)
            list[i].innerHTML = "<h1 class='f_w'>п</h1>";
        if (i > 80 && i < 89)
            list[i].innerHTML = "<h1 class='f_w'>" + figures[i % 10 - 1] + "</h1>";
    }
}

;
shessfigure();

function shessfigurepic() {
    let figures = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
    let list = document.querySelectorAll('.table tr td');
    for (let i = 0; i < list.length; i++) {
        if (i > 10 && i < 19)
            list[i].innerHTML = '<img src="./images/' + figures[i % 10 - 1] + 'b.png"</h1>';
        if (i > 20 && i < 29)
            list[i].innerHTML = '<img src="./images/pb.png"</h1>';
        if (i > 70 && i < 79)
            list[i].innerHTML = '<img src="./images/pw.png"</h1>';
        if (i > 80 && i < 89)
            list[i].innerHTML = '<img src="./images/' + figures[i % 10 - 1] + 'w.png"</h1>';
    }
}

if (confirm('Заменить буквы фигур картинками?')) {
    shessfigurepic();
}

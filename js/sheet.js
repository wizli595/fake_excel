let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");
let n_row = prompt("how many rows/tr you need");
let n_cel = prompt("how many cells/td you need");

for (let i = 0; i < n_row; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < n_cel; j++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }
  tblBody.appendChild(row);
}

tbl.appendChild(tblBody);

document.body.prepend(tbl);

let btn = document.querySelector("button");
let t_td = document.getElementsByTagName("td");
let content = document.getElementById("s_btn");
let text_in = document.getElementById("txt");
content.addEventListener(
  "click",
  (e) => text_in.removeAttribute("id"),
  text_in.setAttribute("class", "v_txt")
);
content.ondblclick = () => {
  text_in.setAttribute("id", "txt");
};
function bt() {
  n = prompt("td?");
  let del = document.getElementById("del");
  del.addEventListener(
    "click",
    (e) => (document.getElementsByTagName("td")[n - 1].textContent = "")
  );
  for (i = 0; i < t_td.length; ++i) {
    if (n == i + 1) {
      l = text_in.value;
      document.getElementsByTagName("td")[i].append(l);
    }
  }
}
let b_save = document.querySelector("#save");
b_save.onclick = () => {
  let c_tbl = document.querySelector("table").innerHTML;
  let win = window.open("", "", "height=700,width=700");
  let style = "<style>";
  style += "table {width: 100%;font: 17px Calibri;}";
  style += "table, tr, td {border: solid 1px #DDD; border-radius: 10px;;";
  style += "padding: 2px 3px;text-align: center;}";
  style += "td{ width: 50px;height: 50px}";
  style += "</style>";
  win.document.write("<html><head>");
  win.document.write("<title>Your sheet</title>");
  win.document.write(style);
  win.document.write("</head>");
  win.document.write("<body><table>");
  win.document.write(c_tbl);
  win.document.write("</table></body></html>");

  win.document.close();

  win.print();
};

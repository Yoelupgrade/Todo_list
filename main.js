const input$$ = document.querySelector(".tasks");
const button$ = document.querySelector(".btn-add");
const ul$ = document.querySelector("ul");
const empty$$ = document.querySelector(".empty");
const pstatus$ = document.querySelector("p");
const btnprint$ = document.querySelector(".btn-print");
const divprint = document.querySelector(".printtask");
const inputname$$ = document.querySelector(".name-list");
const allli$ = [];

	
let day = new Date();
let date$ = day.getDate() + '-' + ( day.getMonth() + 1 ) + '-' + day.getFullYear();
let time$ = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
let datetime = `Created: ${date$} ${time$}`;
// const savelist$ = [];
// const litext$ = [];

const list = () => {
  button$.addEventListener("click", (e) => {
    e.preventDefault();
    if (input$$.value == "") {
      alert("Enter at least one item in the list");
    } else {
      const li$ = document.createElement("li");
      li$.textContent = input$$.value;
      const deletbtn$ = document.createElement("button");
      deletbtn$.textContent = "X";
      deletbtn$.setAttribute("class", "btn-delete");
      allli$.push(li$);
      deletbtn$.addEventListener("click", () => {
        li$.remove();
        allli$.pop(li$);
        if (allli$.length === 0) {
          hiddenempty();
        }
      });
      hiddenempty(li$);
      li$.appendChild(deletbtn$);
      ul$.appendChild(li$);
      input$$.value = "";
    }
  });
};

//OCULTA Y MUESTRA 'NO PENDING TASKS'
const hiddenempty = (li) => {
  if (li) {
    pstatus$.style.visibility = "hidden";
  } else {
    pstatus$.style.visibility = "visible";
  }
};

//PINTAMOS LAS LISTAS DEBAJO
btnprint$.addEventListener("click", () => {
  const lis$ = document.querySelectorAll("li");
  if (lis$.length == 0) {
    alert("There are no items in the list");
  } else {
    const divlist = document.createElement("div");
    divlist.setAttribute("class", "containerprint");
    const divtitle$ = document.createElement("div");
    divtitle$.setAttribute("class", "divtitle");
    const h3$ = document.createElement("h3");
    h3$.textContent = inputname$$.value;
    const pdt = document.createElement("p");
    pdt.textContent = datetime;
    divtitle$.appendChild(h3$);
    divtitle$.appendChild(pdt);
    divlist.appendChild(divtitle$)
    for (const li of lis$) {
      let textli = li.innerText;
      let text = textli.substring(0, textli.length - 1);
      console.log(text);
      const P = document.createElement("p");
      P.textContent = text;
      divlist.appendChild(P);
    }
    divprint.appendChild(divlist);
    ul$.innerHTML = "";
    inputname$$.value = "";
  }
});

list();

document.getElementById('clickBox').onclick = function() {
    this.style.backgroundColor = 'lightblue';
    this.style.color = 'black';
    alert('Box Clicked!');
};

// Hover Event
document.getElementById('hoverBox').onmouseover = function() {
    this.style.backgroundColor = 'yellow';
    this.style.color = 'black';
    this.innerHTML = 'Mouse Over!';
};

document.getElementById('hoverBox').onmouseout = function() {
    this.style.backgroundColor = 'light blue';
    this.style.color = 'black';
    this.innerHTML = 'Hover over me!';
};

// Double-Click Event
document.getElementById('doubleClickBox').ondblclick = function() {
    this.style.backgroundColor = 'green';
    this.innerHTML = 'Double Clicked!';
};

// Change Event
document.getElementById('selectBox').onchange = function() {
    document.getElementById('valueBox').innerText = 'Selected: ' + document.getElementById('selectBox').value;
};
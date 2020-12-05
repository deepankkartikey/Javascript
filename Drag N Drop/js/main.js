const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
    console.log('start')
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    console.log('end')
    this.className = 'fill'
}


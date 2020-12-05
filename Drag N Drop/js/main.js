const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for(const empty of empties)
{
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

function dragStart() {
    //console.log('start')
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    //console.log('end')
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
    //console.log('OVER')
}

function dragEnter(e) {
    //console.log('ENTER')
    e.preventDefault()
    this.className+=' hovered'
}

function dragLeave() {
    //console.log('LEAVE')
    this.className='empty'
}

function dragDrop() {
    //console.log('DROP')
    this.className = 'empty'
    this.append(fill)
}
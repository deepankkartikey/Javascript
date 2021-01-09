console.log("Click-To-Copy");

function copyContent() {
    let content = document.getElementById('code');
    // console.log(content);
    const copyText = document.createElement('textarea');
    document.body.appendChild(copyText);
    copyText.innerHTML = content.innerHTML;
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);
    alert('Copied!');
}

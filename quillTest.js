// import Quill from "./node_modules/quill/dist/quill.js";

var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline'],
        ['code-block'],
        [{ align: '' }],
        [{ align: 'right' }],
        [{ align: 'center' }],
        [{ align: 'justify' }],
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
  });

  quill.on('text-change', update);
  var container = document.querySelector('#delta-container');

  console.log(container);

  update();
  
  function update(delta) {
    var contents = quill.getContents();

    console.log('contents', contents);

    var html = "contents = " + JSON.stringify(contents, null, 2);

    if (delta) {
      console.log('change', delta);
      html = "change = " + JSON.stringify(delta, null, 2) + "\n\n" + html;
    }

    container.innerHTML = html;
  }

  function createElement(containerId) {
    const elem = document.createElement('div');

    const container = document.querySelector(containerId);
    container.appendChild(elem);
  }
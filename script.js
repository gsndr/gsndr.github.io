(function () {
  /* ---------- Hex dump with attributions ----------
     Real bytes from a PE header (DOS header and DOS stub).
     Weights are illustrative: positive = toward "malware" (red),
     negative = toward "benign" (blue), between -1 and 1. */
  var rows = [
    {
      offset: '00000000',
      bytes: [0x4D, 0x5A, 0x90, 0x00, 0x03, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00],
      weights: [0.85, 0.75, 0.15, -0.1, 0.25, 0, 0, -0.05, 0.2, 0, 0, 0, -0.35, -0.3, 0, -0.05]
    },
    {
      offset: '00000040',
      bytes: [0x0E, 0x1F, 0xBA, 0x0E, 0x00, 0xB4, 0x09, 0xCD, 0x21, 0xB8, 0x01, 0x4C, 0xCD, 0x21, 0x54, 0x68],
      weights: [0.4, 0.45, 0.65, 0.3, -0.15, 0.55, 0.5, 0.8, 0.7, 0.2, -0.2, -0.25, 0.35, 0.3, 0.1, 0.05]
    }
  ];

  var grid = document.getElementById('dump');
  if (grid) {
    var maxOpacity = 0.6; // keeps the text readable on top of the color
    var index = 0;

    rows.forEach(function (row) {
      var line = document.createElement('div');
      line.className = 'dump-row';

      var off = document.createElement('span');
      off.className = 'dump-off';
      off.textContent = row.offset;
      line.appendChild(off);

      var cells = document.createElement('span');
      cells.className = 'dump-cells';
      var ascii = '';

      row.bytes.forEach(function (b, j) {
        var w = row.weights[j];
        var cell = document.createElement('span');
        cell.className = 'cell ' + (w < 0 ? 'ben' : 'mal');
        cell.style.setProperty('--w', (Math.min(Math.abs(w), 1) * maxOpacity).toFixed(3));
        cell.style.setProperty('--i', index++);
        cell.textContent = ('0' + b.toString(16).toUpperCase()).slice(-2);
        cells.appendChild(cell);
        ascii += (b >= 0x20 && b < 0x7F) ? String.fromCharCode(b) : '.';
      });
      line.appendChild(cells);

      var text = document.createElement('span');
      text.className = 'dump-ascii';
      text.textContent = ascii;
      line.appendChild(text);

      grid.appendChild(line);
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { grid.classList.add('on'); });
    });
  }

  /* ---------- Publication filter by topic ---------- */
  var buttons = document.querySelectorAll('.filter button');
  var pubs = document.querySelectorAll('.pub');
  var groups = document.querySelectorAll('.pub-group');

  function applyFilter(topic) {
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-topic') === topic ? 'true' : 'false');
    });
    pubs.forEach(function (p) {
      p.hidden = !(topic === 'all' || p.getAttribute('data-topic') === topic);
    });
    groups.forEach(function (g) {
      var visible = g.querySelectorAll('.pub:not([hidden])').length;
      g.hidden = visible === 0;
      var count = g.querySelector('.count');
      if (count) count.textContent = visible;
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { applyFilter(b.getAttribute('data-topic')); });
  });
})();

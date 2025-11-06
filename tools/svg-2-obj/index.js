// eslint-disable-next-line
const fs = require('fs');
// eslint-disable-next-line
const jsdom = require('jsdom');
// eslint-disable-next-line
const path = require('path');
const rootPath = process.cwd();
fs.readdir(path.resolve(rootPath, 'tools/svg-2-obj/svg'), function (err, files) {
  const icons = {};
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var filePath = path.join(rootPath, 'tools/svg-2-obj/svg', file);
    var fileName = file.split('.')[0];
    var fileExt = file.split('.')[1];

    if (fileExt === 'svg') {
      var buffer = fs.readFileSync(filePath);
      const fileContent = buffer.toString();

      var dom = new jsdom.JSDOM(fileContent);
      var svg = dom.window.document.querySelector('svg');
      var viewBox = svg.getAttribute('viewBox');
      var paths = [];
      var pathsHTML = dom.window.document.querySelectorAll('path');

      pathsHTML.forEach(function (element) {
        var pathD = element.getAttribute('d');
        if (pathD && pathD !== '') {
          paths.push(pathD);
        }
      });

      icons[fileName] = {
        path: paths,
        viewBox: viewBox,
      };
    }
  }

  var iconObj = JSON.stringify(icons);

  // template for icons.tsx
  // export const ICONS: TIcon = iconObj as const

  fs.writeFileSync(
    path.resolve(rootPath, 'src/constants/ICONS.ts'),
    `export const ICONS = ${iconObj} as const; 
     export type TIcons = keyof typeof ICONS;
     export const ICONS_OPTIONS = Object.keys(ICONS) as Array<keyof TIcons>;
    `,
  );
});

const fse = require('fs-extra');

const dir = './folder1'
fse.ensureDirSync(dir)
console.log ("created the directory 'folder1'");

const file = './folder1/file1.txt';
fse.ensureFileSync(file);
console.log ("created textfile file1.txt in the directory 'folder1'");

const dir2 = './folder2'
fse.ensureDirSync(dir2)
console.log ("created the directory 'folder2'");

fse.moveSync('./folder1/file1.txt', './folder2/file1.txt')
console.log ("moved 'file1.txt' from the directory 'folder1' to the directory 'folder2'");

const dir3 = './folder3'
fse.ensureDirSync(dir3)
console.log ("created the directory 'folder3'");

fse.copySync('./folder2/file1.txt', './folder3/file1.txt')
console.log ("copied 'file1.txt' from the directory 'folder2' to the directory 'folder3'");

fse.removeSync('./folder1')
fse.removeSync('./folder2')
fse.removeSync('./folder3')
console.log ("the directories 'folder1', 'folder2', 'folder3' and their files were successfully removed")
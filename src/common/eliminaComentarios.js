const fs = require('fs');
const path = require('path');


const removeComments = (code) => {
  
  code = code.replace(/\/\/.*$/gm, '');
  
  code = code.replace(/\/\*[\s\S]*?\*\
  return code;
};


const processDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      processDirectory(filePath); 
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.js')) {
      let code = fs.readFileSync(filePath, 'utf-8');
      code = removeComments(code);
      fs.writeFileSync(filePath, code);
      console.log(`Comentarios eliminados de: ${filePath}`);
    }
  });
};


const rootDir = 'C:/Users/Andres/Desktop/Bootcamp/Develop/CervezaFinal/grupo-2-backend'; 
processDirectory(rootDir);

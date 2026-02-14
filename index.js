const { fork } = require('child_process');
const path = require('path');

// Tentukan folder backend
const backendDir = path.join(__dirname, 'backend');
const scriptPath = path.join(backendDir, 'src', 'app.js');

console.log('--- Railway Bootstrapper ---');
console.log('Root Directory:', __dirname);
console.log('Current WorkDir:', process.cwd());
console.log('Target Script:', scriptPath);

// Jalankan backend sebagai child process dengan CWD yang benar
const child = fork(scriptPath, [], {
    cwd: backendDir,
    stdio: 'inherit'
});

child.on('exit', (code) => {
    console.log('Backend exited with code:', code);
    process.exit(code || 0);
});

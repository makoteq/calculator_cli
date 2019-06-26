module.exports = () => {
	const readline = require('readline');
	const chalk = require('chalk');
	const log = console.log;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.green('Please enter the first number : '), (answer1) => {
    rl.question(chalk.green('Please enter the second number : '), (answer2) => {
        var result = (+answer1) + (+answer2);
        log(chalk.yellow(result));
        rl.close();
    });
});

}
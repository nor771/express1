const{program}=require('commander');
const chalk =require('chalk');

let todos= [];

program
.version('1.0.0')
.description('simple to-do list');

program
.command('add <task')
.description('add a new task')
.action((task) =>{
    todos.push(task);
    console.log(chalk.green('added task : ${task}'));
});

program
.command('list')
.description('list all tasks')
.action(() => {
    console.log(chalk.blue('to-DO list:'));
    todos.forEach((task,index) => {
console.log('${index + 1}: ${task}');
    });
});

program.parse(process.argv);
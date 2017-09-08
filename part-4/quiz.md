# Part 4: Quiz time!

Q: When you run a command in the terminal, where does BASH look for that command?

A: $PATH

Q: On a UNIX computer, how do you stop a running process?

A: kill PID_of_target_process

Q: What packages do you have installed via homebrew?

A: brew list
autoconf	hub		pkg-config	zsh
gdbm		openssl		rbenv		zsh-completions
git		pcre		ruby-build

Q: On a UNIX computer, how do you find the process id of a running process?

A: ps, top, or htop

Q: In a terminal, what does control-c do?

A: Ctrl + C Kill whatever you are running

Q: What would be the result of typing the following commands?
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd

A: /Users/steve/bar

Q: How do you set an environment variable in your shell?

A: set | grep TEST_VAR

Q: What keyboard shortcut do you use to split the screen in your editor?

A: cmd-k + arrow key

Q: How do you create an alias in your shell?

A: alias lf 'ls -F'

Q: When a terminal command completes, how can you tell if it was successful or not?

A: if "`command` returns any error";
then
    echo "Returned an error"
else
    echo "Proceed..."
fi

Q: What does your ~/.gitconfig have in it? (paste the whole file here)

A: .DS_Store

Q: What is the difference between a relative and absolute path?

A: A relative path is a way to specify the location of a directory relative to another directory. An absolute path is defined as the specifying the location of a file or directory from the root directory(/).

Q: Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
Q: And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?

A: cp

Q: What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

A: cmd-n

Q: What files or folders do you want all git repositories to ignore?

A: .DS_Store or Thumbs.db

Q: What is the main difference between Array.map and Array.forEach in JavaScript?

A: Array.map() creates a new array with the results of calling a provided function on every element in the calling array.
Array.forEach() calls a provided function once for each element in an array, in order.

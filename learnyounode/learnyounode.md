# LEARNYOUNODE WORKSHOPS:

## 0: HELLO WORLD
Write a program that prints the text "HELLO WORLD" to the console (stdout).

## 1: BABY STEPS
Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

## 2: MY FIRST I/O!
Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.

## 3: MY FIRST ASYNC I/O!
Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.

## 4: FILTERED LS
Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

Keep in mind that the first arguments of your program are not the first values of the process.argv array, as the first two values are reserved for system info by Node.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

## 5: MAKE IT MODULAR
## 6: HTTP CLIENT
## 7: HTTP COLLECT
## 8: JUGGLING ASYNC
## 9: TIME SERVER
## 10: HTTP FILE SERVER
## 11: HTTP UPPERCASERER
## 12: HTTP JSON API SERVER

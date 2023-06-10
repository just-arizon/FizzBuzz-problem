# FizzBuzz-problem
A program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

To further simplify the solution to this problem, the program allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by 3 without a remainder print `Fizz` instead. For numbers that divide by 5 without a remainder print `Buzz` and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.

# Plan
A window pop up will appear on the user's window prompting him/her to enter a desired number, the desired result will be displayed on the console where the user can see the outcome of the program.

# PseudoCode
This are steps required to return the desired output. Here is an algorithm in pseudocode for this problem:
1. When a user inputs a number
2. Loop from 1 to the entered number
3. If the current number is divisible by 3 then print "Fizz"
4. If the current number is divisible by 5 then print "Buzz"
5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
6. Otherwise print the current number
# Divide and Conquer (Implement)
Now we know what are sub problem is, let's head up to implementing stage.

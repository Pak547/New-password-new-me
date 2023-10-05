# New Password New me

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
Our first JS project, the start of endless creativity and the incorportation of logic into code. This password generator is a viable way of randomly creating a password that fits ones criteria.
Through this project I felt a mastery of using functions, how to call on those functions, and implemeting my logic onto the code. The hardest of which was learning how to actually translate the logic into code. 

## Usage

Provide instructions and examples for use. Include screenshots as needed.

Click on the generate button to be prompted of your desired password length
![Prompt upon click](assets/images/images/Screenshot%202023-10-05%20030614.png)

If non-compatible input is put, Alert message will pop up stopping code
![Bad input alert](assets/images/images/Screenshot%202023-10-05%20030937.png)

Correct input is received then prompts the user for their desired criteria
![User input specials, upper, lower, numbers](assets/images/images/Screenshot%202023-10-05%20030830.png)

If not compatible, alert the user and return the prompt
![Bad input alert #2](assets/images/images/Screenshot%202023-10-05%20030920.png)

Generated password will then be shown if user has properly inputed everything.

## Credits

Troy Miller UCB bootcamp alumni
Mentored me throughout the process while teaching me and allowing me to input my own ideas.

## License

MIT License

Copyright (c) 2023 Pak547

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features
Generates a password on click
Customizable password can have special characters, numbers, upper-case letters, and/or lower-case letters

## Tests

You can try to break the code by writing letters instead of numbers. However because of NaN, we only accept numbers.
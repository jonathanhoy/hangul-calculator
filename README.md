<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Hangul Calculator
</h1>

## App overview

I built this app to help Korean language learners with memorizing Korean numbers in both the Sino and Pure/Native number systems. Understanding that each system is used in different situations, the app's intention is simply to practice memorization.

The app generates a math problem using numbers randomly picked from 1-100. The app compares the answer stored in state to the user's input. If the user is correct, they are notified. If the user is incorrect, the correct answer is displayed. In both cases, the user can click to generate a new question.

While not truly a calculator, the idea is to continuously expose the user to numbers to help memorize them. Considering there are two number systems there is twice as much to learn.

## Features

Users can limit the app to problems where the sum is in the range of 1-10. This allows users to focus on those numbers specifically.

Users can also change the answer format from a text input to a multiple choice-style question.

## Challenges

At the app's outset I had imagined math problems that covered the four basic arithmetic operations. I quickly realized that subtraction and division would require more effort than the value provided. The app randomly picks two numbers in the given range when generating a problem. Division would have required more effort to ensure that the answer is a whole number. The difficulties for subtraction are similar to that of division.

I settled for addition and multiplication only. However, I realized that multiplication doesn't quite cover answers that are closer to 100 than 1. I settled for addition only as it is the most flexible operation to allow for the most varied answers.

## Stretch goals

I would like to incorporate more components to practice using Korean numbers in different situations. One that I am thinking of is a clock component to practice telling time.
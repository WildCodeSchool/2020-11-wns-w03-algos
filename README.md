# Algo challenges!

## Challenge yourself!

**How to participate?**

- clone this repo
- install npm dependencies `npm i`
- run it! `npm start`

**And then, try to solve some algos:**

- challenges are located in the `./src/challenges` folder
- each challenge folder (from A1 to B5) contains a challenge! You'll find for each challenge : 
    - an `answer.ts` file with the challenge explaination, and the function to fill!
    - an `input.ts` file with the input that will be used!
    - an `output.ts` file with the output expected
- choose the challenge you want to work on, uncomment the `export default function ...` in the `answer.ts` file and try to solve it! Don't hesitate to read the challenge explaination and take a look, if needed to the `input.ts` and `output.ts` files! 

When you think you'r good, then just save you `answers.ts` file and check the result in the console! If the live reloading is not working anymore, just relaunch it!

**Difficulties**

- Challenges A1, A2, B1, B2 are quite easy
- Challenges A3 and B3 are medium level
- Challenges A4, A5, B4, B5 are pretty hard

## Example

*I did clone the repo, I did run `npm i` inside the repo and finally, I did run `npm start`! I'm ready to rock!*

*I want to work on the `./src/challenges/demo` challenge. I open `./src/challenges/demo/answer.ts` file to read the instructions, I take a look at the interfaces used at the end of the file. I'm still not completly sure about what I have to do, so I glance at `./src/challenges/input.ts` and `./src/challenges/demo/ouput.ts` files to see what will be submitted to my function, and what is the expected result!*

*Oh I understood what I have to do! So I uncomment the `export default...` lines and I put some logic into the function body! Like:*

```ts
export default function ({ topics }: { topics: Topic[] }): Topic[] {
    return topics.sort((a, b) => a.upvotes > b.upvotes ? -1 : 1);
}
```

*I press Ctrl+S, and I look at the terminal. Something went wrong, I can see that my output is reversed-sorted! How dummy I am! I just have to switch -1 and 1 in my condition!*

```ts
export default function ({ topics }: { topics: Topic[] }): Topic[] {
    return topics.sort((a, b) => a.upvotes > b.upvotes ? 1 : -1);
}
```

*I press Ctrl+S, and I look at the terminal: Congrats!!*

*Now, I just have to fill out the next 10 challenges 😂*

## Types

All the challenges are strongly typed, take a look at the interfaces definition to get more information! Each challenge folder contains its own interfaces.

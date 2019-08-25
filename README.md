# Friendly Competition

Live at [friendly-competition.herokuapp.com](https://friendly-competition.herokuapp.com/)

Compares a League of Legends player's recent in-game performance with that of their friends.

## What Is It?

Friendly Competition is different than services like OP.GG. Instead of only displaying stats from your recent League games, it shows how you stack up against people that you play with.

![Highlighting stats page](https://user-images.githubusercontent.com/31291920/50731968-2f41d980-113e-11e9-9eb1-b0e6056ed204.PNG)

## How It Works

Friendly Competition looks at your 10 most recent games (whether they are ranked, normals, ARAM, or anything else) and compares your performance to 3 other players who appear the most often in those games.

# To-Do List

## New Features

* Let user change how many previous games are analyzed
    * Riot's APIs let you pull info from previous 100 games
* Let user choose which players they'd like to be compared with
    * A user may not want to compare themselves with players that the app assumes they're friends with
    * Maybe a user wants to compare themselves with a professional player, for example

## Improvements

* Try learning and using Redux
    * I do a LOT of passing state down to child components through props
    * Even with a small project like this one, keeping track of which components need what props is hard. Using a global state manager would be helpful
* Cache/store results for better performance
    * This app hits Riot's APIs every. single. time. that the "Go" button is pressed. The one little endpoint takes SECONDS to respond 🐢
    * [op.gg](https://na.op.gg) returns info that it has stored in its own backend by default, and presents a "refresh" button
        * op.gg goes out and hits Riot's APIs when the "refresh" button is clicked to update what it stores
        * Could we do this?
            * Sure; it's a good idea
        * Do you know how?
            * I think so. Learn Redis? Throw response bodies in MongoDB and use those by default?
        * Why don't you do it, then?
            * ❌🕑
* Rethink use of color
    * Everything clickable is yellow (buttons, links), but important, or "highlighted," information is also yellow
    * This could be confusing. Users may try clicking on "highlighted" text

# Motivation

I mostly check my stats on op.gg to compare myself with my friends. I was tired of flipping back and forth between multiple op.gg tabs, and I wanted to learn the basics of Node.js, so I set out to build a service that showed me my stats relative to other people that I play with.

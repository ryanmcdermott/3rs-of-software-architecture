# 3 R's of Software Architecture

![software architecture pyramid](public/software-architecture-pyramid.png)

## Software Architecture
Software architecture is like happiness, we all want it but it can be very hard to define how to get it or what it even looks like. When we have it though, we can't imagine living without it.

After 50+ years of software engineering's existence, we haven't settled on an exact definition of what software architecture is. After all, it is the art in computer science -- persistently evading our most determined of efforts to define it. Even still, it's so important to the fabric of our industry and applications.

Despite our lack of agreement, there are a lot of definitions that can help bring us closer to a formalization of software architecture. Perhaps the most notable of such comes from the IEEE:

>"Architecture is the fundamental organization of a system embodied in its components, their relationships to each other, and to the environment, and the principles guiding its design and evolution." [IEEE 1471]

While this definition and others can bring clarity to the elements that make up architecture, they don't give us a mental model to use when developing our applications. This project however, aims to give just that. By looking at 3 particular "ilities" (readability, reusability, and refactorability), we can form a hierarchy of architectural attributes that can give us a framework for thinking about our system's code and architecture.

## What is This Project?
This project attempts to analyze 3 "ilities" of software architecture (readability, reusability, and refactorability), and show how we can form better and better code by thinking through these concepts hierarchically.

The code we will be looking at is a simple shopping cart application written in JavaScript, which makes use of two major libraries in the ecosystem: React and Redux. JavaScript and the aforementioned tools are by no means the only way to structure any particular application. They happen to be used by a lot of newcomers to the industry, and by many seasoned veterans, and this frequency of usage makes them a wonderful common language by which to discuss code quality. This isn't the only way to look at software, and it certainly can't give you an architecture, but it's something that can hopefully guide your thinking, as it has guided mine.

Without further ado, let's get started!

## 1. Readability
Readability is the simplest way of assessing code quality and it's the most straightforward to fix. It the most obvious thing you see right when you open up a piece of code, and it consists of:

* Formatting
* Variable names
* Function names
* Amount of function arguments
* Function length (number of lines)
* Nesting levels

There are a few easy rules to follow to fix problems associated with those:

* Invest in an automatic formatter. Find one your team agrees on and integrate it into your build process. There's nothing that wastes more time and money during code reviews than formatting arguments. Get a formatter and never look back! In this project we will use Prettier.
* Use meaningful and pronounceable variable/function names. Code is for people, and only incidentally for computers. Naming is the biggest thing that communicates the meaning behind the code.
* Limit your function arguments to between 1-3. 0 arguments implies you're mutating state or relying on state coming from somewhere else other than your caller. More than 3 arguments is just plain hard to read!
* There is no set number of lines that a function should be under, as this depends on what particular language you are coding in. The main point is that your function should do ONE thing, and ONE thing only. If your function, which calculates the price of an item after taxes, first has to connect to the database, look up the item, get the tax data, and then do the calculation, then it's clearly doing more than one thing. Long functions typically indicate too much is happening.
* More than two levels of nesting can imply poor performance (in a loop), and it can be especially hard to read in long conditionals. Consider extracting nested logic into separate functions.

Let's take a look at this first piece of our shopping cart application, to see what bad readability looks like:
```javascript
import React, { Component } from 'react';

// Inventory
class inv extends Component
{
  constructor()
  {
    super();

    // State
    this.state =
    {
      c: 'usd', // currency
      i: [ // inventory
        {
          product: 'Flashlight',
          img: '/flashlight.jpg',
          desc: "A really great flashlight",
          price: 100,
          id: 1,
          c: 'usd'
        },
        {
          product: 'Tin can',
          img: '/tin_can.jpg',
          desc: "Pretty much what you would expect from a tin can",
          price: 32,
          id: 2,
          c: 'usd'
        },
        {
          product: 'Cardboard Box',
          img: '/cardboard_box.png',
          desc: "It holds things",
          price: 5,
          id: 3,
          c: 'usd'
        }
      ]
    }
  }

  render () {
    return (
      <table style={{width: '100%'}}>
      <tbody>
      <tr>
      <th>
        Product
      </th>

      <th>
        Image
      </th>

      <th>
        Description
      </th>

      <th>
        Price
      </th>
      </tr>
        {this.state.i.map(function(i, idx) {
          return (
            <tr key = {idx}>
              <td>
                {i.product}
              </td>

              <td>
              <img src={i.img} alt=""/>
              </td>

              <td>
              {i.desc}
              </td>

              <td>
                {i.price}
              </td>
            </tr>
          );
        })}
    </tbody>
    </table>
    );
  }
}

export default inv;
```
There are a number of problems we can see right away:
* Inconsistent and unpleasing formatting
* Poorly named variables
* Disorganized data structures (inventory not keyed by IDs)
* Comments that are either unnecessary or serve the job of what a good variable name would

Let's take a look at how we could improve it:
```javascript
import React, { Component } from 'react';

export default class Inventory extends Component {
  constructor() {
    super();
    this.state = {
      localCurrency: 'usd',
      inventory: {
        1: {
          product: 'Flashlight',
          img: '/flashlight.jpg',
          desc: 'A really great flashlight',
          price: 100,
          currency: 'usd',
        },
        2: {
          product: 'Tin can',
          img: '/tin_can.jpg',
          desc: 'Pretty much what you would expect from a tin can',
          price: 32,
          currency: 'usd',
        },
        3: {
          product: 'Cardboard Box',
          img: '/cardboard_box.png',
          desc: 'It holds things',
          price: 5,
          currency: 'usd',
        },
      },
    };
  }

  render() {
    return (
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <th>
              Product
            </th>

            <th>
              Image
            </th>

            <th>
              Description
            </th>

            <th>
              Price
            </th>
          </tr>
          {Object.keys(this.state.inventory).map(itemId => (
            <tr key={itemId}>
              <td>
                {this.state.inventory[itemId].product}
              </td>

              <td>
                <img src={this.state.inventory[itemId].img} alt="" />
              </td>

              <td>
                {this.state.inventory[itemId].desc}
              </td>

              <td>
                {this.state.inventory[itemId].price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
```
This improved code now exhibits the following features:
* Code is consistently formatted using the automatic formatter Prettier
* Names are much more descriptive and it's easy to see we are looking at the beginnings of an Inventory application
* Data structures are properly organized, in this case the Inventory is keyed by ID. Bad readability can mean bad performance. If we had wanted to get an item from our inventory in our bad code example we would have had an O(n) lookup time but with Inventory keyed by ID we get an O(1) lookup, which is MUCH faster.
* Comments are no longer needed because good naming serves to clarify the meaning of the code. Comments are needed when business logic is complex, despite all simplifications that can be made. Comments are also needed when documenting functions/modules.

## 2. Reusability
## 3. Refactorability

--------------------------------------------------------------------------------
## Development
If you wish to expand on this project or contribute, run the following commands to install everything you need:

```
npm install -g create-react-app
npm install
npm run start
```

Open a browser and see the app running at `http://localhost:3000/`

## Contributing
Thank you for your contributions!

Before opening a friendly Pull Request, make sure you run the following and resolve any errors noted by the linter:

```
npm run fmt
npm run lint
```

Finally, change any relevant code examples in this `README.md` to reflect your changes.

## License
MIT

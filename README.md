# 3 Rs of Software Architecture

![software architecture pyramid](public/software-architecture-pyramid.png)

## Software Architecture

After 50+ years of software engineering's existence, we haven't settled on an exact definition of what software architecture is. After all, it is the art in computer science -- persistently evading our most determined of efforts to define it. Even still, it's so vital to the fabric of our industry and applications, that it's impossible to ignore.

Despite our lack of agreement, there are a lot of definitions that can help bring us closer to a formalization of software architecture. Perhaps the most notable of such comes from the IEEE:

>"Architecture is the fundamental organization of a system embodied in its components, their relationships to each other, and to the environment, and the principles guiding its design and evolution." [IEEE 1471]

While this definition and others can bring clarity to the elements that make up architecture, it doesn't give us a mental model to use when developing our applications. This project however, aims to give just that. By looking at 3 particular "ilities" (readability, reusability, and refactorability), we can form a hierarchy of architectural attributes that can give us a framework for thinking about our system's code and architecture. It won't give us an architecture per se, but it will guide you in thinking about what architecture works for your application.

## What is This Project?
This project is a guide that attempts to analyze 3 "ilities" of software architecture (readability, reusability, and refactorability), and show how we can form better and better code by thinking through these concepts hierarchically. This project is for any developer of any skill level, but if you are just starting out you will find more value in this than a seasoned practitioner.

The code we will be looking at is a very simple shopping cart application written in JavaScript, which makes use of two major libraries in the ecosystem: React and Redux. JavaScript and the aforementioned tools are by no means the only way to structure any particular application. They happen to be used by a lot of newcomers to the industry, and by many seasoned veterans, so their frequency of usage makes them a wonderful common language by which to discuss code quality. We will be developing our application one piece at a time and looking at Bad vs. Good versions at each step in 3 R hierarchy. You can find all the code in the `src` directory, and instructions about how to build this and develop on it are at the bottom of this README.

One more thing to reiterate: this project isn't the only way to look at software, and it certainly can't give you an architecture, but it's something that can hopefully guide your thinking, as it has guided mine.

Without further ado, let's get started!

## 1. Readability
Readability is the simplest way of assessing code quality and it's the most straightforward to fix. It is the most obvious thing you see right when you open up a piece of code, and it generally consists of:

* Formatting
* Variable names
* Function names
* Amount of function arguments
* Function length (number of lines)
* Nesting levels

These aren't the only things to consider, but they are immediate red flags. Fortunately, there are a few easy rules to follow to fix problems associated with those above:

* Invest in an automatic formatter. Find one your team agrees on and integrate it into your build process. There's nothing that wastes more time and money during code reviews than formatting arguments. Get a formatter and never look back! In this project we will use Prettier.
* Use meaningful and pronounceable variable/function names. Code is for people, and only incidentally for computers. Naming is the biggest thing that communicates the meaning behind your code.
* Limit your function arguments to between 1-3. 0 arguments implies you're mutating state or relying on state coming from somewhere else other than your caller. More than 3 arguments is just plain hard to read and refactoring it is difficult because there are so many paths your function can take the more arguments it has!
* There is no set number of lines that a function should be under, as this depends on what particular language you are coding in. The main point is that your function should do ONE thing, and ONE thing only. If your function, which calculates the price of an item after taxes, first has to connect to the database, look up the item, get the tax data, and then do the calculation, then it's clearly doing more than one thing. If you remember only one thing, remember this: long functions typically indicate too much is happening.
* More than two levels of nesting can imply poor performance (in a loop), and it can be especially hard to read in long conditionals. Consider extracting nested logic into separate functions.

Let's take a look at this first piece of our shopping cart application, to see what bad readability looks like:
```javascript
// src/1-readable/bad/index.js
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
* Inconsistent and unpleasant formatting
* Poorly named variables
* Disorganized data structures (inventory not keyed by IDs)
* Comments that are either unnecessary or serve the job of what a good variable name would

Let's take a look at how we could improve it:
```javascript
// src/1-readable/good/index.js
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
* It is consistently formatted using the automatic formatter Prettier
* Names are much more descriptive and it's easy to see we are looking at the beginnings of an Inventory application
* Data structures are properly organized, in this case the Inventory is keyed by ID. Bad readability can mean bad performance. If we had wanted to get an item from our inventory in our bad code example we would have had an O(n) lookup time but with Inventory keyed by ID we get an O(1) lookup, which is MUCH faster.
* Comments are no longer needed because good naming serves to clarify the meaning of the code. Comments are needed when business logic is complex, despite all simplifications that can be made. Comments are also needed when documenting functions/modules.

## 2. Reusability
Reusability is the sole reason you are able to read this code, communicate with strangers online, and even program at all. Reusability allows us to express new ideas with little pieces of the past.

That is why reusability is such an essential concept that should guide your software architecture. We commonly think of reusability in terms of DRY (Don't Repeat Yourself). That is one aspect of it -- don't have duplicate code if you can abstract it properly. Reusability goes beyond that though. It's about making clean, simple APIs that when your fellow programmer reads them, they say "Yep, I know exactly what that does!" Reusability makes your code a delight to work with, and means you can ship features faster.

We will look at our previous example and expand upon it by adding a currency converter to handle our inventory's pricing in multiple countries:

```javascript
// src/2-reusable/bad/index.js
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

    this.currencyConversions = {
      usd: {
        rupee: 66.78,
        yuan: 6.87,
        usd: 1,
      },
    };

    this.currencySymbols = {
      usd: '$',
      rupee: '₹',
      yuan: '元',
    };
  }

  onSelectCurrency(e) {
    this.setState({
      localCurrency: e.target.value,
    });
  }

  convertCurrency(amount, fromCurrency, toCurrency) {
    const convertedCurrency = amount *
      this.currencyConversions[fromCurrency][toCurrency];
    return this.currencySymbols[toCurrency] + convertedCurrency;
  }

  render() {
    return (
      <div>
        <label htmlFor="currencySelector">Currency:</label>
        <select
          className="u-full-width"
          id="currencySelector"
          onChange={this.onSelectCurrency.bind(this)}
          value={this.state.localCurrency}
        >
          <option value="usd">USD</option>
          <option value="rupee">Rupee</option>
          <option value="yuan">Yuan</option>
        </select>
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
                  {this.convertCurrency(
                    this.state.inventory[itemId].price,
                    this.state.inventory[itemId].currency,
                    this.state.localCurrency,
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
```

This code works, but merely working is not the point of code. Code is for people, and only incidentally for computers. That's why we need to look at this with a stronger lens than just analyzing if it works and it's readable. We have to look if it's reusable. Do you notice any issues?

There are 3 main issues:
* The Currency Selector is coupled to the Inventory component
* The Currency Converter is coupled to the Inventory component
* The Inventory data is defined explicitly in the Inventory component and this isn't provided to the component in an API.

Every function and module should just do one thing, otherwise it can be very difficult to figure out what is going on when you look at the source code. The Inventory component should just be for displaying an inventory, not converting and selecting currencies. The benefit of making modules and functions do one thing is that they are easier to test and they are easier to reuse. If we wanted to use our Currency Converter in another part of the application, we would have to include the whole Inventory component. That doesn't make sense if we just need to convert currency.

Let's see what this looks like with more reusable components:
```javascript
// src/2-reusable/good/currency-converter.js
export default class CurrencyConverter {
  constructor(currencyConversions) {
    this.currencyConversions = currencyConversions;
    this.currencySymbols = {
      usd: '$',
      rupee: '₹',
      yuan: '元',
    };
  }

  convert(amount, fromCurrency, toCurrency) {
    const convertedCurreny = amount *
      this.currencyConversions[fromCurrency][toCurrency];
    return this.currencySymbols[toCurrency] + convertedCurreny;
  }
}
```

```javascript
// src/2-reusable/good/currency-selector.js

import React, { Component } from 'react';

class CurrencySelector extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      localCurrency: props.localCurrency.currency,
    };

    this.setGlobalCurrency = props.setGlobalCurrency;
  }

  onSelectCurrency(e) {
    const currency = e.target.value;

    this.setGlobalCurrency(currency);

    this.setState({
      localCurrency: currency,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="currencySelector">Currency:</label>
        <select
          className="u-full-width"
          id="currencySelector"
          onChange={this.onSelectCurrency.bind(this)}
          value={this.state.localCurrency}
        >
          <option value="usd">USD</option>
          <option value="rupee">Rupee</option>
          <option value="yuan">Yuan</option>
        </select>
      </div>
    );
  }
}

CurrencySelector.propTypes = {
  setGlobalCurrency: React.PropTypes.func.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
};

export default CurrencySelector;
```

```javascript
// src/2-reusable/good/inventory.js

import React, { Component } from 'react';

class Inventory extends Component {
  constructor(props) {
    super();
    this.state = {
      localCurrency: props.localCurrency,
      inventory: props.inventory,
    };

    this.CurrencyConverter = props.currencyConverter;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      localCurrency: nextProps.localCurrency,
    });
  }

  render() {
    return (
      <div>
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
                  {this.CurrencyConverter.convert(
                    this.state.inventory[itemId].price,
                    this.state.inventory[itemId].currency,
                    this.state.localCurrency,
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Inventory.propTypes = {
  inventory: React.PropTypes.object.isRequired,
  currencyConverter: React.PropTypes.object.isRequired,
  localCurrency: React.PropTypes.string.isRequired,
};

export default Inventory;
```

```javascript
// src/2-reusable/good/index.js

import React, { Component } from 'react';
import CurrencyConverter from './currency-converter';
import Inventory from './inventory';
import CurrencySelector from './currency-selector';

export default class ReusableGood extends Component {
  constructor() {
    super();

    this.inventory = {
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
    };

    // Most likely we would fetch this from an external source if this were a real app
    this.currencyConversions = {
      usd: {
        rupee: 66.78,
        yuan: 6.87,
        usd: 1,
      },
    };

    this.state = {
      localCurrency: 'usd',
    };

    this.setGlobalCurrency = (currency) => {
      this.setState({
        localCurrency: currency,
      });
    };
  }

  render() {
    return (
      <div>
        <CurrencySelector
          setGlobalCurrency={this.setGlobalCurrency}
          localCurrency={this.state.localCurrency}
        />
        <Inventory
          inventory={this.inventory}
          currencyConverter={new CurrencyConverter(this.currencyConversions)}
          localCurrency={this.state.localCurrency}
        />
      </div>
    );
  }
}
```

This code has improved a great deal. Now we have individual modules for currency selection and conversion. Moreover, we can now provide the inventory data to our Inventory component. That means that we could download the inventory data, for example, and provide it to the Inventory component without ever having to modify its source code. This decoupling is the Dependency Inversion Principle, and it's a powerful way of creating reusable code.


Now, it's time for a bit of caution. Before diving in and making everything reusable, it's important to realize that reusability requires that you have a good API for others to consume. If you don't, then whoever uses your API could be hurt when you go to update your API because you realize it wasn't thought out well enough. So, when should code not be reusable?

* If you can't define a good API yet, don't make a separate module. Duplication is better than a bad foundation.
* You don't expect to reuse your function or module in the near future.

## 3. Refactorability
Code that is refactorable is code that you can change without fear. It's code that you can deploy on a Friday night, and come back to on Monday morning without any concern that your users encountered runtime errors.

Refactorability is about the system as a whole. It's about how your reusable modules connect together like LEGO pieces. If you change your Employee module and somehow it breaks your Reporting module, then you know you have some refactorability issues. Refactorability is the highest piece of the 3 R hierarchy, and it's the hardest to achieve and maintain. There will always be issues with any human system, and code is no different. However, there are things that we can do to make our code refactorable. So, what are they?

* Isolated side effects
* Tests
* Static types

We are using JavaScript, and not a typed alternative such as TypeScript, so we won't be able to see how static types can help. Suffice it to say, when your code has types such as you see below, you know that nobody can pass incorrect values to your code, which limits the number of possible errors your app can experience:

```javascript
// We can't get passed arrays, strings, objects, or any type other than a number
function add(a : number, b : number) {
  return a + b;
}
```

I highly recommend using a statically typed alternative to JavaScript for large applications. Types give you extra confidence beyond what your tests can provide. But types won't help everything, you still need to isolate your side effects and test your code.

You might be wondering what does it mean to isolate your side effects. And, what are side effects even?



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

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

The code we will be looking at is written in JavaScript and makes use of two major libraries in the ecosystem: React and Redux. JavaScript and the aforementioned tools are by no means the only way to structure any particular application. They happen to be used by a lot of newcomers to the industry, and by many seasoned veterans, and this frequency of usage makes them a wonderful common language by which to discuss code quality. I hope you find this project helpful in thinking about code, and I hope it brings us just a little closer to defining software architecture.

Without further ado, let's get started!

## 1. Readability
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

## Week 1 - HTML

### Exercise 1.1

1. When a user enters a URL in the browser, how does the browser fetch the desired result? Explain this with below in mind and demo this by drawing a diagram for same.
2. What is the main functionality of the browser?
3. High level components of a browser
4. Render engine and its use
5. Parsers (HTML, CSS)
6. Script processors
7. Tree construction
8. Order of script processing
9. Layout and painting

### Solution 1

<img width="900" alt="image" src="https://user-images.githubusercontent.com/13116007/174229601-74008f64-c43d-4dfd-a816-b6604ac408bd.png">

- When a user enters a URL like `https://github.com/rhlc`, browser has to figure out which server on the internet is hosting the site
- It does this by looking up the domain, github.com, to find the address
- Each an every device on the internet have a unique address called an IP address like 192.30.255.113, such numbers are obviously hard to remember
- That's where domain names come in, github.com is easier to remember than 192.30.255.113
- **Let's break the process into steps**

**1 - you type https://github.com/rhlc in your browser and press enter**

**Scheme**

- `https://` is the scheme, https stands for Hypertext Transfer Protocol Secure, this scheme tells the browser to make connection to server using Transport Layer Security, or TLS.
- TLS is an encryption protocol to secure communications over the internet. With HTTPS, the data exchanged between your browser and the server is **encrypted**
- You may have seen other scheme like `ftp://`, `mailto://`, `file://`
- Browser knows how to handle these protocols

**Domain**

- `github.com` is the domain name of site. It is the memorable address and points to specific server's IP address.

**Path**

- `https://github.com/rhlc` the Github user name 'rhlc' is the path on the server to requested resource

**Resource**

- `rhlc` is the name of resource on website you want to view, sometimes you'll see `.html` extension which indicates this is a static file on server. Without extension, it usually indicates the server generated this content.

**2 - browser looks up IP address for the domain**
<img width="500" alt="image" src="https://user-images.githubusercontent.com/13116007/174230684-95193cbb-471f-4f2f-b02e-72eee1a4dac1.png">

- The browser needs to figure out which server on the internet to connect to. To do that, it needs to lookup the IP address of the server hosting the website using the domain you typed in. It does this using a **DNS lookup**.
- Once the browser gets the DNS record with the IP address, it's time for it to find the server on the internet and establish a connection

**3 - browser initiates TCP connection with the server**

- Using the public internet routing infrastructure, packets from a client browser request get router through router, ISP, through an internet exchange to switch ISPs or networks, all using Transmission Control Protocol, to find server with IP address to connect to.
- This is very **roundabout** way to get there and it's not efficient
- So to avoid this, many sites use a Content Delivery Network, or CDN, to cache static and dynamic content closer to the browser.
- Once the browser has established a connection with the server, the next step is to send the HTTP request to get the resource, or the page

**4 - browser sends the HTTP request to the server**

- Now that browser has connection to the server, it follows the rules of communication for HTTP(s) protocol. It starts with sending an HTTP request to the server to request the contents of the page.
- The HTTP request contains a request line, headers and a body. Request line contains information that the server can use to determine what the client wants to do.
- Request line contains the following
  - a request method, which is GET, POST, PUT, PATCH, DELETE
  - the path, pointing to requested resources
  - the HTTP version to communicate with
- Once the server has received the request from the client, the server processes it and sends back a response.

**5. Server processes request and sends back the response**

- The server takes the request and base don the info in the request line, headers and body, decides how to process the request
- The response contains the following
  - a status line, telling client status of the request
  - response headers, telling the browser how to handle the response
  - the requested resource at that path, either content like HTML, CSS, JS, image files, data
  - in case of non static resources the server generates a dynamic resource, building HTML from fragments or templates and combining it with dynamic data to send back in the response, as text, so browser can render the page

**6. Browser renders the content**

- Once the browser has received the response from the server, it inspects the response headers for information on how to render the resource. The `Content-Type` header above tells the browser it received an HTML resource in the response body. And browser know what to do with HTML!

**Reference**

- [AWS article](https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/)

### Solution 2

- The main function of an web browser in to render HTML
- Web browser takes you anywhere on the internet. It retrieves the information from other parts of web and display it on your device. The info is transferred using HTML, which defines, how text, images and video are transmitted on the web
- This info needs to be shared and displayed in a consistent format so that people using any browser, anywhere in the world can see the info.
- Creating consistency between browsers, regardless of browser they choose, is called **web standards**
- [ref](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/)

### Solution 3

The browser's main components are
<img width="519" alt="image" src="https://user-images.githubusercontent.com/13116007/174231898-e4989998-a021-4d3b-8027-3f08faafd8ec.png">

1. **The user interface**: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
1. **The browser engine**: marshals actions between the UI and the rendering engine.
1. **The rendering engine**: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
1. **Networking**: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
1. **UI backend**: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
1. **JavaScript interpreter**. Used to parse and execute JavaScript code.
1. **Data storage**. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

- [ref](https://web.dev/howbrowserswork/#:~:text=The%20browser's%20high%20level%20structure%20%23&text=The%20user%20interface%3A%20this%20includes,UI%20and%20the%20rendering%20engine.)

### Solution 4

- The responsibility of the rendering engine is Rendering, that is display of the requested contents on the browser screen.

- By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension.

### Solution 5, 6, 7

- Parsing is the process of creating DOM tree, in general HTML Parser does following things in the order
  1. parse HTML character by character
  2. tokenize HTML tag by tag
  3. create the nodes of DOM from the tokens, and mount the nodes on the tree
  4. compute CSS rules and apply them on nodes of DOM tree

**HTML parse**
<img width="721" alt="image" src="https://user-images.githubusercontent.com/13116007/174246075-d1220489-a7ce-4866-8950-b57dd601ac29.png">

- As parsing response and chunked response body, our old friend, Finite-state machine will help us parsing HTML
- A **finite state machine** is a model of computation based on a hypothetical machine made of one or more states. Only one single state of this machine can be active at same time. It means the machine has to transition from one state to another in to perform different actions.

- Example a traffic light
- after a given time, red will change to green, green to yellow and yellow to red
- [ref](https://medium.com/@mlbors/what-is-a-finite-state-machine-6d8dec727e2c)

- Here for simplification number of states has been reduced
  <img width="651" alt="image" src="https://user-images.githubusercontent.com/13116007/174233866-a59d9db2-a1a2-4b34-8f5f-02e6e634471a.png">
- Since states are defined, HTML file can be tokenized by finite-state machine

**Tokenization**

- The machine reads the file, character by character. But it tokenizes it, tag by tag
- A global variable, currentToken, is created to save tag's information. Inside this token, there are several properties:
  - type - defines type of token, startTag, endTag, text, eof
  - tagName - HTML tag name, div, span, img
  - html attributes
- once the information of tag is collected, the function emit will be called, this function is the key part of creating DOM tree
- function emit has three steps
  - startTag step - create noe of DOM tree from token
  - text step - create text node from token with text type
  - endTag step - compute CSS and create the layout
- dom tree is composed of nodes. The root of the tree is the node with `document` type
- the type of node is different from type of token. There are only 3 types, `document`, `element` and `text`
- only the root has a `document` type, all the children of root owns an `element` type or `text` type

**Token emission**

- the function `emit` uses a stack (FIFO) to build the tree. All its items in it are nodes. The root of the DOM tree is set while it is initialised.
- once func `emit` is called, it will check the **top item** in the stack
- starting with first step, if token type is _startTag_, func `emit` will enter `startTag step`, create a node
- a node has
  - type, tagName, attributes, children
- as we can see, node keeps the info contained by the token, and more importantly, it creates the pointers pointed to its children
- once code is created, function will compute CSS, and set it as a child of top element in the stack. After that, this node is pushed into stack, except that the current token is a self closing tag.
- Important - first, the parent of current node is set, then, the node is pushed into stack for setting its children. Self closing tag hasn't children, so we don't push it
- second step - if token type is text, function `emit` will enter text step, and create a node, owing properties as followed
  <img width="697" alt="image" src="https://user-images.githubusercontent.com/13116007/174243540-2ca8e798-c4dc-4810-a538-3b5609b70561.png">
- only **data state in finite state machine** emits the text token. That means the function `emit` receives text char by char. The text content need to be create, right here
- once the text content is completed, the function `emit` set the text node as child of top element in stack. With help of other steps, _startTag_ step and _endTag_ step in func `emit`, it is easy to determinate whether the text content is completed ot not. In order to make text node accessible by others steps, the text node need to save by global var
- finally, third step, if token type is _endTag_, the function will pop the node

  - before that, it should check if the tag name of current node is corresponded to one of the **top element in the stack**. If two names are different, that means it's an unclosed tag, it should throw an error
  - if names are same, congrats, html tag is mounted on the DOM tree. On more thing, if the tag is `style`, then node inside the tag contains CSS rules. We need to register them.

- [ref](https://medium.com/swlh/toy-browser-html-parsing-and-css-computing-87d4667cf009)
- [ref 2](https://dev.to/saurabhdaware/html-parsing-and-rendering-here-s-what-happens-when-you-type-url-and-press-enter-3b2o)

**CSS computation**

- Used a package called css. The css rule can be parsed easily by func `css.parse`. It returns as Abstract Syntax Tree
- As the DOM tree is traversed from leaves to root, the order in CSS selector need to reversed too, because, the parent selector is always placed before children, like div .cls
- once an element node matches CSS rule, the specificity will be calculated, if higher than current css rule attached on element, override it.
- the css rule specificity are written in property, _computedStyle_, on the element
- the DOM tree is full created!

- After the paint, we see the content on the screen and the first time we see something other than a white screen is called 'First Paint'. The term First Paint is used in performance reports to show how long your website took to show something on the screen.

### Solution 8

- order of script processing depends on the order in which your code appears and whether you're encapsulating code into functions or objects

**Location of javascript on your Web Page**

- There are basically three locations into which we can attach JavaScript
  - Directly into the head of the page - in this case, code runs sequentially as soon as the file containing the code has loaded sufficiently for that code to be accessed
  - Directly into body of the page - same as above
  - From an event handler/listener - assigning a func to an event handler or listener does not result in function being run at the point at which it is assigned - provided that you're actually assigning the function itself and not running the function and assigning the value returned
  - functions that are attached to event handlers and listeners run when the event that they are attached to is triggered.

### Solution 9

**Layout**

- The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc) from The Render Tree and places the elements on the screen.

**Paint**

- After Layout, a Paint happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors.

---

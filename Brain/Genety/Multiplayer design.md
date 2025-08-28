#genety

https://www.figma.com/blog/how-figmas-multiplayer-technology-works/
## How multiplayer works in Figma and design ideas

When a document is opened, the client starts by downloading a copy of the file. each documents opened result in a process that will managed only one document.
This process will apply all the changes in the same order the websockets sends it. The document is saved on the RAM and persist in BDD or S3 each *x* time.

When all clients socket are closed, the process stay opened for *x* times and then save the DocumentState and destroy itself.

-> Example of the process's class:

| attributes/methods           |                                                       |
| ---------------------------- | ----------------------------------------------------- |
| **DocumentId**               | bdd document's id                                     |
| **Map<clientId, websocket>** | websocket for each clients                            |
| **DocumentState**            | document object and metadata                          |
| addClient                    | add a websocket client and give him the DocumentState |
| removeClient                 | remove a websocket client                             |
| applyChange                  | apply a change to document when received              |
| broadcast                    | broadcast changes to all clients                      |
| saveState                    | persist DocumentState each *x* times                  |
### changes:
changes are atomic at the property value boundary, so:
- When a change socket is received it contains only 3 elements:
	- "objectID": "frame-2"
	- "property": "background-color"
	- "value": "#ffffff"

the method applyChange will apply the change based on these three elements. 

Property changes on the client are always applied immediately instead of waiting for acknowledgement from the server since we want it to feel as responsive as possible.
So when i change a value i will not accepted change from the server since i estimated my change is the latest document state.

Example:
1. Client 1 change color to red.
2. red socket sends to the server.
3. Client 2 change color to yellow
4. yellow socket to the server
5. both clients received red socket but yellow don't apply the change.
6. both clients received yellow socket and all have yellow color since it's the last state.

this can be done with a **acknowledge: bool** in front. if i change my value, it take false, if the change come from the server it's true. 
the server send a change: 
- false: i keep my value, it's the last state.
- true: i accept server's change, it's the last state.

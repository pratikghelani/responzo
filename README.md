# responzo

`responzo` is a Node.js utility package designed to simplify response handling in API applications. It provides a set of predefined response structures for various HTTP status codes, making it easy to format consistent API responses for both success and error cases.

---

### Benefits of Using responzo
- **Consistency**: Standardize response structures across your application for both success and error scenarios.
- **Simplicity**: Reduce boilerplate code and improve code clarity by using pre-defined response formats.
- **Time-Saving**: Save time when dealing with common response patterns, focusing on building features instead of handling responses.

---

## Installation

To get started with `responzo`, follow the steps below.

###  Install the Package

You can install `responzo` via npm. In your project directory, run the following command:

```bash
npm install responzo 

```

## Usage
### Import ResponseHandler
```bash
const ResponseHandler = require('responzo');
```

###  Response Handler


###  Success Response
```bash
app.get('/success', (req, res) => {
  return res.status(200).json(ResponseHandler.success("Data fetched successfully", { id: 1, name: "John Doe" }));
});
```
###  Created Response
```bash
app.post('/created', (req, res) => {
  return res.status(201).json(ResponseHandler.created("Resource created successfully", { userId: 123 }));
});
```
###  Bad Request Response
```bash
app.get('/bad-request', (req, res) => {
  return res.status(400).json(ResponseHandler.badRequest("Invalid request", { missing: "name" }));
});
```
###  Validation Errort Response
```bash
app.get('/validation-error', (req, res) => {
  return res.status(422).json(ResponseHandler.validationError({ email: "Invalid email format" }));
});
```

###  Unauthorized
```bash
app.get('/unauthorized', (req, res) => {
  return res.status(401).json(ResponseHandler.unauthorized());
});
```

###  Forbidden
```bash
app.get('/forbidden', (req, res) => {
  return res.status(403).json(ResponseHandler.forbidden("Access denied"));
});
```

###  Not Found
```bash
app.get('/not-found', (req, res) => {
  return res.status(404).json(ResponseHandler.notFound("Resource not found"));
});
```
###  Conflict
```bash
app.get('/conflict', (req, res) => {
  return res.status(409).json(ResponseHandler.conflict("Conflict occurred"));
});
```
###  Server Error
```bash
app.get('/server-error', (req, res) => {
  return res.status(500).json(ResponseHandler.serverError("Internal Server Error"));
});
```
###  Too Many Requests
```bash
app.get('/too-many-requests', (req, res) => {
  return res.status(429).json(ResponseHandler.tooManyRequests());
});
```

## 🔗 Connect with Pratikkumar Ghelani
Expert in Node.js, React, Next.js, Express.js, MongoDB, MySQL, AWS, AI & ML, Android & iOS | SaaS | Delivering Scalable, High-Performance Applications | Custom Software Solutions Specialist

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratikghelani86/) 


# Buy Me a Coffee
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/pratikghelani)


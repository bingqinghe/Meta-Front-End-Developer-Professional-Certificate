# HTTP examples

This reading explores the contents of HTTP requests and responses in more depth.

### Request Line

Every HTTP request begins with the request line.

This consists of the HTTP method, the requested resource and the HTTP protocol version.

<span style="background-color: #dcfafa;"><span style="font-weight:600; color: #212121">GET /home.html HTTP/1.1</span></span>

In this example, GET is the HTTP method, /home.html is the resource requested and HTTP 1.1 is the protocol used.

### HTTP Methods

HTTP methods indicate the action that the client wishes to perform on the web server resource.

Common HTTP methods are:

| **HTTP Method** | **Description** |
|:-----------------|:-----------------|
|GET   |The client requests a resource on the web server.|
|POST  |The client submits data to a resource on the web server.|
|PUT   |The client replaces a resource on the web server.|
|DELETE|The client deletes a resource on the web server.|
|PATCH | The client partially updates a resource on the web server.|

### HTTP Request Headers

After the request line, the HTTP headers are followed by a line break.

There are various possibilities when including an HTTP header in the HTTP request. A header is a case-insensitive name followed by a: and then followed by a value.

Common headers are:

```JSON
Host: example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en
Content-type: text/json
```

- The **Host** header specifies the host of the server and indicates where the resource is requested from.
- The **User-Agent** header informs the web server of the application that is making the request. It often includes the operating system (Windows, Mac, Linux), version and application vendor.
- The **Accept** header informs the web server what type of content the client will accept as the response.
- The **Accept-Language** header indicates the language and optionally the locale that the client prefers.
- The **Content-type** header indicates the type of content being transmitted in the request body.

### HTTP Request Body

HTTP requests can optionally include a request body. A request body is often included when using the HTTP POST and PUT methods to transmit data.

```JSON
POST /users HTTP/1.1
Host: example.com

{
    "key1":"value1",
    "key2":"value2",
    "array1":["value3","value4"]
}
```

```JSON
PUT /users/1 HTTP/1.1
Host: example.com
Content-type: text/json 

{
    "key1":"value1"
}
```

### HTTP Responses

When the web server is finished processing the HTTP request, it will send back an HTTP response.

The first line of the response is the status line. This line shows the client if the request was successful or if an error occurred.

<span style="background-color: #dcfafa;"><span style="font-weight:600; color: #212121">HTTP/1.1 200 OK</span></span>

The line begins with the HTTP protocol version, followed by the status code and a reason phrase. The reason phrase is a textual representation of the status code.

### HTTP Status Codes

The first digit of an HTTP status code indicates the category of the response: Information, Successful, Redirection, Client Error or Server Error.

The common status codes you'll encounter for each category are:

#### *1XX Informational*

| **Status Code** | **Reason Phrase** | **Description**|
|:-----------------|:-----------------|:-----------------|
|100|Continue|The server received the request headers and should continue to send the request body.|
|101|Switching Protocols|The client has requested the server to switch protocols and the server has agreed to do so.|

#### *2XX Successful*

| **Status Code** | **Reason Phrase** | **Description**|
|:-----------------|:-----------------|:-----------------|
|200|OK|Standard response returned by the server to indicate it successfully processed the request.|
|201|Created|The server successfully processed the request and a resource was created.|
|202|Accepted|The server accepted the request for processing but the processing has not yet been completed.|
|204|No Content|The server successfully processed the request but is not returning any content.|

#### *3XX Redirection*

| **Status Code** | **Reason Phrase** | **Description**|
|:-----------------|:-----------------|:-----------------|
|301|Moved Permanently|This request and all future requests should be sent to the returned location.|
|302|Found|This request should be sent to the returned location.|

#### *4XX Client Error*

| **Status Code** | **Reason Phrase** | **Description**|
|:-----------------|:-----------------|:-----------------|
|400|Bad Request|The server cannot process the request due to a client error, e.g., invalid request or transmitted data is too large.|
|401|Unauthorized|The client making the request is unauthorized and should authenticate.|
|403|Forbidden|The request was valid but the server is refusing to process it. This is usually returned due to the client having insufficient permissions for the website, e.g., requesting an administrator action but the user is not an administrator.|
|404|Not Found|The server did not find the requested resource.|
|405|Method Not Allowed|The web server does not support the HTTP method used.|

#### *5XX Server Error*

| **Status Code** | **Reason Phrase** | **Description**|
|:-----------------|:-----------------|:-----------------|
|500|Internal Server Error|A generic error status code given when an unexpected error or condition occurred while processing the request.|
|502|Bad Gateway|The web server received an invalid response from the Application Server.|
|503|Service Unavailable|The web server cannot process the request.|

### HTTP Response Headers

Following the status line, there are optional HTTP response headers followed by a line break.

Similar to the request headers, there are many possible HTTP headers that can be included in the HTTP response.

Common response headers are:

```JSON
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```

- The **Date** header specifies the date and time the HTTP response was generated.
- The **Server** header describes the web server software used to generate the response.
- The **Content-Length** header describes the length of the response.
- The **Content-Type** header describes the media type of the resource returned (e.g. HTML document, image, video).

### HTTP Response Body

Following the HTTP response headers is the HTTP response body. This is the main content of the HTTP response.

This can contain images, video, HTML documents and other media types.

```JSON
HTTP/1.1 200 OKDate: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html 

<html>
    <head>
        <title>Test</title>
    </head>
    <body>Test HTML page.</body>
</html>
```

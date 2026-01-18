---
title: "Nginx : Logging Request and Response Body Only on Failure"
description: "Article about Nginx : Logging Request and Response Body Only on Failure"
publishDate: "2016-01-21T19:37:35+00:00"
tags: ["software development"]
---

Recently, I had to track down some bugs which were happening in the current system that I am working on. The problem was, the issue was occurring enough to raise the flags, but could not reproduce very easily. The system I am currently working on it has dozens of HTTP application, and it is not easy to track down the exact origin of the problem. We are stashing our logs in elastic search, and over kibana it was visible that users were receiving HTTP 500 &#8211; Internal Server Error. After getting exhausted, I want it to tap into the HTTP communication and get more detail, so at least, I can identify the issue.

Nginx is in front of all services, so it would be a relatively easy trick. But that meant logging request and response body of every request, which are unnecessary, so the natural question came into mind was “_**Can I log request and response body of failures only?**_”

<!--more-->

I have asked my colleague, who has immediately said “_why not_”, after some reading and googling, we both have accepted yes it is doable. Lucky me, he actually did stick it to the job until he completed, while me, well that is irrelevant…

To log the request and response body, we needed _**ngx_lua**_ module, which you can find detailed information about it [here](https://github.com/openresty/lua-nginx-module). So the task was to, assign request and response body to nginx variables, in a case of failures. As we already had an overview incoming request and HTTP statutes, we took a lazy approach and filtered anything that is not a healthy response, (e.g. 200, 201 or 302). This allowed us to see anything that is smelling fishy. So the end configuration did look like this for server block of nginx.conf:


[View the code on Gist](https://gist.github.com/enginyoyen/d6e3ae15f055209066e0)

If HTTP status codes were to be 200, 201 or 302 nginx variables **_error\_request\_body_** and **_error\_response\_body_** would stay empty therefore there would be no log for health responses from the HTTP applications. As you can see location block contains the log format which is to be specified as follow:

[View the code on Gist](https://gist.github.com/enginyoyen/d6e3ae15f055209066e0)

From this point on, remaining work was to change to grok pattern, restart logstash and so on, so logs can be parsed and persisted in elastic search.

While this is might be a good approach to figuring out some problems, I would suggest that it should be used wisely, so you do not start logging any sensitive user information.
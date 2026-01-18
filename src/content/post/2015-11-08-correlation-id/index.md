---
title: "Correlation ID"
description: "Article about Correlation ID"
publishDate: "2015-11-08T18:48:47+00:00"
tags: ["software development"]
---

A Correlation ID refers to an ID that uniquely links discrete events together across different services, which has a single origin. For instance, a single user action, such as ordering an item, could generate multiple service calls. The following diagram gives an example of this, a user orders an item, and different events are propagated through the system. These events are all linked to a single user action, and each service is responsible for completing its task.

<!--more-->

<img class="aligncenter wp-image-158 size-full" src="./diagram.png" alt="Correlation ID" width="744" height="317" srcset="https://enginyoyen.com/assets/article_images/wp-content/uploads/2015/11/diagram.png 744w, https://enginyoyen.com/assets/article_images/wp-content/uploads/2015/11/diagram-300x128.png 300w" sizes="(max-width: 744px) 100vw, 744px" />

The idea is to trace events that are being propagated through your system by assigning a single unique ID, a Correlation ID. By generating and passing along the correlation ID in each request, you create traceable events in your system. Correlation ID should be immutable, meaning it should not be modified. Furthermore, this ID should not represent any part of real data(e.g. user data, authorization details, etc.). The services you implement, of course, it should be aware of this feature of your system, so they could use this information in case of error or warning. A common approach to makes use of correlation IDs is to log the transaction in each service, collect logs, and transfer to a centralised logging solution. This will give you capability visualise and find particular issues or correlation IDs very quickly and easily.
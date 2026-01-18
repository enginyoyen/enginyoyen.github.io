---
title: "On Monolithic Architectures"
description: "Article about On Monolithic Architectures"
publishDate: "2015-01-11T22:35:52+00:00"
tags: ["software development"]
---

Let&#8217;s imagine that you are a software developer and it is your first day in your new job. A fantastic product, a good company, nice people around, and hopefully, a good salary. Now, after while, reading hundred of pages documents about architecture, software design guidelines, good or bad decisions, you find out that the product, that the company has it, is a single project which has approximately 4 million lines of code. Assuming products works great, what would be your reaction?

<!--more-->

This style of software development called **monolithic architecture**. In general, a monolithic application is a single unit of application, which all the business logic, user interface, data access code are combined into a single application. The characteristic of the monolith application is that they are responsible not just for a particular task, but they perform all computation that is necessary to complete a particular function. Monolithic style software development does not only apply to the web applications, it also applies to the desktop applications or software that runs on particular hardware.

Current software development environment, IDEs or other development tools, support the development of monolithic style applications. However, with the rise of recent IT automation tools, cloud infrastructure, and [dev-ops movement](https://enginyoyen.com/on-devops/ "On DevOps") allowed easy operation of de-coupled services or called **micro-services**. A micro-service is small, discrete, isolated, lightweight application that is a stateless service and can be deployed separately. To put simply, in micro-service architecture, responsibilities are divided into services and are running as a separate processes. Therefore, the question is whether monolithic style of development has any benefit. Here are the some of the advantages and disadvantages of monoliths:

**Maintenance and Feature Delivery**
  
Because of the larger code base new feature requires changes in existing code base. Even if the code base is modular, there are still changes in existing functional code. This means any new change is a potential cause of a new bug. This is a well-known fact and it causes fear of releasing software, therefore, increases the delivery time for each new feature. This is also the reason why you may hear some companies has a release cycle of 6 or 9 months, or they release software twice a year.

**Deployment**
  
Deployment of the application is easy as it is a single application. However, the deployment is not frequent because of the maintenance and feature delivery can be slow.

**Response Time**
  
Each feature in the system requires and/or depends on other functionalities, in monolithic style because application is a single unit these are process calls which are very fast.

**Isolation**
  
Errors that a piece of code, function or class can not handle, can affect an entire system. For instance, if there is a small uncaught exception in the system which causes a memory leak, eventually your application will run out-of-memory.

**Scaling**
  
Scaling a monolith is easy by running multiple instances of the applications. However, in each and every system there are some resources which are not used often as others, for instance, in an e-commerce system check-out cart is used more than a wishlist. That means there is a resource which is not used or used very little in every instance of the application.

**Testing**
  
Testing monolith is easier than testing distributed system.

**IDE**
  
Current IDEs that are being develop support the development of monolithic style applications. However, larger the code base gets the slower the IDE gets, which causes the frustration between developer and slow them down while programming.

**Technology Dependency**
  
Large applications require a longer time to build, once it is built it has a business value and it requires maintenance and delivery of new features. That also means there is a long-term commitment to the technology, which is a problem. For instance: companies, who developed software with flash/flex platform in a day when the flash platform was used very often, has committed it to use it further. However, popularity of HTML5 start destroying flash platform, and as a result community stop using flash. The problem is those companies, who had built a product and invested several years in a product now, have to change their product to some other technology because platform they are using, is no longer supported. Therefore, depending on a single technology or framework can be quite risky.

**Long Learning Curve**
  
If the code is not modular enough and separation between different features are not clear enough it will increase the learning curve when there is a new team member.

**Upshot!**
  
This style of software development brought great products to market, and there are companies which were and are very successful with building their software as a single unit. This does not mean this is the best approach, neither it means it is the bad one. It means, there is no one size that fits all, and in my opinion different style of software architecture does not only depends available tools and new technologies it also depends on the culture that people work in.

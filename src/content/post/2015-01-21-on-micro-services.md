---
title: "On Micro-Services"
description: "Article about On Micro-Services"
publishDate: "2015-01-21T20:29:30+00:00"
tags: ["software development"]
---

A **micro-service** is a small, discrete, isolated, stateless, lightweight application that can be deployed separately from other services that depend on it. In this sense, the term **micro-service architecture** refers to an approach to structuring a single software application as a group of small services, each running in its own process and communicating with lightweight mechanisms.

<!--more-->

It has been a trending term in the last couple of years, despite the ideas behind the micro-services, which is modularization, it date backs to the 60s and 70s. Modularization or modular programming is a design principle that stresses separating a software functionality into distinct, independent, interchangeable modules which each of them addresses a separate concern. Of course, there have been different techniques starting from object-oriented programming to OSGI, from shared-libraries to SOA. And goes without saying, some companies have succeeded and brought good products to market and some have failed.

In my opinion, the reason for micro-services, to be trending recently is the development of cloud solutions and IT automation. Only recently(last couple of years) developers had the chance to fire machines, use cloud services(e.g. AWS, heroku, private cloud) and use IT automation tools to manage server configuration. As a result of this idea of [**DevOps**](https://enginyoyen.com/on-devops/ "On DevOps") has been introduced and used in software teams, which simply states the joint operation of developers and operations: _If you are developing the code you are also responsible for putting in the production_. Development of cloud solutions and IT automation, as well as DevOps movement, allowed software developers to increase the separation of concern not by re-structuring the code but by creating a multiple small services out of a single software product.

### What are the benefits of micro-services:

**Ease of Maintenance:** Update and feature delivery is relatively easy, as the code base is small.

**Isolation:** Errors, that a single micro-service have, does not bring the whole system down, if one of the services is unavailable than rest shall function without any problem. For instance, a user should be able to buy an item despite a memory leak in a wishlist service(let&#8217;s assume it is a service) which makes wishlist service crash regularly.

**Deployment:** As the code base is small and responsibilities are divided between services, and it is isolated, each service can be deployed individually, very fast.

**Scaling:** Scaling single service is much easier than scaling whole system, furthermore scaling a service depends on the demand, if Service A has higher demands than Service B, only service that should be scale is Service A.

&nbsp;

### What are the disadvantages of micro-services:

**Testing:** As systems are composed of many small services, it is hard to test all components.

**Response Time:** As each service depends on another service, to complete certain functionality there is latency of completing certain task because each service is running its own process and communication are done either via API call or via lightweight messaging.

**Operation:** There is an operation overhead, meaning every single service requires its own code repository, a deployment pipeline, host, monitoring, logging, etc. However, with a proper IT automation in place overhead will be relatively small.

&nbsp;

### What are the requirements to build the micro-services:

**Continuous Integration and Delivery:** So developers do not spend time with deployment and they are informed when something is broken.

**Infrastructure automation:** So it is easy to provision machines and scale, and reduce the overhead of operations. Tools such as Ansible, Chef, Puppet, SaltStack are good enough to make life very easy.

**Cooperation of development and operations team, so to say DevOps:** The development team should know how infrastructure works and operation team should learn why developers taking decision and building software in a particular way.

**Logging and Visualization:** Distributed small services, you need to know what is going on when one of the systems start behaving strange. Tools such as Logstah, Kibana, Elasticsearch should be sufficient enough to begin with. If there is no proper logging solution then every time a problem occur you will be looking needle in a haystack.

**Extensive Monitoring:** Distributed small services, you must know when something is failing immediately.

**Each** Micro-Service: Has its own, code repository, the build pipeline, host.

&nbsp;

There is no single way to develop software, and for sure, micro-services is not for everyone. It is also not a matter of having enough resources, in my opinion it is the matter of having the right culture that allows you to grow, experiment, fail and learn from your failures to build a better software.

&nbsp;

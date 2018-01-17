---
id: 191
title: 'Book: Building Microservices with Spring Boot'
date: 2017-02-03T11:05:27+00:00
author: Engin Yöyen
layout: post
guid: https://enginyoyen.com/?p=191
permalink: /book-building-microservices-with-spring-boot/
dw-grid:
  - normal
dw-feature-image:
  - 'yes'
categories:
  - Software Development
---
About year and a half/two years ago, I was in need of a new framework for developing standalone services and act as an HTTP interface to incorporate logic. The company I started working was strictly Java, and in my previous work, we were using Scala language with Play Framework. I was quite happy with Play Framework, but somehow I had the feeling, I need something way more flexible than Play. Also, Play Framework feels strange using in Java.

I was familiar with Spring CDI before, and to be honest, I find it terrible experience to manage dependencies with Spring and trying to chase an in issue with inconsistent dependencies. I was very(very) suspicious, but on the other hand, comments were good so I try it. I was very surprised by the simplicity, and I kept trying different modules to see when it is going to break. More I try it, more I started to realize that it is a good tool to build microservices.

<!--more-->

Spring as a mature framework does provide most of the necessary modules to accomplish what is needed to build a microservice architecture. So as a developer you can add necessary modules, wire it via dependency injection and start using it without changing the context. With Spring, you can connect relational or NoSQL datastore, work with AMQP, build your authentication and authorization, use configuration management, circuit breakers, intelligent routing, etc. Most of the technologies you may need for developing microservices are provided via Spring.

So I decided to dive in more and more and eventually decided to put into a writing. I choose the Leanpub as a publishing platform, so I can write whenever I want. I believe the book is mature enough to be consumed and hoping it will help people in their journey to build microservices.

You can access the book on the Leanpub, and download the sample chapter.

<a title="Building Microservices with Spring Boot" href="https://leanpub.com/building-microservices-with-spring-boot" target="_blank">https://leanpub.com/building-microservices-with-spring-boot</a>

Of course, you are welcome to drop a comment.
  
Take care
---
id: 188
title: 'Service Discovery : Choosing the Right Tool'
date: 2016-11-17T15:47:54+00:00
author: Engin Yöyen
layout: post
guid: https://enginyoyen.com/?p=188
permalink: /service-discovery-choosing-the-right-tool/
dw-grid:
  - normal
dw-feature-image:
  - 'yes'
categories:
  - Software Development
---
You can most likely read hundred of blog posts, regarding which technology is good and which one is even better. The problem most often is that people who write about technology(that includes me as well), are approaching these topics subjectively. The result is the same problem can be solved by two people completely differently by using different technology stack and the method.

<!--more-->

That being said, there are several technologies you can use for service discovery, some famous ones are:

  * Consul: <a title="https://www.consul.io" href="https://www.consul.io" target="_blank">https://www.consul.io</a>
  * Eureka: <a title="https://github.com/Netflix/eureka" href="https://github.com/Netflix/eureka" target="_blank">https://github.com/Netflix/eureka](https://github.com/Netflix/eureka</a>
  * ZooKeeper: <a title="https://zookeeper.apache.org" href="https://zookeeper.apache.org" target="_blank">https://zookeeper.apache.org</a>
  * etcd: <a title="https://github.com/coreos/etcd" href="https://github.com/coreos/etcd" target="_blank">https://github.com/coreos/etcd</a>
  * SmartStack : <a title="https://github.com/airbnb/nerve" href="https://github.com/airbnb/nerve" target="_blank">Nerve https://github.com/airbnb/nerve</a>, Synapse : <a title="https://github.com/airbnb/synapse" href="https://github.com/airbnb/synapse" target="_blank">https://github.com/airbnb/synapse</a>

Your requirements most likely to be different than requirements of other companies, therefore you should not try to make a match between what is written in a blog post or in a book but rather try to devise your own current and possibly future requirements. Here is a simple list of things that you can use as a starting point and you should feel free to add more items:

  * Are you going to program only in one programming language?
  * Do you have a legacy system?
  * Are you going to include off-the-shelf software in your service discovery chain?
  * Do you need an API for service discovery system(e.g. HTTP, DNS)
  * Do you want to use non-invasive methods or are you going to bake service discovery logic in applications?
  * Do you need to store application configuration?
  * Do you need to do blue-green deployment?
  * Is your system going to run in multiple data centers?
  * What are your security constraints or do you need an Access Control List?
  * Are you looking for vendor support?

Let&#8217;s me just entertain an idea by selecting a single item from the list \*vendor support\*? You can, for instance, create a \`Eureka\` server with Spring Boot in a couple of minutes and connect your services. But what happens when you have a trouble with the \`Eureka\`, is not like you are going to call the Netflix to ask for help, sure you can open bug ticket, but there is no guarantee that issue will be solved immediately. Let&#8217;s assume, Netflix does not do any further implementation on \`Eureka\`, are you willing to take the project under your hood and develop further? This might be far fetched, but service discovery is going to be in the center of your system, holding everything together you do not want to be in a situation where you are going to have problems. It is different to say you are using a library from Netflix, which you can simply keep in your maven artifact-storage or vs keeping the service discovery system up and running for a long term.

My personal favorite despite being SmartStack, I would simply at the moment choose Consul because it does fulfill many of the requirements and flexible enough to solve many different problems and use cases.

**Remember**: Ignore my technology selection, hence I am the writer.
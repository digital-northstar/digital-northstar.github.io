---
title: Building a Common Modeling Language
publishDate: "2026-07-14"
tags: ["Pragmatic Enterprise Modeling", "architecture"]
slug: building-a-common-modeling-language
description: "A common modeling language is like speaking the same language: the message is transmitted with more confidence"
episode: 2
---

> The best architecture models are the ones that make people forget they are looking at a model.

In the previous episode I introduced an idea that has shaped my work as an enterprise architect for many years.

Architecture is not about drawing diagrams, it is about improving communication.

Diagrams, models and tools all exist to support conversations between people with different responsibilities, 
different backgrounds and different concerns. The model is not the end goal, it is the understanding it creates. 
That naturally raises another question: if architecture is about communication, how do we make sure everyone is speaking the same language?

After working in architecture teams for many years, I've noticed that almost every mature team encounters the same challenge sooner or later.
Imagine you join a new architecture team. The team consists of experienced architects.
Everyone is motivated, everyone has years of experience and everyone is familiar to some degree with ArchiMate.

You expect that creating architecture models will therefore be straightforward.
The first few weeks confirm that expectation, the diagrams look professional. The repository already contains hundreds of elements and views.
The notation is familiar, everything seems to be in place.

Then you start working on your first assignment, you search for examples. One application is modeled as an Application Component, decomposed in smaller Components.
Another architect models a very similar application differently, focussing on Application Services, another one details the internals with Application Functions.

Business Capabilities and Processes appear under different names, some seem to mean the same, but with unrelated names. Relationships are used inconsistently, with no clear
reason why the choice was made like that.

Some diagrams only show business concepts, while others mix business, applications and infrastructure on a single page including dozens of relationships.

Every individual model makes sense, yet taken together, something feels wrong. Nobody made mistakes, nobody ignored the standard,
nobody intentionally created confusion, but everyone simply developed their own modeling style. Over time those small differences accumulate until the 
repository slowly loses one of its most important qualities: consistency.

As a consequence, new architects need longer to become productive, reviews become discussions about notation instead of architecture,
and readers need to interpret the intentions of the author before they can understand the architecture itself. Indications for this: many note elements, or legends that
explain what this particular border color means in this diagram, not to be confused with the same color border on another diagram.

That is exactly the situation we want to avoid.

## Speaking the Same Language

When I explain this challenge to new architects, I often compare architecture modeling to learning a foreign language.

Think about learning French, German or Spanish. In the beginning everyone learns the same vocabulary and the same grammar.

Once those foundations are mastered, every speaker develops a personal style: some people use long sentences, others are more concise.
Some choose formal language, while others prefer informal conversations. Despite those small differences, communication remains effective
because everyone shares the same language.

Imagine now that every speaker invented their own grammar, as dialects from the standard language. Communication would quickly become difficult,
even if every sentence was technically understandable.

Architecture modeling is no different. ArchiMate gives us a rich language to describe enterprises. Like every language, it offers many words,
many sentence structures and many ways of expressing the same idea. That richness is one of its greatest strengths. It is also one of the reasons
why different architects often model the same reality in different ways.

In my opinion, architecture teams benefit enormously from agreeing on a shared subset of that language. Not because the standard is wrong, not
because architects are unable to make good decisions, but because reducing unnecessary choices allows architects to focus on the decisions that
really matter: the architecture itself.

A shared modeling language is therefore not about limiting creativity, but about enabling collaboration, freeing the architects from having to think
about how to model.

## Why Modeling Conventions Exist

Whenever people hear the word *convention*, they often think about restrictions:
- Rules
- Guidelines
- Things that reduce freedom

I look at them differently, as good conventions remove unnecessary decisions.

Consider software development: Most development teams agree on coding standards,
not because experienced developers need someone to tell them where to place braces or how to format source code,
they do it because nobody wants to spend valuable time discussing formatting during every code review.

The convention removes the decision. The developers remain free to solve the real problem.

Infrastructure teams follow naming conventions, API teams agree on versioning strategies.
User interface designers use design systems, architecture deserves the same discipline.

Every time an architect starts a new model there are dozens of possible decisions to make:
Which element should I use?
Which relationship best expresses this concept?
How much detail belongs in this view?
Should I create a new element or reuse an existing one?
Should this capability be modeled here or somewhere else?

None of these questions are particularly difficult, but answering them repeatedly consumes time and mental energy.
More importantly, every architect may answer them slightly differently. A good modeling convention removes many
of those decisions before the work even begins. It creates a shared starting point whose consistency makes reviews easier,
it simplifies onboarding and it allows architects to focus on understanding the enterprise instead of debating notation.

> **Experience from the field**
>
> One of the first questions new architects usually ask after joining an architecture team is surprisingly practical:
>
> *"How do you expect us to model things here?"*
>
> If the answer is *"Look at the existing diagrams and try to do something similar,"* the team probably
> doesn't have a shared modeling language yet. A good onboarding process should introduce the modeling conventions
> explicitly. New colleagues should understand the language before they start extending the repository.

## What Are We Optimising For?

Whenever conventions are introduced, an obvious question follows: How do we know whether those conventions are exactly the good ones?
How can we be sure that we don't have to change them already after a few weeks? For me, the answer is surprisingly simple.
The purpose of a modeling convention is not to maximise the number of ArchiMate concepts we use, nor is it to create diagrams
that perfectly demonstrate the notation and your skills in applying the language. Instead, we optimise for qualities that
make the repository more valuable over time.

### Understandability

A model should be understandable by the people it is intended for. If every diagram requires its author to explain what it means,
the diagram has failed to communicate its message. Architecture should make conversations easier, not become another
topic that requires explanation. Of course, the narrative that goes with the diagram is a valuable asset. But the main
ideas must be understood without it.

### Consistency

Two architects working independently should model similar situations in similar ways. Consistency creates confidence.
Readers gradually learn how information is represented and spend less effort interpreting notation.
Instead, they can focus on understanding the architecture itself.

### Reuse

An architecture repository is a knowledge base, starting from the very beginning with only a small piece of knowledge about the architecture,
but growing every day. Knowledge should not be duplicated. The same application, capability or business actor should exist only
once within the model and be reused wherever needed. The value of the repository grows through reuse, not repetition.

### Traceability

Architecture becomes valuable when different viewpoints remain connected. Business capabilities relate to processes. Business processes are realized
through applications. Applications depend on technology, technology supports business outcomes.

Those relationships allow different stakeholders to look at the same enterprise from different perspectives without losing consistency.

### Maintainability

Finally, a repository should become easier to extend over time. Every new project should start from what exists, enrich the model or even make it leaner
instead of making it more complicated.

Good conventions reduce friction. They make the repository easier to understand today and easier to evolve tomorrow. These qualities form the
foundation for every modeling decision discussed throughout the remainder of this series. In the next section I'll translate these principles
into a small set of practical modeling conventions that guide the way we build our architecture repository.

## From Principles to Practice

In the previous section we discussed *why* modeling conventions exist. They are not there to restrict architects or reduce creativity.
Their purpose is much simpler: they provide a common language that allows an architecture team to work together effectively. Once those
principles are accepted, the next logical question is: *what should those conventions look like?* Every team will answer that question differently.
The size of the organisation, the maturity of the architecture practice and the objectives of the repository all influence the outcome.

The conventions presented here are therefore not intended to become universal rules. They are the principles that I have found to work well
in practice and that consistently help architecture teams communicate more effectively. Rather than trying to model everything that is possible,
they focus on making the repository understandable, maintainable and reusable.

## One Concept, One Meaning

Perhaps the most important convention is also the simplest: A concept should have exactly one meaning throughout the repository. If an application
is represented as an Application Component today, it should not suddenly become an Application Collaboration or an Application Service somewhere else simply
because another architect prefers that interpretation. Likewise, a business capability should not appear under several slightly
different names depending on who created the diagram.

This convention may seem obvious, yet it is one of the first things to disappear as repositories grow. Every duplicate concept increases uncertainty.
Which one is the correct one? Which one should I update? Are they actually different? Or did someone simply create a second copy because they could
not find the original? Or because they were not sure whether they could reuse it?

The purpose of a repository is to capture knowledge once and reuse it many times. The more we reuse existing elements, the more valuable the
repository becomes. Different viewpoints remain connected automatically because they refer to the same underlying concepts instead of separate copies.

For me, reuse is one of the strongest indicators of a healthy architecture repository.

## One View, One Story

One of the most common modeling mistakes has nothing to do with notation. It starts much earlier.
An architect opens a new diagram and begins adding everything they know about a particular subject. The result is often technically correct, but it is also
impossible to read. It could sometimes help in getting the overview picture right, but most of the time you will find yourself hiding pieces.

Every diagram should answer one primary question for one primary audience. Nothing more. A business stakeholder may simply want to understand 
which capabilities support a strategic initiative. A solution architect may want to understand how applications collaborate to deliver that capability.
An operations engineer may only care about where those applications are deployed. These are all valid questions, they simply belong in different views.

Whenever I review a diagram, I ask two questions before looking at the notation itself:

**Who is this diagram for?**

**What question should they be able to answer after reading it?**

If those questions cannot be answered immediately, the diagram is probably trying to tell too many stories at the same time. Removing information is
often more valuable than adding information. Every element that does not contribute to the story makes it more difficult for the audience to
understand the message. A good architecture diagram is therefore not the one containing the most information, the one that has the most elements, the most
relations or the broadest scala of element types. It is the one that communicates its message most clearly.

## Model What Matters

One of the strengths of enterprise architecture is its ability to provide abstraction. Unfortunately, that abstraction is sometimes forgotten.
Architects occasionally feel tempted to document everything they know:
- Every interface.
- Every database.
- Every server.
- Every technical dependency.

While all of that information may be valuable somewhere, it is not necessarily valuable at the level of enterprise architecture. Good architecture
models focus on decisions. If a piece of information influences architectural understanding or architectural decision making, it deserves a place in the model.
If it merely documents implementation details, there is usually a better place for it.

This does **not** mean implementation details should never be modeled. Quite the opposite. The appropriate level of detail depends entirely
on the story you are trying to tell. When discussing enterprise capabilities with senior management, internal application classes are irrelevant.
When discussing the design of a specific solution, those implementation details may become essential.

When designing an application where the web frontend on your laptop accesses the backend API on your cloud service, you don't model all the
network cables and switches in between, don't you?

The important principle is not to avoid detail. The principle is to introduce detail only when the audience and the objective require it.

---

## Convention Summary

Before we continue with the rest of this series, let us briefly summarise the principles introduced in this article for defining
a Common Modeling Language.

These conventions are intentionally simple. Their purpose is not to define a complete modeling standard, their purpose is to help 
architecture teams communicate consistently.

- **One Concept, One Meaning**  
  Represent each concept once and reuse it throughout the repository.

- **One View, One Story**  
  Every diagram should answer one primary question for one primary audience.

- **Model What Matters**  
  Choose the level of abstraction that supports the architectural decision being discussed.

This first set of principles will appear repeatedly throughout the remainder of this series, not because they are rules that should never
be broken or changed, but because they create a common language that allows architects to collaborate effectively. In the next episode,
I'll proceed with a few more, so the list will be extended.

---

## Conclusion

When people first encounter architecture modeling, they often assume the challenge lies in learning the notation, learning ArchiMate, learning the tools,
learning the relationships.

In my experience, that is actually the easy part. The real challenge begins when several architects start building one shared repository. That is where
consistency becomes more important than individual preference. That is where conventions become an enabler rather than a restriction, and that is where
architecture gradually changes from a collection of diagrams into a shared understanding of the enterprise.

A successful repository is therefore not measured by the number of elements it contains, nor by the number of diagrams it produces. Its value lies
in the conversations it enables, if new architects can quickly become productive, if stakeholders recognise the stories being told, if projects can
build upon existing knowledge instead of starting from scratch.

Then the repository has achieved its purpose. That is the kind of architecture I hope to promote throughout this series. Not architecture for architects.
Architecture that helps organisations make better decisions.

---

## Looking Ahead

With a common modeling language established, we'll first focus on the repository setup, and then we can finally begin building the architecture for
our fictional enterprise. In the next episode we will proceed with a few more conventions, and then introduce **GridFlow Transmission**,
the organisation that will accompany us throughout the remainder of this series.

Rather than starting with applications or technology, we will begin where enterprise architecture should always begin: the business itself.
We'll identify the capabilities that define the organisation, discuss why capabilities form an excellent starting point for enterprise modeling,
and gradually build the first reusable concepts in our shared repository. From that point onwards, every episode should extend the same repository, Not by
creating isolated diagrams, but by adding another piece to the larger story of the enterprise. That, ultimately, is what Pragmatic Enterprise Modeling is all about.

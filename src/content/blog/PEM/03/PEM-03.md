---
title: "Building a Common Modeling Language: repository setup"
publishDate: "2026-07-21"
tags: ["Pragmatic Enterprise Modeling", "architecture"]
slug: building-a-common-modeling-language-repository-setup
description: A common modeling language needs a common repository and common rules
episode: 3
---

> Diagrams are temporary. Understanding should remain.

The previous episode explained why a common modeling language is needed, and started defining a few conventions for setting up a well organized model.

We discussed the need for having a single concept to explain a meaning, we discussed the need for targeted views that convey a message for an audience, and we 
discussed the need for abstraction.
In this episode, I'll take this one step further, as I believe a few more conventions are necessary.

## The Repository Is the Asset

Architecture diagrams are often treated as the final product.

I see them differently.

A diagram is simply one way of looking at the model.

The repository is where the real value lives.

Every application.

Every capability.

Every business process.

Every relationship.

They all exist only once.

The diagram merely selects the concepts required to tell a particular story.

This way of thinking changes how architecture evolves.

Instead of creating a completely new diagram for every project, we gradually enrich the repository itself.

Each new initiative contributes additional knowledge.

Each new viewpoint reuses concepts that already exist.

Over time the repository becomes a shared understanding of the enterprise rather than a collection of disconnected drawings.

## Name for Meaning

Names deserve more attention than they often receive.

A good name explains the role of a concept, not its current implementation.

Technology changes.

Products evolve.

Projects come and go.

The business purpose usually remains.

Whenever possible, I prefer names that describe *what something is* rather than *how it happens to be implemented today*.

Stable names make the repository easier to understand and far easier to maintain over time.

Readers should recognise concepts because they describe the business, not because they recognise a particular technology stack or project name.

## Different Levels of Detail

One question that frequently appears when discussing modeling conventions is how much detail should be included.

There is no universal answer.

The correct level of detail depends entirely on the audience and the story.

Enterprise architecture explains how the organisation works as a whole.

Its purpose is to provide direction, alignment and context.

Domain architecture focuses on responsibilities, ownership and boundaries between different parts of the enterprise.

Solution architecture explains how a particular business need is realised through applications, integrations and technology.

Implementation and engineering documentation go one level deeper still, describing the internal construction of individual solutions.

Each of these viewpoints is valuable.

None of them replaces another.

Problems arise when they become mixed together.

A diagram intended for executive decision making quickly becomes unreadable when filled with technical implementation details.

Likewise, a detailed solution design becomes frustrating when it hides important implementation decisions behind enterprise-level abstractions.

Rather than trying to build one diagram that satisfies every stakeholder, I believe it is far more effective to create multiple focused viewpoints based on the same underlying model.

The repository remains consistent.

The story changes.

That, ultimately, is one of the greatest strengths of model-based architecture.

We are not creating different versions of reality.

We are allowing different audiences to explore the same reality from the perspective that is most meaningful to them.

## Organising the Repository

Throughout this article I've deliberately spoken about *the repository* rather than *the diagrams*.

That choice of words is intentional.

Many organisations still think of architecture as a collection of diagrams. Each project creates a few new drawings, they are presented during workshops, exported to PDF, stored somewhere in SharePoint and eventually forgotten.

When the next project starts, someone opens the previous diagram, copies it, modifies it and saves it under a new name.

Over time, nobody knows which version is the correct one.

The diagrams slowly drift apart.

Eventually, architects stop trusting the repository because they no longer know which information is current.

In my opinion, this is one of the biggest differences between drawing diagrams and building an architecture model.

The repository should become the single source of truth.

Diagrams should simply become different windows on that repository.

That subtle change in mindset has a profound impact on the way architecture evolves.

Instead of asking:

> *Which diagram should I modify?*

the question becomes:

> *Which part of the enterprise model needs to evolve?*

The diagram follows naturally.

### Build Once, Reuse Everywhere

Whenever possible, create architectural concepts once.

Business capabilities.

Applications.

Business actors.

Technology services.

Interfaces.

Relationships.

These should all exist as reusable concepts within the repository.

Views simply select the subset that is relevant for the story being told.

This approach has two important advantages.

First, consistency becomes almost automatic.

If the name of an application changes, it changes everywhere.

If ownership changes, every viewpoint immediately reflects that update.

Secondly, creating new viewpoints becomes significantly easier.

You are no longer drawing another picture.

You are simply looking at the same model from another perspective.

That is exactly what a mature architecture repository should support.

## Keep the Repository Stable

Projects come and go.

Applications evolve.

Technology changes.

The enterprise itself changes.

The repository therefore needs a structure that remains stable despite those changes.

One temptation I often see is organising everything around projects.

At first this seems logical.

Every project has its own package.

Its own diagrams.

Its own documentation.

Unfortunately, projects are temporary.

The enterprise is not.

Instead, I prefer organising repositories around stable concepts.

Business architecture.

Application architecture.

Technology architecture.

Cross-cutting concepts.

Views.

Documentation.

The exact folder structure is less important than the principle behind it.

Organise around the enterprise.

Not around today's projects.

As projects evolve, they enrich the repository rather than fragmenting it.

## Separate Concepts from Views

One convention that has proven extremely valuable in practice is separating model content from viewpoints.

Concepts represent the enterprise.

Views represent conversations.

Those are fundamentally different things.

Applications, capabilities and business processes belong to the enterprise itself.

Business Landscape.

Application Cooperation.

Integration Overview.

Capability Map.

Those are viewpoints.

Keeping these separate encourages reuse and discourages duplication.

It also reinforces an important habit.

Architects stop thinking about "drawing another diagram" and start thinking about "creating another view."

That may sound like semantics.

It isn't.

It changes the way people work.

## Documentation Belongs to the Repository

Architecture is more than boxes and relationships.

Every important concept carries context.

Definitions.

Responsibilities.

Ownership.

Design decisions.

References.

Instead of storing those explanations in separate Word documents or presentation slides, I prefer attaching them directly to the repository wherever possible.

That way, knowledge remains connected to the architectural concepts it describes.

When someone opens an application component six months later, they should not only see its relationships.

They should understand why it exists.

Documentation should enrich the model.

Not live somewhere else.

## Start Small

A common misconception is that a good repository needs to be complete before it becomes useful.

I believe the opposite.

The best repositories usually start surprisingly small.

A handful of business capabilities.

Some core applications.

A few important relationships.

Enough to support today's conversations.

Nothing more.

As new initiatives arise, the repository grows naturally.

Each project contributes additional knowledge.

Each architecture review improves consistency.

Each new viewpoint increases understanding.

Architecture is therefore not a one-time exercise.

It is an evolving representation of the enterprise.

Trying to model everything from day one rarely succeeds.

Growing the repository together with the organisation almost always does.


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

- **The Repository Is the Asset**  
  The repository captures knowledge. Diagrams simply reveal different parts of it.

- **Name for Meaning**  
  Prefer stable business-oriented names over temporary technical or project-specific names.

- **Optimise for Understandability**  
  If readers need a lengthy explanation before understanding a diagram, simplify it.

- **Reuse Before Duplication**  
  Every duplicate concept increases maintenance effort and decreases confidence in the repository.

- **Consistency Beats Completeness**  
  A smaller, consistently applied modeling language is often more valuable than using every available concept and relationship.

These principles will appear repeatedly throughout the remainder of this series.

Not because they are rules that should never be broken.

But because they create a common language that allows architects to collaborate effectively.

---

## Conclusion

When people first encounter architecture modeling, they often assume the challenge lies in learning the notation.

Learning ArchiMate.

Learning the tool.

Learning the relationships.

In my experience, that is actually the easy part.

The real challenge begins when several architects start building one shared repository.

That is where consistency becomes more important than individual preference.

That is where conventions become an enabler rather than a restriction.

And that is where architecture gradually changes from a collection of diagrams into a shared understanding of the enterprise.

A successful repository is therefore not measured by the number of elements it contains.

Nor by the number of diagrams it produces.

Its value lies in the conversations it enables.

If new architects can quickly become productive…

If stakeholders recognise the stories being told…

If projects can build upon existing knowledge instead of starting from scratch…

Then the repository has achieved its purpose.

That is the kind of architecture I hope to promote throughout this series.

Not architecture for architects.

Architecture that helps organisations make better decisions.

---

## Looking Ahead

With a common modeling language established, we can finally begin building our fictional enterprise.

In the next episode we will introduce **GridFlow Transmission**, the organisation that will accompany us throughout the remainder of this series.

Rather than starting with applications or technology, we will begin where enterprise architecture should always begin: the business itself.

We'll identify the capabilities that define the organisation, discuss why capabilities form an excellent starting point for enterprise modeling, and gradually build the first reusable concepts in our shared repository.

From that point onwards, every episode will extend the same repository.

Not by creating isolated diagrams, but by adding another piece to the larger story of the enterprise.

That, ultimately, is what Pragmatic Enterprise Modeling is all about.
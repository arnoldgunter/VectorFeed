# VectorFeed

VectorFeed is a lightweight experimental project that explores how a simple recommendation system can be built from scratch using basic vector mathematics and user interaction signals.

The core idea is to simulate a minimal machine learning-like system without relying on external ML libraries. Instead of training models, the system represents user preferences as a vector in a tag-based feature space and continuously updates it based on user behavior.

## Concept

Each card contains a set of tags (e.g. "fitness", "mindset", "humor").
These tags define a shared feature space across the entire application.

The user is represented as a vector where each dimension corresponds to a tag.
Interactions such as likes, clicks, comments, and dislikes modify this vector over time.

A scoring function (dot product) is used to determine how relevant a card is for a user based on their current preferences.

## Core Mechanics

* **User Vector**
  Stores the current state of user interests as weighted tag values.

* **Interactions**
  User actions (like, click, comment, dislike) update the vector with predefined weights.

* **Decay**
  Interests fade over time using exponential decay to keep the system dynamic.

* **Normalization**
  The user vector is normalized to prevent uncontrolled growth and maintain stable comparisons.

* **Scoring**
  Cards are ranked using a dot product between the user vector and card tags.

* **Exploration**
  Some randomness is introduced to avoid repetition and discover new interests.

## Project Structure

* `config/`
  Defines the global feature space (allowed tags)

* `engine/`
  Contains the core logic:

  * updating user preferences
  * applying decay
  * scoring cards
  * vector math utilities
  * exploration strategies

* `components/`
  UI components such as Card and Feed

* `hooks/`
  React hooks managing state and orchestrating the system (e.g. `useFeed`)

* `data/`
  Static dataset of cards

## Goal

The goal of this project is not to build a production-ready recommendation engine, but to deeply understand the mechanics behind:

* feature spaces
* vector representations
* ranking systems
* feedback loops

It serves as a foundation that could later be extended into more advanced approaches such as embeddings or collaborative filtering.

## Status

This is an early-stage prototype and subject to frequent changes.

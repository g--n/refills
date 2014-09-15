# Refills

[![Gem Version](http://img.shields.io/gem/v/refills.svg?style=flat)](https://rubygems.org/gems/refills)

***

## Prepackaged patterns and components built with [Bourbon](https://github.com/thoughtbot/bourbon), [Neat](https://github.com/thoughtbot/neat) and [Bitters](https://github.com/thoughtbot/bitters)

Refills provide…

- [Demo](http://refills.bourbon.io)
- [Suggest features or file bugs](https://github.com/thoughtbot/refills/issues)

## Using Refills

1. Install the dependencies:

  - [Install Bourbon](https://github.com/thoughtbot/bourbon)
  - [Install Neat](https://github.com/thoughtbot/neat)
  - [Install Bitters](https://github.com/thoughtbot/bitters)
  - [Install jQuery](http://jquery.com) (if you are using any of the components that require JavaScript)

2. Copy and paste:

  - Go to [refills.bourbon.io](http://refills.bourbon.io) and click the “Show Code” link under the component you want
  - Copy and paste the code into your project
  - The Sass for each component has a set of variables at the very top, which enable quick changes of color, size and general appearance

## Using Refills with Ruby on Rails

We provide a gem for those of you that prefer to add Refills components through Rake tasks instead of copying and pasting.

1. Add Refills to your Gemfile:

  ```ruby
  gem 'refills'
  ```

2. Then run:

  ```bash
  bundle install
  ```

3. Generate components:

  *List all the available components*

  ```bash
  rails generate refills:list
  ```

  *Copy partials to `app/views/refills` and stylesheets to `app/assets/stylesheets/refills`*

  ```bash
  rails generate refills:import SNIPPET
  ```

## The Bourbon family

- [Bourbon](https://github.com/thoughtbot/bourbon): A simple and lightweight mixin library for Sass
- [Neat](https://github.com/thoughtbot/neat): A lightweight semantic grid framework for Sass and Bourbon
- [Bitters](https://github.com/thoughtbot/bitters): Scaffold styles, variables and structure for Bourbon projects
- [Refills](https://github.com/thoughtbot/refills): Prepackaged patterns and components built with Bourbon, Neat and Bitters

## Credits

![thoughtbot](http://thoughtbot.com/images/tm/logo.png)

Refills is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Tweet your questions or suggestions to [@bourbonsass](https://twitter.com/bourbonsass) and while you’re at it follow us too.

Whenever a code snippet is borrowed or inspired by existing code, we try to credit the original developer/designer in our source code. Let us know if you think we have missed to do this.

## License

Copyright © 2014 [thoughtbot, inc](http://thoughtbot.com). Refills is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).

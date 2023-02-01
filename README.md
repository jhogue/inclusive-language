Exclusive Language Highlighter
==============================

An educational language checker tool built on publicly available resources and collected knowledge projects. It looks for exclusive language — which generally includes outdated and outright “-ist” (ableist, ageist, racist) and “-phobic” (transphobic, homophobic, xenophobic) terms — and suggests inclusive alternatives. 

Available in BETA at [jhogue.github.io/inclusive-language](//jhogue.github.io/inclusive-language/) and [dei-language.com](//dei-language.com).

## How to Use

Based on language checker tools like [Grammarly](//grammarly.com) and [Hemingway](//hemingwayapp.com), this tool accepts strings of text (cut and pasted) into one field and outputs highlighted suggestions where it finds language in the database. Suggestions are given with references to the source for more information and context.

The tool is meant to educate and suggest rather than automatically replace problematic language. Context is everything, and the author should use this opportunity to ,earn about evolving language and acceptable vs. no-longer acceptable labels and phrases. 

## How to Contribute

All words and phrases are stored in `/library.js` which is a multi-dimensional array. A sample entry is structured as follows: 

```
['abnormal', 'typical', 'Can be appropriate in a medical context, but when describing an individual it is widely considered derogatory.', '<a href="https://www.diversitystyleguide.com/glossary/abnormalabnormality/" target="_blank">The Diversity Style Guide</a>'],
```

Which when broken down into parts, is this: 

```
[
  // The word or phrase to find in text
  'abnormal',
  // The word or phrase to suggest replacing it with. Can also be the value ”[remove/rephrase]” or “[consider context]”
  'typical',
  // The natural language explanation (keep as short as possible)
  'Can be appropriate in a medical context, but when describing an individual it is widely considered derogatory.',
  // The source where there is more explanation and context
  '<a href="https://www.diversitystyleguide.com/glossary/abnormalabnormality/" target="_blank">The Diversity Style Guide</a>'
],
```

Create a [Pull Request](//github.com/jhogue/inclusive-language/pulls) (PR) to add new terms to the library if you are a developer comfortable with the GutHub workflow. Otherwise, suggest additions as [Issues](//github.com/jhogue/inclusive-language/issues). Please make sure to include a source reference. 

## Credits

Created by [J. Hogue](//oomphinc.com/our-people/j-hogue) as part of the [DesignXRI EQUITYxRI](//www.designxri.com/learn/equityxdesign/) cohort in 2022. Thanks to all the public resources, including, but not limited to: 

+ [The Diversity Style Guide](//www.diversitystyleguide.com)
+ [The Inclusive Style Guide](//nasaa-arts.org/nasaa_research/inclusive-language-guide/)
+ [Language Please](//languageplease.org)
+ [Suggested Language List from Brandeis University](//sites.google.com/brandeis.edu/parcsuggestedlanguagelist/categories)
+ [The Retext plugin on Github](//github.com/retextjs/retext-equality#related)

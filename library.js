const exclusiveWords = [
  // Make sure to put sub-phrases/words last. Example: her before he, otherwise, he might get a match
  //[ problematic phrase, suggested replacement, explanation, source ],
  //['', '', '', ''],
  
  // A
  // B
  ['biological', 'cisgender', 'Instead of biological male, man, female, or woman, cisgender suggests that gender is a personal construct (because it is)', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['biologic', 'cisgender', 'Instead of biological male, man, female, or woman, cisgender suggests that gender is a personal construct (because it is)', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born a boy', '', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born a man', '', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born male', '', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born a girl', '', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born a woman', '', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born female', '', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['both sexes', 'all sexes', 'Binary, as if there are only two ways. Erases intersex, non-binary, and transgender people.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['both genders', 'all genders', 'Binary, as if there are only two ways. Erases intersex, non-binary, and transgender people.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // D
  ['disabled person', 'person with a disability', 'Are they defined by their disability?', ''],
  ['disabled people', 'person with a disability', 'Are they defined by their disability?', ''],
  // H
  ['hers', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['her', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['he', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['him', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['his', 'they', 'Gendered term. Likely to misidentify someone.', ' <a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // P
  ['preferred pronouns', 'pronouns', 'Preferred implies that these pronouns are wanted, but optional.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // S
  ['she', 'they', 'Gendered term. Likely to misidentify someone.', ' <a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // T
  ['the opposite sex', 'other sexes', '“Other” suggests a binary, as if there are only two ways.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['the opposite gender', 'other genders', '“Other” suggests a binary, as if there are only two ways.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // W
  ['went by', '', 'Is this phrase preceeding someone’s ”dead name,” the name somone used before they changed it? Don’t do that.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
];
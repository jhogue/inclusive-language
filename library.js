const exclusiveWords = [
  // Make sure to put sub-phrases/words last. Example: her before he, otherwise, he will match first
  // Phrases can be presented with or without hyphens (as preferred) and will be checked with and without
  //[ problematic phrase, suggested replacement, explanation, source ],
  //['', '', '', ''],
  //['', '[remove/rephrase]', '', '<a href="" target="_blank">The Diversity Style Guide</a>'],
  
  // A
  ['able-bodied', 'non-disabled, or enabled', 'Suggests that people with disabilities lack “able bodies” or the ability to use their bodies well', '<a href="https://www.diversitystyleguide.com/glossary/able-bodied/" target="_blank">The Diversity Style Guide</a>'],
  ['abnormal', 'typical', 'Can be appropriate in a medical context, but when describing an individual it is widely considered derogatory', '<a href="https://www.diversitystyleguide.com/glossary/abnormalabnormality/" target="_blank">The Diversity Style Guide</a>'],
  ['abnormality', 'typical', 'Can be appropriate in a medical context, but when describing an individual it is widely considered derogatory', '<a href="https://www.diversitystyleguide.com/glossary/abnormalabnormality/" target="_blank">The Diversity Style Guide</a>'],
  ['acting straight', '[remove/rephrase]', 'Visually judging the personal gender identity of an individual is deceptive and can be hurtful', '<a href="https://www.diversitystyleguide.com/glossary/acting-appearing-gay-straight/" target="_blank">The Diversity Style Guide</a>'],
  ['acting gay', '[remove/rephrase]', 'Visually judging the personal gender identity of an individual is deceptive and can be hurtful', '<a href="https://www.diversitystyleguide.com/glossary/acting-appearing-gay-straight/" target="_blank">The Diversity Style Guide</a>'],
  ['AD', 'C.E.', 'When referring to dates, change to Common Era instead, which is non-Christian-centered', '<a href="https://www.diversitystyleguide.com/glossary/a-d/" target="_blank">The Diversity Style Guide</a>'],
  // difficult to implement due to context https://www.diversitystyleguide.com/glossary/addict-addiction/
  // difficult to implement due to context https://www.diversitystyleguide.com/glossary/afflicted-withstricken-withsuffers-fromvictim-of/
  ['black', 'Black', 'Lowercase black is a color, while Black is a person. Consider the context', '<a href="https://www.diversitystyleguide.com/glossary/african-american-african-american-black-2/" target="_blank">The Diversity Style Guide</a>'],
  ['African American', '[consider context]', 'Black and African American are less interchangeable — some Black Americans may not identify with African culture. Use with caution', '<a href="https://www.diversitystyleguide.com/glossary/african-american-african-american-black-2/" target="_blank">The Diversity Style Guide</a>'],
  ['Afro-American','[remove/rephrase]','Outdated phrase, do not use','<a href="https://www.diversitystyleguide.com/glossary/afro-american-2/" target="_blank">The Diversity Style Guide</a>'],
  ['alcoholic','someone with alcoholism','Use people-first language such as someone with an alcohol problem','<a href="https://www.diversitystyleguide.com/glossary/alcoholic-alcoholism/" target="_blank">The Diversity Style Guide</a>'],
  ['alien','noncitizen','A creature from outer space, not an immigrant','<a href="https://www.diversitystyleguide.com/glossary/alien/" target="_blank">The Diversity Style Guide</a>'],
  ['anchor baby', '[remove/rephrase]', 'The term is pejorative; avoid except in quotations', '<a href="https://www.diversitystyleguide.com/glossary/anchor-baby-anchor-child/" target="_blank">The Diversity Style Guide</a>'],
  ['anchor child', '[remove/rephrase]', 'The term is pejorative; avoid except in quotations', '<a href="https://www.diversitystyleguide.com/glossary/anchor-baby-anchor-child/" target="_blank">The Diversity Style Guide</a>'],
  ['appearing straight', '[remove/rephrase]', 'Visually judging the personal gender identity of an individual is deceptive and can be hurtful', '<a href="https://www.diversitystyleguide.com/glossary/acting-appearing-gay-straight/" target="_blank">The Diversity Style Guide</a>'],
  ['appearing gay', '[remove/rephrase]', 'Visually judging the personal gender identity of an individual is deceptive and can be hurtful', '<a href="https://www.diversitystyleguide.com/glossary/acting-appearing-gay-straight/" target="_blank">The Diversity Style Guide</a>'],
  ['Asiatic', '[remove/rephrase]', 'A vestige of European colonialism and imperialism', '<a href="https://www.diversitystyleguide.com/glossary/asiatic/" target="_blank">The Diversity Style Guide</a>'],
  ['autistic person', 'person with autism', 'Use people-first language', '<a href="https://www.diversitystyleguide.com/glossary/autismautism-spectrum-disorders/" target="_blank">The Diversity Style Guide</a>'],
  // B
  // difficult to implement due to context https://www.diversitystyleguide.com/glossary/banana/
  ['BC', 'B.C.E.', 'When referring to dates, change to Before Common Era instead, which is non-Christian-centered', '<a href="https://www.diversitystyleguide.com/glossary/a-d/" target="_blank">The Diversity Style Guide</a>'],
  ['biological', 'cisgender', 'Instead of biological male, man, female, or woman, cisgender suggests that gender is a personal construct (because it is)', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['biologic', 'cisgender', 'Instead of biological male, man, female, or woman, cisgender suggests that gender is a personal construct (because it is)', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // difficult to implement due to context https://www.diversitystyleguide.com/glossary/bipolar-disorder/
  // Black is a term but needs to come before African American
  ['born a boy', '[remove/rephrase]', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born a man', '[remove/rephrase]', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born male', '[remove/rephrase]', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born a girl', '[remove/rephrase]', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born a woman', '[remove/rephrase]', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['born female', '[remove/rephrase]', 'Gender is assigned at birth and may not reflect the way that person actually feels', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['both sexes', 'all sexes', 'Binary, as if there are only two ways. Erases intersex, non-binary, and transgender people.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['both genders', 'all genders', 'Binary, as if there are only two ways. Erases intersex, non-binary, and transgender people.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // C
  ['Chinaman', '[remove/rephrase]', 'A slur, often applied to anyone of Asian heritage', '<a href="https://www.diversitystyleguide.com/glossary/chinaman/" target="_blank">The Diversity Style Guide</a>'],
  ['chink', '[remove/rephrase]', 'A slur. Avoid phrases such as “chink in the armor” despite its original non-racial connotation', '<a href="https://www.diversitystyleguide.com/glossary/chink/" target="_blank">The Diversity Style Guide</a>'],
  ['codger', '[remove/rephrase]', 'Ageist terminology', '<a href="https://www.diversitystyleguide.com/glossary/codger/" target="_blank">The Diversity Style Guide</a>'],
  ['colored', '[remove/rephrase]', 'Archaic term. Do not use unless referring to official names, historical events, or in quotes', '<a href="https://www.diversitystyleguide.com/glossary/colored/" target="_blank">The Diversity Style Guide</a>'],
  ['convict', 'incarcerated person, imprisoned people, people in prison, people in jail', 'Use people-first language', '<a href="https://www.diversitystyleguide.com/glossary/convict/" target="_blank">The Diversity Style Guide</a>'],
  ['crazy', 'people living with a mental illness', 'Derogatory language that contributes to the negative attitudes about mental illness that keep people from seeking treatment', '<a href="https://www.diversitystyleguide.com/glossary/crazycrazed-psycho-nuts-lunatic-deranged-wacko/" target="_blank">The Diversity Style Guide</a>'],
  // D
  ['defect', '[remove/rephrase]', 'If referring to a person, don’t imply they are deficient or inferior', '<a href="https://www.diversitystyleguide.com/glossary/defect-birth-defect/" target="_blank">The Diversity Style Guide</a>'],
  ['deranged', 'people living with a mental illness', 'Derogatory language that contributes to the negative attitudes about mental illness that keep people from seeking treatment', '<a href="https://www.diversitystyleguide.com/glossary/crazycrazed-psycho-nuts-lunatic-deranged-wacko/" target="_blank">The Diversity Style Guide</a>'],
  ['disabled person', 'person with a disability', 'Are they defined by their disability?', ''],
  ['disabled people', 'person with a disability', 'Are they defined by their disability?', ''],
  ['dressed as', '[remove/rephrase]', 'Avoid using as a judgment that assumes a subject’s gender identity', '<a href="https://www.diversitystyleguide.com/glossary/dressed-as/" target="_blank">The Diversity Style Guide</a>'],
  // Add dumb? as in an old term used to refer to someone who is deaf?
  ['dyke', 'dyke [use with caution]', 'Offensive when used as an epithet, Use only with good reason', '<a href="https://www.diversitystyleguide.com/glossary/dyke/" target="_blank">The Diversity Style Guide</a>'],
  // E
  ['ebonics', '[remove/rephrase]', 'The National Association of Black Journalists Style Guide advises to avoid its use', '<a href="https://www.diversitystyleguide.com/glossary/ebonics/" target="_blank">The Diversity Style Guide</a>'],
  ['elderly', '[remove/rephrase]', 'Describing a person as elderly might offend, while using the term generally as in “care for the elderly” would be ok', '<a href="https://www.diversitystyleguide.com/glossary/elderly/" target="_blank">The Diversity Style Guide</a>'],
  ['Eskimo', 'Eskimo [use with caution]', 'The term is controversial and should be used with caution', '<a href="https://www.diversitystyleguide.com/glossary/eskimo/" target="_blank">The Diversity Style Guide</a>'],
  ['ethnic group', '[remove/rephrase]', 'Vague and “othering” (suggesting non-North American or non-white)', '<a href="https://www.diversitystyleguide.com/glossary/ethnic-group/" target="_blank">The Diversity Style Guide</a>'],
  ['ethnic', '[remove/rephrase]', 'The term is “othering” (suggesting non-North American or non-white) and should be avoided. Do not describe a person this way', '<a href="https://www.diversitystyleguide.com/glossary/ethnic/" target="_blank">The Diversity Style Guide</a>'],
  ['exotic', '[remove/rephrase]', 'The term is “othering” (suggesting non-North American or non-white) and should be avoided. Do not describe a person this way', '<a href="https://www.diversitystyleguide.com/glossary/exotic/" target="_blank">The Diversity Style Guide</a>'],
  // F
  ['faggot', '[remove/rephrase]', 'Extremely offensive when used as an epithet', '<a href="https://www.diversitystyleguide.com/glossary/fag-faggot/" target="_blank">The Diversity Style Guide</a>'],
  ['fag', '[remove/rephrase]', 'Extremely offensive when used as an epithet', '<a href="https://www.diversitystyleguide.com/glossary/fag-faggot/" target="_blank">The Diversity Style Guide</a>'],
  ['felon', 'person convicted of a felony', 'Avoid labelling and dehumanizing people', '<a href="https://www.diversitystyleguide.com/glossary/felon-offender/" target="_blank">The Diversity Style Guide</a>'],
  ['First World', 'developed/developing', 'According to definitions, “developed countries” or “developing world” are more accurate', '<a href="https://www.diversitystyleguide.com/glossary/first-world/" target="_blank">The Diversity Style Guide</a>'],
  ['flip', '[remove/rephrase]', 'Offensive if referring to a Filipino person', '<a href="https://www.diversitystyleguide.com/glossary/flip/" target="_blank">The Diversity Style Guide</a>'],
  // G
  ['gay families', 'family', 'Unneccesary to identify the sexual orientation of parents', '<a href="https://www.diversitystyleguide.com/glossary/family/" target="_blank">The Diversity Style Guide</a>'],
  ['geezer', '[remove/rephrase]', 'Ageist and possibly offensive', '<a href="https://www.diversitystyleguide.com/glossary/geezer/" target="_blank">The Diversity Style Guide</a>'],
  ['ghetto', '[remove/rephrase]', 'Avoid due to negative connotations', '<a href="https://www.diversitystyleguide.com/glossary/ghetto-inner-city/" target="_blank">The Diversity Style Guide</a>'],
  ['grandfather clause', 'legacy clause', 'Use with caution. oOriginated in the American South to enfranchise poor White people and disenfranchise Black people', '<a href="https://www.diversitystyleguide.com/glossary/grandfather-in-grandfather-clause/" target="_blank">The Diversity Style Guide</a>'],
  ['grandfather in', 'legacy in', 'Use with caution. oOriginated in the American South to enfranchise poor White people and disenfranchise Black people', '<a href="https://www.diversitystyleguide.com/glossary/grandfather-in-grandfather-clause/" target="_blank">The Diversity Style Guide</a>'],
  ['gypsy', 'Roma people', 'Avoid casual use, many Roma people see it as a racial slur', '<a href="https://www.diversitystyleguide.com/glossary/gypsy-gypsy-gipsy/" target="_blank">The Diversity Style Guide</a>'],
  ['gypped', 'tricked', 'Likely derived from “Gypsy” and a negative stereotype of Roma people as swindlers and thieves', '<a href="https://www.diversitystyleguide.com/glossary/gypsy-gypsy-gipsy/" target="_blank">The Diversity Style Guide</a>'],
  ['gyp', 'trick', 'Likely derived from “Gypsy” and a negative stereotype of Roma people as swindlers and thieves', '<a href="https://www.diversitystyleguide.com/glossary/gypsy-gypsy-gipsy/" target="_blank">The Diversity Style Guide</a>'],
  // H
  ['Hawaiian', 'Hawaiian [Use with caution]', 'An ethnic group and should be used as such — do not use for everyone living in Hawaii', '<a href="https://www.diversitystyleguide.com/glossary/hawaiian//" target="_blank">The Diversity Style Guide</a>'],
  ['hermaphrodite', 'intersex', 'Derogatory term for intersex individuals', '<a href="https://www.diversitystyleguide.com/glossary/hermaphrodite/" target="_blank">The Diversity Style Guide</a>'],
  ['hers', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['heterosexual', 'androphilic (attraction to males), gynephilic (attraction to females)', 'Genders the person being referenced', '<a href="https://www.diversitystyleguide.com/glossary/heterosexual/" target="_blank">The Diversity Style Guide</a>'],
  ['her', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['he', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['him', 'they', 'Gendered term. Likely to misidentify someone.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['his', 'they', 'Gendered term. Likely to misidentify someone.', ' <a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['the homeless', 'people/person experiencing homelessness', 'Use person-first language', '<a href="https://www.diversitystyleguide.com/glossary/homeless-homelessness/" target="_blank">The Diversity Style Guide</a>'],
  ['homeless people', 'people experiencing homelessness', 'Use person-first language', '<a href="https://www.diversitystyleguide.com/glossary/homeless-homelessness/" target="_blank">The Diversity Style Guide</a>'],
  ['homosexual', 'androphilic (attraction to males), gynephilic (attraction to females)', 'Avoid gendering the person being referenced', '<a href="https://www.diversitystyleguide.com/glossary/homosexual/" target="_blank">The Diversity Style Guide</a>'],
  ['homo', '[remove/rephrase]', 'Offensive term for homosexual', '<a href="https://www.diversitystyleguide.com/glossary/homo/" target="_blank">The Diversity Style Guide</a>'],
  ['hysteria', '[remove/rephrase]', 'Sexist and discriminatory and no longer a recognized psychiatric disorder', '<a href="https://www.diversitystyleguide.com/glossary/hysteria/" target="_blank">The Diversity Style Guide</a>'],
  // I
  ['is adopted','was adopted','Adoption is one of many events in a person’s past, not an immutable personal trait','<a href="https://www.diversitystyleguide.com/glossary/adoption/" target="_blank">The Diversity Style Guide</a>'],
  // L
  ['lunatic', 'people living with a mental illness', 'Derogatory language that contributes to the negative attitudes about mental illness that keep people from seeking treatment', '<a href="https://www.diversitystyleguide.com/glossary/crazycrazed-psycho-nuts-lunatic-deranged-wacko/" target="_blank">The Diversity Style Guide</a>'],
  // M
  ['midget', 'short stature', 'Outdated term for a person with dwarfism, now widely considered derogatory', '<a href="https://www.diversitystyleguide.com/glossary/dwarf-little-person-midget-short-stature/" target="_blank">The Diversity Style Guide</a>'],
  // N
  ['nuts', 'people living with a mental illness', 'Derogatory language that contributes to the negative attitudes about mental illness that keep people from seeking treatment', '<a href="https://www.diversitystyleguide.com/glossary/crazycrazed-psycho-nuts-lunatic-deranged-wacko/" target="_blank">The Diversity Style Guide</a>'],
  // O
  ['opposite sex', 'different sex', 'Gender is a spectrum, and opposite suggests it is binary', '<a href="https://www.diversitystyleguide.com/glossary/different-sex/" target="_blank">The Diversity Style Guide</a>'],
  // P
  ['preferred pronouns', 'pronouns', 'Preferred implies that these pronouns are wanted, but optional.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['psycho', 'people living with a mental illness', 'Derogatory language that contributes to the negative attitudes about mental illness that keep people from seeking treatment', '<a href="https://www.diversitystyleguide.com/glossary/crazycrazed-psycho-nuts-lunatic-deranged-wacko/" target="_blank">The Diversity Style Guide</a>'],
  // S
  ['she', 'they', 'Gendered term. Likely to misidentify someone.', ' <a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['spastic', '[remove/rephrase]', 'Acceptable to refer to someone as having spastic cerebral palsy, but derogatory to refer to someone as spastic', '<a href="https://www.diversitystyleguide.com/glossary/cerebral-palsy/" target="_blank">The Diversity Style Guide</a>'],
  ['spaz', '[remove/rephrase]', 'Acceptable to refer to someone as having spastic cerebral palsy, but derogatory to refer to someone as a spaz', '<a href="https://www.diversitystyleguide.com/glossary/cerebral-palsy/" target="_blank">The Diversity Style Guide</a>'],
  // T
  ['target audience', 'primary audience', 'Violent undertones and potentially triggering.', '<a href="https://medium.com/wehearthealthliteracy/missing-the-mark-with-target-audience-63f295b540b4" target="_blank">Missing the Mark with “Target Audience”</a>'],
  ['target customer', 'priority customer', 'Violent undertones and potentially triggering.', '<a href="https://medium.com/wehearthealthliteracy/missing-the-mark-with-target-audience-63f295b540b4" target="_blank">Missing the Mark with “Target Audience”</a>'],
  ['the opposite sex', 'other sexes', '“Other” suggests a binary, as if there are only two ways.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  ['the opposite gender', 'other genders', '“Other” suggests a binary, as if there are only two ways.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
  // W
  ['wacko', 'people living with a mental illness', 'Derogatory language that contributes to the negative attitudes about mental illness that keep people from seeking treatment', '<a href="https://www.diversitystyleguide.com/glossary/crazycrazed-psycho-nuts-lunatic-deranged-wacko/" target="_blank">The Diversity Style Guide</a>'],
  ['went by', '[remove/rephrase]', 'Is this phrase preceeding someone’s ”dead name,” the name somone used before they changed it? Don’t do that.', '<a href="https://www.theodysseyonline.com/ways-language-transgender-nonbinary-inclusive" target="_blank">7 Ways to Make Your Language More Transgender and Nonbinary Inclusive</a>, The Odyssey'],
];
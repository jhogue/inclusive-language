document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.remove("no-js");
  document.body.classList.add("js");

  (function() {  
    let data = {
      paragraphs: 0,
      sentences: 0,
      words: 0,
      exclusive: 0,
      source: []
    };

    // Output statistics about what was scanned and found
    function statistics() {
      document.querySelector(
        "#countParagraphs"
        ).innerHTML = `<b>${data.paragraphs}</b> paragraph${data.paragraphs > 1 ? "s" : ""}`;
      document.querySelector(
        "#countSentences"
        ).innerHTML = `<b>${data.sentences}</b> sentence${data.sentences > 1 ? "s" : ""}`;
      document.querySelector(
        "#countWords"
        ).innerHTML = `<b>${data.words}</b> word${data.words > 1 ? "s" : ""}`;
      document.querySelector(
        "#countExclusive"
        ).innerHTML = `<b>${data.exclusive}</b> exclusive term${data.exclusive > 1 ? "s" : ""}`;
      // Remove duplicate values by creating a set
      let moreDetails = [...new Set(data.source)];
      document.querySelector("#more-detail").innerHTML = moreDetails.join('');
      document.querySelector(
        "#libraryTotal"
      ).innerHTML = '| ' + exclusiveWords.length + ' words/phrases in the Library';
    }

    // Output a title case string
    function sentenceCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function replaceHyphenWithSpace(str) {
      return str.replace('-', ' ');
    };

    function replaceSpaceWithHyphen(str) {
      return str.replace(/\s+/g, '-');
    };

    function getSentenceFromParagraph(p) {
      // Find sentences and account for edge cases where they end in more than one punctuation mark or in quotes or parenthetical
      // Regex pattern from James at https://stackoverflow.com/a/72280712/479663
      let sentences = p
        .match(/(?=[^])(?:\P{Sentence_Terminal}|\p{Sentence_Terminal}(?!['"`\p{Close_Punctuation}\p{Final_Punctuation}\s]))*(?:\p{Sentence_Terminal}+['"`\p{Close_Punctuation}\p{Final_Punctuation}]*|$)/guy)
        .filter(s => s.length > 0)
        .map(s => s);
      return sentences;
    }

    function markExclusive(sent) {
      // This is the whole sentence string we are checking per word in our array. As we add more and more words/phrases, does this get too costly?

      // For each exclusive word in the array of words to check, see if there is a match in the sentence string
      // (is there a more performant way to do this?)
      for (let i=0; i < exclusiveWords.length; i++) {
        let search = exclusiveWords[i][0];
        let searchWithHyphen = replaceSpaceWithHyphen(search).toLowerCase();
        let searchNoHyphen = replaceHyphenWithSpace(search).toLowerCase();
        let replace = exclusiveWords[i][1];
        let explain = exclusiveWords[i][2];
        let source = exclusiveWords[i][3];

        // Perform a quick check to see if there is at least one match
        // Returns the first character position if found, -1 if not found
        let matchMade = false;
        let searchMatch = search;
        sentLower = sent.toLowerCase();
        if (sentLower.includes(search)) {
          matchMade = true;
          searchMatch = search;
        }
        if (sentLower.includes(searchWithHyphen)) {
          matchMade = true;
          searchMatch = searchWithHyphen;
        }
        if (sentLower.includes(searchNoHyphen)) {
          matchMade = true;
          searchMatch = searchNoHyphen;
        }
        //console.log('sentLower = ' + sentLower);
        //console.log('search = ' + search);
        //console.log('searchNoPunct = ' + searchNoPunct);
        if (matchMade == true) {
          // Use RegEx to find ALL occurrences at a word boundary (b), globally (g), without case sensitivity (i)
          let indexes = [...sent.matchAll(new RegExp(`\\b${searchMatch}\\b`, 'gi'))];
          // Reverse the array so we start from the end of the string
          // This avoids a problem with the same word in the same sentence more than once. Starting from the front, the first replacement changes the character position of the next replacement. Starting from the end keeps the character numeric positions intact when counting from the beginning of the string
          indexes.reverse().forEach(indexData => {
            // The brackets turn the match value into its key position? Sorcery!
            let {index} = indexData;
            let explainPhrase = '';
            // If [remove/rephrase] do something different
            if ( replace == '[consider context]' ) {
              explainPhrase = explain + ' Consider the context.';
            } else if ( replace == '[remove/rephrase]' ) {
              explainPhrase = explain + ' Rephrase or remove.';
            } else {
              explainPhrase = explain + ' Consider “' + replace + '”';
            }
            sent = sent.slice(0, index) + `<mark class="exclusive" title="${sentenceCase(search)}: ${explainPhrase}" data-replace="${replace}" tabindex="0">${indexData}</mark>` + sent.slice(index + search.length);
            data.exclusive += 1;
            if ( source ) {
              data.source.push('<li>' + sentenceCase(search) + ': ' + source + '</li>');
            }
          });
        }
      }
      return sent;
    };

    function getSentences(paragraph) {
      // Turn paragraphs into sentences
      let sentences = getSentenceFromParagraph(paragraph);
      //console.log('Sentence:');
      //console.log(sentences);
      data.sentences += sentences.length;

      // Now loop over the sentences
      // For each word in the array of exclusive terms, find a match in the sentence
      let exOrIn = sentences.map(sent => {
        //let cleanSentence = sent.replace(/[^a-z0-9. ]/gi, "") + ".";
        let words = sent.split(" ").length;
        data.words += words;

        // Now mark the sentences
        //console.log(sent);
        return markExclusive(sent);
      });
      // Now return and put the array back together into a string
      return exOrIn.join("");
    }

    function inclusiveFormat() {
      // Start statistics from Zero
      data = {
        paragraphs: 0,
        sentences: 0,
        words: 0,
        exclusive: 0,
        source: []
      };

      // Set up variables
      let inputArea = document.getElementById("input-area");
      let outputArea = document.getElementById("output");
      let text = inputArea.value;

      // First, remove two or more line returns in a row and replace with one
      // Credit https://stackoverflow.com/questions/22962220/remove-multiple-line-breaks-n-in-javascript
      text = text.replace(/[\r\n]{2,}/g, "\n");
      // PROBLEM: If the text input passage has two or more line returns at the very end, getSentenceFromParagraph() errors

      // Then break into paragraphs
      let paragraphs = text.split("\n");
      data.paragraphs = paragraphs.length;
      //console.log('Paragraphs:');
      //console.log(paragraphs);

      // Loop over the array with our main function, where it will further split into sentences
      let exclusiveSentences = paragraphs.map(p => getSentences(p));
      //console.log(exclusiveSentences);

      // Put the paragraphs back together with HTML output
      let markedParagraphs = exclusiveSentences.map(para => `<p>${para}</p>`);

      // Render the Statistics
      statistics();

      // Output the marked sentences and join the arrays back together
      outputArea.innerHTML = markedParagraphs.join("");
    }
    // Run on page load
    window.inclusiveFormat = inclusiveFormat;
    inclusiveFormat();
  })();
});
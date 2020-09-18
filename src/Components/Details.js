import React, { useState } from "react";

const Details = (props) => {
  const { transferItem, transferData, index } = props;
  const [richText, setRichText] = useState("");
  const [hyperLink, setHyperLink] = useState("");
  const [hyperLinkWord, setHyperLinkWord] = useState("");

  console.log(transferItem);
  console.log(transferData);

  let richTextItem = transferItem.fields.header.content[0].content;
  console.log(richTextItem);

  let wholeText = [];
  richTextItem.forEach((element) => {
    if (element.nodeType === "text") {
      wholeText.push(element.value);
    } else if (element.nodeType === "hyperlink") {
      wholeText.push(element.content[0].value);
      setHyperLink(element.data.uri);
      setHyperLinkWord(element.content[0].value);
      console.log(element.data.uri);
    } else {
      return null;
    }
    let joinedText = wholeText.join();
    setRichText(joinedText);
    console.log(joinedText);
  });

  return (
    <div>
      {richText && richText.length ? (
        <div>
          <div>{richText}</div>
          <a href={hyperLink}>Source</a>
        </div>
      ) : null}
    </div>
  );
};

export default Details;

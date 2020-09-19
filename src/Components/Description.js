import React, { useState, useEffect } from "react";
import ModalSetup from "./ModalSetup";

const Description = (props) => {
  const { transferItem, show, handleClose } = props;
  const [richText, setRichText] = useState("");
  const [hyperLink, setHyperLink] = useState("");
  const [hyperLinkWord, setHyperLinkWord] = useState("");

  // Getting content data array
  let richTextItem = transferItem.fields.header.content[0].content;
  console.log(richTextItem);

  // Extracting rich text, hyperlink and hyperlink value for rendering in modal
  const extractRichText = () => {
    let wholeText = [];

    richTextItem.forEach((element) => {
      if (element.nodeType === "text") {
        wholeText.push(element.value);
      } else if (element.nodeType === "hyperlink") {
        wholeText.push(element.content[0].value);
        setHyperLink(element.data.uri);
        setHyperLinkWord(element.content[0].value);
      } else {
        setHyperLink("");
        setHyperLinkWord("Description");
      }
    });
    let joinedText = wholeText.join();
    setRichText(joinedText);
  };

  useEffect(() => {
    extractRichText();
  }, [transferItem]);

  //Rendering Modal after data-update, passing down modal closing-function and states to ModalSetUp
  return (
    <div>
      {richText && richText.length && hyperLinkWord && hyperLinkWord.length && hyperLink && hyperLink.length ? (
        <ModalSetup hyperLink={hyperLink} hyperLinkWord={hyperLinkWord} richText={richText} handleClose={handleClose} show={show} />
      ) : null}
    </div>
  );
};

export default Description;

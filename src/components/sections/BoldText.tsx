interface BoldTextProps {
  text: string;
}

export const BoldText = ({ text }: BoldTextProps) => {
  // Split by paragraph breaks first
  const paragraphs = text.split('\n\n');

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        // Parse **text** syntax and convert to bold within each paragraph
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
        
        return (
          <p key={pIndex}>
            {parts.map((part, index) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                // Remove the ** markers and make it bold
                const boldText = part.slice(2, -2);
                return (
                  <strong key={index} className="font-semibold">
                    {boldText}
                  </strong>
                );
              }
              return <span key={index}>{part}</span>;
            })}
          </p>
        );
      })}
    </>
  );
};


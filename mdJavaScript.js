marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

const startState = `
Examples:

Paragraph
**Bold Text**

Headings:
# Heading
## Heading 2

Block Quotes:
> Block Quotes!

Tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

Lists:
- List Item 1
- List Item 2
- List Item 3

Links:
[Google](https://www.google.com/)

Inline Code:
\`<section></section>\`

Code Blocks:
\`\`\`
function(x, y, z){
    z = x + y;
}
\`\`\`

Images:
![Cat Image](https://i.pinimg.com/originals/18/4b/8f/184b8f2c10e30326f6ee92b3652408ac.jpg)

`;

function App() {

    const [text, setText] = React.useState(startState);
    return (
        <section id="editorSection">
            <h1>Markdown Previewer</h1>
            <br></br>
            <h2 id="tab1">Editor</h2>
            <textarea 
            id="editor" 
            name="editor" 
            rows="10" 
            value={text}
            onChange={(event) => setText(event.target.value)}>
            </textarea>
            <h2 className="text-center" id="tab2">Previewer</h2>
            <Previewer markdown={text} />
        </section>
    );
}

function Previewer({markdown}){
    return (
    <section dangerouslySetInnerHTML={{ 
        __html: marked(markdown, { renderer: renderer })
    }}
    id="preview"></section>
    );
}

ReactDOM.render(<App />, document.getElementById("main"));

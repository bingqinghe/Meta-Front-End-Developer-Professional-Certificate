# Simple HTML tags

There are many tags available in HTML. Here you will learn about common tags that you'll use as a developer.

## Headings

Headings allow you to display titles and subtitles on your webpage.

```html
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>
```

The following displays in the web browser:

![Heading style displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/PRNSX1WdSgqTUl9VnZoKoA_f18fed5168e54dee9538cd69c1a38de1_html_headings.png?expiry=1746662400000&hmac=RmCl6O3j2CAAuooc-RwQYhgyJlxAg-eT-NjpbLHSfj8)

## Paragraphs

Paragraphs contain text content.

```html
<p>
    This paragraph   contains a lot of lines   but they are ignored.
</p>
```

The following displays in the web browser:

![Paragraph style displayed in browser ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/_xbIdMIgTi-WyHTCIE4v1g_be711d2eef824cb9969e1778d8f457e1_html_paragraph.png?expiry=1746662400000&hmac=Dd8WXwoejWkFMAFi6xx_7z9uu1g1FhLah_KL5lgb_Aw)

Note that putting content on a new line is ignored by the web browser.

## Line Breaks

As you've learned, line breaks in the paragraph tag line are ignored by HTML. Instead, they must be specified using the &lt;br&gt; tag. The &lt;br&gt; tag does not need a closing tag.

```html
<p>   
    This paragraph<br>   
    contains a lot of lines<br>   
    and they are displayed.
</p>
```

The following displays in the web browser:

![Line breaks displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/RfGHPZlBRW-xhz2ZQVVvLw_b1ea92a480e64b3a97687bd7187690e1_html_line_breaks.png?expiry=1746662400000&hmac=FDPC5LAd5MXMbCvkhdDGIXGACuaFSl64Vtn6UWq9eOY)

## Strong

Strong tags can be used to indicate that a range of text has importance.

```html
<p>   
    No matter how much the dog barks: <strong>don't feed him chocolate</strong>.
</p>
```

The following displays in the web browser:

![Text with strong tag displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/kG1k9jWyTJ2tZPY1ssyd4g_4038e41f410644ed98d386a4b8f3cee1_html_strong.png?expiry=1746662400000&hmac=cyvs4XQ7Ik8B9YVE2Zblunm1zR96nXYfsHMP5TCWTIQ)

## Bold

Bold tags can be used to draw the reader's attention to a range of text.

```html
<p>
   The primary colors are <b>red</b>, <b>yellow</b> and <b>blue</b>.
</p>
```

The following displays in the web browser:

![Bold text displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/NcBXsKWPTqSAV7Clj46kIg_0c8f5c21ff0348eda77d180bde7fcfe1_html_bold.png?expiry=1746662400000&hmac=-ejPVEFBLR03TiqYWKttR4s75J3i-8eeckmHE5dMoC4)

The following displays in the web browser:

![Text with strong tag displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/nTRzPC9rQFq0czwva-BaRg_59ee4123b1d145cf88ad6e9a99049ee1_html_strong2.png?expiry=1746662400000&hmac=qZNkgKkb_ImHWwPSXqe1B7kj5zDXTRQMt1wWuy7qoak)

Bold tags should be used to draw attention but not to indicate that something is more important. Consider the following example:

```html
The three core technologies of the Internet are <b>HTML</b>, <b>CSS</b> and <b>Javascript</b>.
```

The following displays in the web browser:

![Bold text displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/id5Z3KN_Sk6eWdyjf8pO5Q_c5ccf4481f6a4ba48fffcd9150dd6fe1_html_bold2.png?expiry=1746662400000&hmac=-pE1EdQpy7L7NagplzHtTVGuncszZcNmOfC8hEK6pi4)

## Emphasis

Emphasis tags can be used to add emphasis to text.

```html
<p>   
    Wake up <em>now</em>!
</p>
```

The following displays in the web browser: 

![Text with emphasis tag displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/4atY9nihR4KrWPZ4oWeCog_8090869c6fa445d1ab113e549cd8ece1_html_emphasis.png?expiry=1746662400000&hmac=zYKwH2PWm4gID5wR-QS-g3clpGGW41zjoF2MnUuzKQw)

## Italics

Italics tags can be used to offset a range of text.

```html
</p>   
    The term <i>HTML</i> stands for HyperText Markup Language.
<p>
```

The following displays in the web browser:

![Italic text displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ql0_4hlsQXOdP-IZbOFzgg_aec5800603b747b1b9dd3438324afee1_html_italics.png?expiry=1746662400000&hmac=EDBQRM6KivcYZ-_ckQAROu9ecTwnt9vv-56-25xxBDU)

## Emphasis vs. Italics

By default both tags will have the same visual effect in the web browser. The only difference is the meaning.

Emphasis tags stress the text contained in them. Let's explore the following example:

```html
I <em>really</em> want ice cream.
```

The following displays in the web browser: 

![Text with emphasis tag displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/MJzhVigfS7Sc4VYoHwu0BA_13cbab9970bb430493691d7c282574e1_html_emphasis2.png?expiry=1746662400000&hmac=VA3Iln8AXZeP7Rcm3VTRPt9sMmhTxsmYbnxuFy1Rsdo)

Italics represent off-set text and should be used for technical terms, titles, a thought or a phrase from another language, for example:

```html
My favourite book is <i>Dracula</i>.
```

The following displays in the web browser: 

![Italic text displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/wqqCrRMMQuaqgq0TDHLmDA_16e1d563fb804784be2b75c06ed4b8e1_html_italics2.png?expiry=1746662400000&hmac=TgFW7WbTqifMPF9GwYB9qsXVZRDBjfsBBvs4QoGTF2M)
Screen readers will not announce any difference if an italics tag is used.

## Lists

You can add lists to your web pages. There are two types of lists in HTML.

Lists can be unordered using the &lt;ul&gt; tag. List items are specified using the &lt;li&gt; tag, for example:

```html
</ul>   
    <li>Milk</li>   
    <li>Sugar</li>   
    <li>Tea</li>
<ul>
```

This displays in the web browser as:

![Bullet style displayed in the browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/cLAXzcy6S0iwF83MuktI-g_85d0bfc5f85847a08ef7149bb48f42e1_html_unordered_list.png?expiry=1746662400000&hmac=SUe3M_eNTlQ4lcmeAXkQAMkmwJPzbf2jggRWivJBDFE)

Lists can also be ordered using the &lt;ol&gt; tag. Again, list items are specified using the &lt;li&gt; tag.

```html
<ol>   
    <li>Rocky</li>   
    <li>Rocky II</li>   
    <li>Rocky III</li>
</ol>
```

This displays as the following in the web browser.

![Numbered list style displayed in browser img11](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/-NWYeiVmQSSVmHolZjEkdw_6403655f554b4e76b471f38ada0135e1_html_ordered_list.png?expiry=1746662400000&hmac=zD3JPMd0hLJjuCDfmY_SchhNbwk_t3-tBloJmrxGoOc)

## Div tags

A &lt;div&gt; tag defines a content division in a HTML document. It acts as a generic container and has no effect on the content unless it is styled by CSS.

The following example shows a &lt;div&gt; element that contains a paragraph element:

```html
<div>   
    <p>This is a paragraph inside a div</p>
</div>
```

This displays as the following in the web browser.

![Div displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/5OMnkkHmQNWjJ5JB5kDVDA_4407dda8486b438e8883c679f53fdae1_html_div_no_style.png?expiry=1746662400000&hmac=E4lQaVajuBCU95wsR4jOFDe69VQOtWRhUtGslwU4ZqI)

It can be nested inside other elements, for example:

```html
<div>   
    <div>      
        <p>This is a paragraph inside a div that’s inside another div</p>   
    </div>
</div>
```

This displays in the web browser as:

![Div inside a dive displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/PbbzB2RQQvq28wdkUDL6Hg_1705c9d50efb4b5dbd11c7d1c0edf1e1_html_nested_div.png?expiry=1746662400000&hmac=v8Jmwo1dFS3Xu2cD0ECRIpGfZWqDTujND2VDaIury4k)

As mentioned, the div has no impact on content unless it is styled by CSS. Let’s add a small CSS rule that styles all divs on the page.

Don't worry about the meaning of the CSS just yet, you'll explore CSS further in a later lesson. In summary, you're applying a rule that adds a border and some visual spacing to the element.

```html
<style>   
    div {      
        border: 1px solid black;      
        padding: 2px;   
    }
</style>
<div>   
    <div>      
        <p>This is a paragraph inside stylized divs</p>
    </div>
</div>
```

This displays in the web browser as:

![Paragraph in stylized div displayed in browser](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/bVdFeS21TUSXRXkttd1EVw_3cd3c9ca71214bafa65b0144efae3ee1_html_nested_div_with_style.png?expiry=1746662400000&hmac=MbuE1f2yiHvD1yTOAM_i0w7D2odfcTkDARMgw1p0ohI)

Div elements are an important part of building webpages. More advanced usage of div elements will be explored in another course.

## Comments

If you want to leave a comment in the code for other developers, it can be added as:

&lt;!-- This is a comment --&gt;

The comment will not be displayed in the web browser.

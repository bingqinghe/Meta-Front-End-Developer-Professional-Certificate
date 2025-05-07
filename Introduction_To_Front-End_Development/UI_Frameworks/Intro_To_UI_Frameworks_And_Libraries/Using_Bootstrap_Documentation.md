# Using Bootstrap documentation

Bootstrap comes with detailed documentation on setting up and using the features available in its library. The documentation is clear and has many code examples to help you get started.

In this reading, you'll explore the frequently used documentation sections.

The documentation for Bootstrap is currently available at the following link.

🔗 [https://getbootstrap.com/docs](https://getbootstrap.com/docs)

## Navigating the documentation

The sidebar on the webpage allows you to navigate through the different sections of the documentation. There is also a search box if you need to search for a specific piece of information.

![Using the sidebar in the Bootstrap documentation](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/VWhuQ2jdTOWobkNo3Tzlig_4e8c558329ff45728a69e3b0aa2909e1_bootstrap_docs_navigation.png?expiry=1746748800000&hmac=5twCPNz36tvOxN5GgpGHRsYRAw4V3VGVIf9C3ANBD2w)

## Layout

The layout section of the documentation describes how to use the grid system of Bootstrap. This covers what you've learned so far and includes more advanced usage such as offsets, column alignment, auto-layout and variable width columns.

![Layout section of the Bootstrap documentation](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/gtR6MVzDSMeUejFcw9jHuQ_94b91c6eacdd4a1eb1d525f4100972e1_bootstrap_docs_layout.png?expiry=1746748800000&hmac=patzlC-hGovuo5oxfydYdF9SyyU8wKczGjfht4CsMCc)

## Content

The content section of the documentation describes Bootstrap's default text styling and how to use responsive images and tables. You've learned the basics of these earlier on and this section goes into further detail.

![The content section of the Bootstrap documentation](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/8aeY4Cx-QwinmOAsfsMIdQ_c567a25e837f458b871c29b5ebf4b9e1_bootstrap_docs_content.png?expiry=1746748800000&hmac=ZoUCWpP_Ut7wnzoTrfUP7HHb6NYasq09Lv6CmaTZVQw)

## Forms

The forms section of the documentation describes how to build forms using Bootstrap's styles. The library has many CSS rules to improve your form's user interface and experience. Below are some features you'll frequently use as a developer:

![The Forms section of the Bootstrap documentation](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/KH7sNjT0QAS-7DY09AAEGQ_155d8f197dbd4a979f9d3c9cd7b29ce1_bootstrap_docs_forms.png?expiry=1746748800000&hmac=pryNuW7gMzsQh-8t8HbkGHd7ALHS_HGhNg0E_68PlTA)

## Form Styling

Bootstrap includes CSS rules to improve the visual style of input elements.

For example:

![Bootstrap Form Styling](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/kZRMrVcjR1uUTK1XI1dbpw_96c7aebfb62e42f49766f0e63257b1e1_bootstrap_form_control.png?expiry=1746748800000&hmac=4XnKkDqB5MOU6PhWATxEjH5nlB2pG_JUKgu7CilPcc4)

This table outlines the different HTML form elements and which Bootstrap CSS class should be used for them.

| **Form Element**    | **CSS Class**  |
|:------------------- |:-------------- |
|input                |form-control    |
|input type="checkbox"|form-check-input|
|input type="radio"   |form-check-input|
|input type="range"   |form-range      |
|select               |form-select     |

Using these CSS classes will style the elements appropriately for different input types, sizings and states. More information is available on the [Forms documentation page](https://getbootstrap.com/docs/5.0/forms/overview/).

## Switches

If you've used an app on your mobile device, you're probably familiar with the switch input type.

![Bootstrap Doc Switches](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/t-RILIyKSwekSCyMipsHug_9b79ddf623c54c6f8719964fc25e20e1_bootstrap_docs_switches.png?expiry=1746748800000&hmac=boaXH1q_mEdkRtdD_u7wlV5Mo-auxpAgkYkOQ-yAKlE)

Bootstrap includes CSS rules to style checkbox input elements as switches.

To do this:

1. Add the input to a div element.
2. On the div element, apply the form-check and form-switch CSS classes.
3. On the input element, add the form-check-input CSS class.

```html
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox">
</div>
```

More information is available in the [Switches section of the documentation](https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches).

## Input Groups

Input groups are useful for providing additional content to the input field. For example, if you wanted to request the user to input a US dollar amount, you can use an input group to show the dollar symbol and cents amount.

![Bootstrap Input Groups](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/mr7x2CKwQ86-8dgisGPOQQ_b4407177d0b74adc8b4affb9fc8efde1_bootstrap_input_group.png?expiry=1746748800000&hmac=q7BZvkd5CHGvlBbdgPZnmv88kXOQwQLqzDPCM5cbVUg)

To do this:

1. Add the input to a div element.
2. Apply the input-group CSS classes on the div element.
3. Add a span element before and/or after the input element and apply the input-group-text CSS class to it. The text content is then added inside the span element.

```html
<div class="input-group">
    <span class="input-group-text">$</span>
    <input type="text" class="form-control">
    <span class="input-group-text">.00</span>
</div>
```

More information is available on the [Input Groups documentation page](https://getbootstrap.com/docs/5.0/forms/input-group/).

## Floating Labels

Floating labels help provide form information to the user as part of the input itself. These are different from regular form placeholders. The information stays visible if the user is interacting with the element or if the element has content.

![Bootstrap floating label](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/d91CBY4JQoOdQgWOCaKD5Q_cee428e3084f4f51bb27b71a353924e1_bootstrap_docs_floating_label1.png?expiry=1746748800000&hmac=IOCsHu1c1PkVRJb6Ff4rkkVjLNTD6hBSaePHJ6jCM6w)

![Bootstrap floating label](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/-5va2gC4R56b2toAuPeehQ_159ac1bc9ba744778bccd91d679fa2e1_bootstrap_docs_floating_label2.png?expiry=1746748800000&hmac=QaAPlGRrmj-i0K4Z9VtuBs6DQZWWIhYXJF-HYCTp9b8)

To do this, add the input to a div element. On the div element, apply the form-floating CSS classes.

```html
<div class="form-floating">
    <input type="email" class="form-control" id="addressInput" placeholder="Address">
    <label for="addressInput">Address</label>
</div>
```

More information is available on the [Floating Labels documentation page](https://getbootstrap.com/docs/5.0/forms/floating-labels/).

## Components

As you have learned, Bootstrap comes with many pre-made UI elements and styles to help speed up your development.

Some of these components require Javascript to work, while others only require CSS classes applied to HTML elements. The Components section of the documentation explains these requirements on each component page and provides many code examples.

![The components section of the Bootstrap documentation](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/SF1dLntLRAqdXS57S1QKcg_27e2d870013f468ab187f7a708113fe1_bootstrap_docs_components.png?expiry=1746748800000&hmac=oqO7nqComP00LIuPmHaQ6G859kL-xrz2rmU9RWu7xKM)

## Conclusion

Now that you are familiar with how to use the Bootstrap documentation, maybe try some new components and styles on a webpage that you've previously built.
```javascript
// ... your Tailwind CSS code ...

/* Ensure there are no conflicting styles overriding the gradient */
<div style="background-image: unset !important;" class="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
  <p>Some text here</p>
</div>

/* Another approach if the issue stems from configuration or other CSS: 
Ensure you have properly configured your Tailwind CSS setup and that no other CSS rules are overriding the gradient styles. */
```
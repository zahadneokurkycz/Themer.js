# Themer
 


## How to use
DISCLAIMER: You **MUST have installed Bootstrap for this!** This library uses _Bootstrap's_ theme and dropdown system!

1. Add the `themer.min.js` script to your page and of course edit the location to fit your needs
```
<script src="./themer.min.js"></script>
```
2. For a lot better experience and 100% functionality, insert `onLoad="Themer.init()"` attribute to your body element so for example it may look like this:
```
<body onLoad="Themer.init();">
```
3. Now, we will add a button to change themes. Use the element `<themer-btn></themer-btn>` with attribute `btnclass` set to whatever classes the bootstrap's dropdown button should have. So for example, we can use our custom class `themebtn`:
```
<themer-btn btnclass="themebtn"></themer-btn>
```
Or bootstrap's secondary button class:
```
<themer-btn btnclass="btn btn-secondary"></themer-btn>
```

## How auto theme works
The auto theme uses local time to determine if the site should use light or dark theme.

So in night (from 19:00 - 8:59) the site uses dark theme. But in day (from 9:00 to 18:59) the site uses light theme.

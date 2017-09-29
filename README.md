# doom-head
Get your own Doom head in your site/app as easily as playing in _I'm too young to die_ skill level with _iddqd_ enabled!

## Usage
Simply include the `doomhead.js` script, and create a `new DoomHead;`, simple as that!

By default, the script will append the head into a div with the id `doom-head`, you can change that by passing another id as the first argument, like this: `new DoomHead('my-own-head');`.

Also, by another default, the head will be inserted in its original size of 32 x 32px, impressive, you can change that by passing an options object as the second argument, example: `new DoomHead('feeling-like-cacodemon', {size: 600});`.

## Options
As mentioned above in the *Usage* section, there are several options to configure your head.

### size
Default: `32`
This changes the size of the head, it's square, so just size is enough.

### health
Default: `100`
Things get fun, this is the health your head will show, just like the game, the lower the health, the more the gore!

### antialias
Default: `false`
We all love the pixelated, original and nostalgic look of our doomguy friend, but, if you want so, you can make it look smoth and blurry when using `size` to scale it up.

### refreshRate
Default: `700`
What? This is the rate at with the head changes it's status (looking at the front, or sides)

### spriteSheetSrc
Default: `"https://alvarocastro.github.io/doom-head/doomguy.png"`
The spritesheet to use, feel free to make your own custom head, or help by hosting it by yourself :)

## Todo
Everything, this is a work in progress, just uploaded what I got working so far. Will improve the docs, code, and add more features.

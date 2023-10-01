# WELCOME TO THE HIMALAYAS

Here's the [README.md](https://github.com/jarobinson-121/CS260-Startup/blob/main/README.md). For READING.

## Intro/Github notes

#### Github Notes
    - It is absolutely essential that you remember your key. 
    - 

#### Server Notes
    - Local host has an address that points to your device from your device

###### HTTPS:443
        * 443 is a port, meaining a door, and is the specific HTTPS port number
        * 442 is SSH
        * 80 is HTTP, the missing S means not secure

###### Gateway
        * helps to understand which service you're requesting to access, using subdomains
        * Sometimes called 'reverse proxies'

## HTML Notes
    * Head is basically meta data that doesn't actually show on the page


## CSS Notes
    * Can be embedded into the HTML inline
    * CSS applies RULES to specific types
    * While CSS can be placed in the head, there is usually a stylesheet created to handle all of the style rules
    * 3em
        * em means M in the font family that it's pulling from
        * The number is times the size of the M in the font family
    * Precedence
        * if there are multiple CSS styles about the same type, the one that is closeset wins out, meaning the furthest down one wins. Since the stylesheet is another file completely, it always loses.
    * Selectors
        * the variable type that the CSS is written about
        * If you have nested types, the most deeply nested style will overwrite the others.
        * IDs are for individuals. Don't duplicate them.
        * Classesare the opposite, they are intended for groups of things.
    * Declarations
        * The kinds of rules being added to the rule set

    * Fonts
        * @font-family
            * allows you to host a font on your server 
            * Still have to do the CSS that tells what to apply that font too
        * @import
            * allows you to pull fonts from other hosted servers
            * using swap allows it to pull a normal font until the other can be loaded
    *     * Flex applies to the parent
        * flex: 0 means no flex
        * 
    * Grid applies to the parent, and the children(contents) are the items in the grid
    * Block applies to the width of the current thing that it's
    * @media (orientation: portrait)
        * Use this to tell it what size the display can flex to
        * max-height: 700px (means 700px or less, this rule applies)
    *

## Javascript Notes

#### Startup Ideas From The ChatGPT
    - Song Lyric Swap: Users communicate using only song lyrics. It's a fun challenge to convey thoughts and emotions through snippets of popular songs.
    - Fortune Cookie Chat: Users receive random 'fortune cookie' messages that inspire conversation topics or provide quirky advice.
    - Personal Portfolio Site: Showcase your projects, skills, and achievements in a clean and organized manner. This can also serve as a digital resume.
    - Recipe Repository: Create a website where you can share your favorite recipes, complete with ingredients, instructions, and perhaps even photos.
    - Unpopular Opinions: A place to share exclusively unpopular opinions.


<!DOCTYPE html>
    <html lang = "en">
        <head>
            <title>First HTML</title>
        </head>
        <body>
            Hello World
        </body>
    </html>



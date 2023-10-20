# odin-etch-project
TOP: Etch-a-Sketch Project

Decomposition:

1. 16 x 16 grid of square div.
    1a. Create square div container (flexbox container)
    1b. create row of square divs, style with borders. 
        1b-1. create loop that adds square divs inside flexbox container (DOM Fragment?) based on input
        OR create dom fragment with loop appending child elements, then append to row div at the end.
        1b-2. box items inside row divs should have flex direction: column
    1c. create multiple 16 stacked rows of square divs.
        1c-1. loop creating 16 (n number) row boxes inside container with flex-direction: row.
        1c-2. each child box will have the n children added with flex-direction:column.

2. make divs appear as a grid (using flexbox)
    2a. style grids with borders, zero margins.

3. set hover effect so color changes when mouse is on top, leaving a trail thru grid like pen
    3a. create event listener for mouseontop/hover
    3b. event listener fires function that changes bg color (setAttribute('class', className) and style with CSS or inline setting of bkg color)

4. Add button at the top that sends popup asking for number of square per side for new grid.
    Once entered, existing grid should be removed and new grid should be generated in the
    same total space as before (e.g. 960px wide), so you got a new sketch pad. Set limit of user input to 100.
    4a. add button to top of page
    4b. create event listener for click of button
    4c. event listener fires input popup
    4d. event listener fires function that deletes current 
        grid divs and creates new grid based on user input. (reset fn essentially)
    4e. add if statement to catch user input > 100 (limit)


5. push project to github.
    5a. use command git push origin main.
    5b. deploy as a webpage.

# odin-etch-project
TOP: Etch-a-Sketch Project
